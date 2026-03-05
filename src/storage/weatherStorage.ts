import { MMKV } from 'react-native-mmkv';
import { WEATHER_STORAGE } from '../utils/constants';

export const storage = new MMKV({
  id: WEATHER_STORAGE,
});
