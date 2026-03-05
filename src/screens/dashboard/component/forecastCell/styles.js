import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  date: {
    fontSize: 14,
    color: '#777',
  },
  temp: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  desc: {
    fontSize: 14,
    color: '#444',
    textTransform: 'capitalize',
  },
});

export default styles;
