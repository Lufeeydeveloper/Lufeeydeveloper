
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SchedulePickupScreen from './screens/SchedulePickupScreen';
import RecyclingInfoScreen from './screens/RecyclingInfoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SchedulePickup" component={SchedulePickupScreen} />
        <Stack.Screen name="RecyclingInfo" component={RecyclingInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

