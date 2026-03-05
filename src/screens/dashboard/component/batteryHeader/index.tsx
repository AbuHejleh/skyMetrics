import React from 'react';
import { View, Text } from 'react-native';
import { useBattery } from '../../../../hooks/useBattery';
import styles from './styles';

const BatteryHeader = () => {
  const { level, charging } = useBattery();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        🔋 {level}% {charging ? '(Charging)' : ''}
      </Text>
    </View>
  );
};

export default BatteryHeader;
