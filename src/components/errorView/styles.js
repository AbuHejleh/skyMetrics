import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 24,
      backgroundColor: '#F3F3F3',
      alignSelf: 'stretch',
      marginHorizontal: 16,
      borderRadius: 12,
      borderColor: 'black',
      borderWidth: 0.05,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: 'gray',
    },
    message: {
      fontSize: 16,
      textAlign: 'center',
      marginVertical: 12,
      color: '#333',
    },
    button: {
      marginTop: 12,
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: 'gray',
      borderRadius: 8,
    },
    buttonText: {
      color: '#fff',
      fontWeight: '600',
    },
  });

  export default styles;