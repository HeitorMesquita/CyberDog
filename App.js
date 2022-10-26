import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
import HomeScreen from './Screens/Home';
import AgendamentoScreen from './Screens/Agendamento';
import ManualScreen from './Screens/Manual';
import MonitoramentoScreen from './Screens/Monitoramento';

const Stack = createNativeStackNavigator ()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home" screenOptions = {{
        headerShown: false
      }}/>
      <Stack.Screen name = "Home" component = {HomeScreen}/>
      <Stack.Screen name = "Agendamento" component = {AgendamentoScreen}/>
      <Stack.Screen name = "Manual" component = {ManualScreen}/>
      <Stack.Screen name = "Monitoramento" component = {MonitoramentoScreen}/>
    </NavigationContainer>
  );
}


