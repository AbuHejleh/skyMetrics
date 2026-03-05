import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/navigation/rootStack';
import SafeArea from './src/components/safeArea';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <SafeArea>
            <RootStack />
          </SafeArea>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}
