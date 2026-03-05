import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ForecastItem } from '../../../../services/weatherApi/types';
import useController from './controller';
import styles from './styles';

interface IForecastCellProps {
  // since it is only a small interface we will keep it here instead of creating a type file for this component
  item: ForecastItem;
}

const ForecastCell: React.FC<IForecastCellProps> = ({ item }) => {
  const { handlePress } = useController(item);

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.date}>{item.dt_txt}</Text>
      <Text style={styles.temp}>{Math.round(item.main.temp)}°C</Text>
      <Text style={styles.desc}>{item.weather[0].description}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(ForecastCell);
