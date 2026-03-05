import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backStyle: { color: 'blue', fontSize: 16, fontWeight: 500 },
  titleStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    zIndex: -99, // so the back button be clickable since this one takes the full width
  },
  container: {
    height: 48,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
