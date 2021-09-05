import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import PlayScreen from './screens/PlayScreen';
import SettingScreen from './screens/SettingsScreen';
export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigator= createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
HomeScreen:{screen:HomeScreen},
PlayScreen:{screen:PlayScreen},
SettingScreen:{screen:SettingScreen}
})
const AppContainer=createAppContainer(switchNavigator)