import React from 'react';
import { View } from 'react-native';
import BatteryHeader from './component/batteryHeader';
import ForecastListSection from './component/forecastListSection';

const Dashboard = () => {
  return (
    <View style={{ flex: 1 }}>
      <BatteryHeader />
      <ForecastListSection />
    </View>
  );
};

export default Dashboard;
