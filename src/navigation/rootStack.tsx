import React from 'react';
import Dashboard from '../screens/dashboard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PrivateRoutes } from '../utils/constants';
import ForecastDetails from '../screens/forecastDetails';

const RootStack = () => {
  const StackNavigation = createNativeStackNavigator();

  return (
    <>
      <StackNavigation.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {},
        }}
        initialRouteName={PrivateRoutes.DASHBOARD}
      >
        <StackNavigation.Screen
          name={PrivateRoutes.DASHBOARD}
          component={Dashboard}
        />
        <StackNavigation.Screen
          name={PrivateRoutes.FORECAST_DETAILS}
          component={ForecastDetails}
        />
      </StackNavigation.Navigator>
    </>
  );
};

export default RootStack;
