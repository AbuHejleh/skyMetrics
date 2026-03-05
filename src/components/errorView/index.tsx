import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface ErrorViewProps {
  message?: string;
  onRetry?: () => void;
}

const ErrorView: React.FC<ErrorViewProps> = ({
  message = 'Something went wrong.',
  onRetry,
}) => {
  console.log('onRetry :::: ', onRetry);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Oops!</Text>
      <Text style={styles.message}>{message}</Text>
      {onRetry && (
        <TouchableOpacity style={styles.button} onPress={onRetry}>
          <Text style={styles.buttonText}>Retry</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ErrorView;
