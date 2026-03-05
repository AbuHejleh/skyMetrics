import React, { ReactNode } from 'react';
import styles from './styles';
import { View } from 'react-native';

interface ICardProps {
  children: ReactNode[];
}
const Card: React.FC<ICardProps> = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;
