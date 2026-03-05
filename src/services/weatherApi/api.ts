import { ILocationProps, WeatherForecastResponse } from './types';

const API_KEY = '8264516721db31540e1b92a62c32b975';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export async function fetchWeatherForecast(
  location: ILocationProps,
): Promise<WeatherForecastResponse> {
  const sleep = (ms: number) =>
    new Promise((resolve: any) => setTimeout(resolve, ms));

  const { lat, lon } = location;

  const response = await fetch(
    `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
  );

  if (!response.ok) {
    throw new Error('API request failed');
  }
  await sleep(5000);

  return response.json();
}
