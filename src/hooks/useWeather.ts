import { useState, useEffect, useCallback, useLayoutEffect } from 'react';
import { WeatherForecastResponse } from '../services/weatherApi/types';
import { fetchWeatherForecast } from '../services/weatherApi/api';
import { storage } from '../storage/weatherStorage';
import { STORAGE_KEY, STORAGE_TIMESTAMP } from '../utils/constants';

export function useWeatherForecast() {
  const [data, setData] = useState<WeatherForecastResponse | null>(null);
  const [loading, setLoading] = useState(true); // full screen Loader
  const [bgLoader, setBgLoader] = useState(false); // small loader

  const [error, setError] = useState<boolean>(false);
  const [lastSync, setLastSync] = useState<string | null>(null);

  /*
    1st case : normal api fetch 
    2nd case : already local data 
    3rd case: error fetching api while having local data
    4th case: no local data and error in the api 
  */

  const handleLocalData = useCallback((): boolean => {
    try {
      const localData = storage.getString(STORAGE_KEY);
      const storedTimestamp = storage.getString(STORAGE_TIMESTAMP);

      if (localData) {
        setData(JSON.parse(localData));
        setLoading(false); // close the screen loader to show the local data
      }
      if (storedTimestamp) {
        setLastSync(storedTimestamp);
      }
      return !!localData; // return if there is data or not.
    } catch (err) {
      console.log('Error in reading data @MMKV ==> ', err);
      return false;
    }
  }, []);

  const fetchData = useCallback(
    async (isBackground = false) => {
      if (isBackground) {
        setBgLoader(true);
      } else {
        setLoading(true);
      }
      setError(false);
      try {
        const result = await fetchWeatherForecast({
          lat: '31.9454',
          lon: '35.9284',
        }); // in case wanted to change it in the future but for now I will keep it as it is!

        setData(result);

        // to save data locally on success !!
        const now = new Date().toISOString();
        setLastSync(now);
        storage.set(STORAGE_KEY, JSON.stringify(result));
        storage.set(STORAGE_TIMESTAMP, now);
      } catch (err: any) {
        console.log(err);

        if (!data) {
          // to still show the local data
          setError(true);
        }
      } finally {
        setLoading(false);
        setBgLoader(false);
      }
    },
    [data],
  );

  const clearWeatherCache = () => {
    storage.delete(STORAGE_KEY);
    storage.delete(STORAGE_TIMESTAMP);
    console.log('Weather cache cleared');
  };

  useEffect(() => {
    // clearWeatherCache();

    const hasLocalData = handleLocalData();
    if (hasLocalData) {
      fetchData(true);
    } else {
      fetchData(false);
    }
  }, []);

  return { data, loading, error, lastSync, bgLoader, onRetry: fetchData };
}
