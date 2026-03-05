import React from 'react';
import { Text, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { ForecastItem } from '../../services/weatherApi/types';
import styles from './styles';
import Card from '../../components/card';
import ScreenHeader from '../../components/screenHeader';

const ForecastDetails = () => {
  const route: any = useRoute();
  const forecast: ForecastItem = route.params?.forecast;

  if (!forecast) return null;

  const hasTemperature = forecast.main?.temp != null;
  const hasFeelsLike = forecast.main?.feels_like != null;
  const hasHumidity = forecast.main?.humidity != null;
  const hasWind = forecast.wind?.speed != null;
  const hasWindDeg = forecast.wind?.deg != null;
  const hasWeather = forecast.weather?.length > 0;

  return (
    <>
      <ScreenHeader title="Details" />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ padding: 16 }}
      >
        {forecast.dt_txt && <Text style={styles.date}>{forecast.dt_txt}</Text>}

        {hasTemperature && (
          <Card>
            <Text style={styles.cardTitle}>Temperature</Text>
            <Text style={styles.cardValue}>
              {Math.round(forecast.main.temp)}°C
            </Text>
            {hasFeelsLike && (
              <Text style={styles.cardSubtitle}>
                Feels Like: {Math.round(forecast.main.feels_like)}°C
              </Text>
            )}
          </Card>
        )}

        {hasHumidity && (
          <Card>
            <Text style={styles.cardTitle}>Humidity</Text>
            <Text style={styles.cardValue}>{forecast.main.humidity}%</Text>
          </Card>
        )}

        {hasWind && (
          <Card>
            <Text style={styles.cardTitle}>Wind</Text>
            <Text style={styles.cardValue}>{forecast.wind.speed} m/s</Text>
            {hasWindDeg && (
              <Text style={styles.cardSubtitle}>
                Direction: {forecast.wind.deg}°
              </Text>
            )}
          </Card>
        )}

        {hasWeather && (
          <Card>
            <Text style={styles.cardTitle}>Weather</Text>
            <Text style={styles.cardValue}>{forecast.weather[0].main}</Text>
            <Text style={styles.cardSubtitle}>
              {forecast.weather[0].description}
            </Text>
          </Card>
        )}
      </ScrollView>
    </>
  );
};

export default React.memo(ForecastDetails);
