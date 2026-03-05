# SkyMetrics Weather Dashboard

This is a React Native iOS app that shows weather forecasts along with battery status. It uses native modules to get real-time battery info and fetches weather data from OpenWeatherMap.

---

## App Structure

- **App.tsx**  
  Sets up the navigation and safe area for the app. Uses `SafeAreaProvider` and wraps screens with a custom `SafeArea` component. The main navigation stack is `RootStack`.

- **Dashboard Screen**  
  The main screen shows:
  - `BatteryHeader` — displays current battery level and charging status.
  - `ForecastListSection` — displays a list of weather forecasts with pull-to-refresh.

---

## Battery Module

- **BatteryHeader Component**  
  Shows battery level (0–100%) and charging status. Uses the `useBattery` hook to receive real-time updates from the native `BatteryModule`.

- **useBattery Hook**  
  Subscribes to battery events emitted from iOS and keeps battery info in React state. Automatically cleans up the listener when the component unmounts.

- **BatteryModule JS Bridge**  
  Provides `subscribeToBattery` to listen for `"BatteryUpdated"` events from the native iOS module.

- **iOS Native Module**  
  `BatteryModule` is written in Swift and emits battery updates via `RCTEventEmitter`. Events are only sent when a JS listener is active.

---

## Weather Module

- **useWeatherForecast Hook**  
  Handles fetching, caching, and refreshing weather forecast data.

  - Loads cached data first if available.
  - Fetches fresh data in the background.
  - Handles errors gracefully, showing cached data if API fails.

- **fetchWeatherForecast Function**  
  Calls the OpenWeatherMap API for a given location. Returns the forecast JSON. Includes a small delay to simulate network latency for testing.

---

## How to Use

1. Clone the repo and install dependencies.
2. Open the iOS project in Xcode and run the app.
3. On the Dashboard screen:
   - Battery info is shown at the top.
   - Weather forecast is displayed in a scrollable list with last sync timestamp.
4. The app automatically updates battery and weather data in real-time.

---

### Prerequisites

- Node.js >= 22.11.0
- React Native 0.84.1

---

This setup keeps things simple and reactive, ensuring the UI always shows up-to-date battery and weather info without blocking the user interface.
