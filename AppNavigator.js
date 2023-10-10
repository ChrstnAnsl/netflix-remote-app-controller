import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import RemoteScreen from './screens/RemoteScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Netflix Remote' }} />
        <Stack.Screen name="Remote" component={RemoteScreen} options={{ title: 'Netflix Remote' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
