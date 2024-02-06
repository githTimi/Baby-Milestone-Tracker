import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/navigation/tab';
import "./global.css"
import { Provider } from 'react-redux'
import {store} from './src/states/store';


export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer >
       <Tabs />
       <StatusBar  style="auto"  />
    </NavigationContainer>
    </Provider>
  );
}
