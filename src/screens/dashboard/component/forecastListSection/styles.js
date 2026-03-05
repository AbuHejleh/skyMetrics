import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loader: {
    color: '#ff6b6b',
  },
  contentContainerStyle: {
    paddingHorizontal: 16,
    marginTop: 16,
    paddingBottom: 200,
  },
  lastSyncText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  containerStyle: {
    gap: 16,
  },
  screenLoader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default styles;
