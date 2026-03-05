import React from 'react';
import { View, ActivityIndicator, FlatList, Text } from 'react-native';
import ErrorView from '../../../../components/errorView';
import ForecastCell from '../forecastCell';
import styles from './styles';
import { useWeatherForecast } from '../../../../hooks/useWeather';

const ForecastListSection = () => {
  const { data, loading, error, lastSync, bgLoader, onRetry } =
    useWeatherForecast();
  if (loading) {
    return (
      <View style={styles.screenLoader}>
        <ActivityIndicator size="large" color={styles.loader.color} />
      </View>
    );
  }

  if (error) {
    return <ErrorView onRetry={onRetry} />;
  }

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.lastSyncText}>
        Last Synced: {lastSync ? new Date(lastSync).toLocaleString() : '—'}
      </Text>
      <FlatList
        data={data?.list}
        refreshing={bgLoader}
        onRefresh={() => {
          onRetry(true);
        }}
        keyExtractor={item => `${item.dt + item.pop}`}
        renderItem={({ item }) => <ForecastCell item={item} />}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

export default React.memo(ForecastListSection);
