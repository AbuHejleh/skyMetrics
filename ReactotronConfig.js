import Reactotron from 'reactotron-react-native';

Reactotron.configure({ name: 'skyMetrics' }) // optional: gives your app a name in Reactotron
  .useReactNative() // enables built-in react-native plugins
  .connect(); // connect to Reactotron desktop app

// optional: disable console logs in production
if (__DEV__) {
  console.tron = Reactotron;
}
