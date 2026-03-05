import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import useController from './controller';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

interface IScreenHeaderProps {
  title?: string;
  customBackButton?: {
    // just added it to show how it will be passing the data as an object instead of sending it one by one. :)
    onPress: () => void;
    iconName: string;
  };
}

const ScreenHeader: React.FC<IScreenHeaderProps> = ({
  title,
  customBackButton,
}) => {
  const { navBack } = useController();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={customBackButton?.onPress ?? navBack}>
        <Text style={styles.backStyle}>Back</Text>
      </TouchableOpacity>
      {title && <Text style={styles.titleStyle}>{title}</Text>}
    </View>
  );
};

export default React.memo(ScreenHeader);
