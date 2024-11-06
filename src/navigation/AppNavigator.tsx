import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import ChatScreen from '../screens/ChatScreen';
const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="home" component={BottomTabNavigator} />
      <Stack.Screen name="chat" component={ChatScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

