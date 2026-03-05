import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

const useController = () => {
  const navigation = useNavigation();

  const navBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return {
    navBack,
  };
};

export default useController;
