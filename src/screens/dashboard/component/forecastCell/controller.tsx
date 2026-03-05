import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { PrivateRoutes } from '../../../../utils/constants';
import { ForecastItem } from '../../../../services/weatherApi/types';

const useController = (item: ForecastItem) => {
  const navigation = useNavigation<any>();

  const handlePress = useCallback(() => {
    navigation.navigate(PrivateRoutes.FORECAST_DETAILS, { forecast: item });
  }, [item]);

  return {
    handlePress,
  };
};

export default useController;
