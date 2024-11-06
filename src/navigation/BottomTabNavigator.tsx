import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChatListScreen from '../screens/ChatListScreen';
import SettingScreen from '../screens/SettingScreen';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="chatlist" component={ChatListScreen} />
      <Tab.Screen name="settings" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
