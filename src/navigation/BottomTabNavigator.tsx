import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChatListScreen from '../screens/ChatListScreen';
import SettingScreen from '../screens/SettingScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

type TabBarDetails = {
  chatlist: {title: string; icon: string};
  settings: {title: string; icon: string};
};
const BottomTabNavigator = () => {
  const tabBarDetails = (focused: boolean): TabBarDetails => ({
    chatlist: {
      title: 'Chat',
      icon: focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline',
    },
    settings: {
      title: 'Setting',
      icon: focused ? 'settings' : 'settings-outline',
    },
  });
  return (
    <Tab.Navigator
      screenOptions={({navigation, route}) => {
        const tabDetails = tabBarDetails(false);
        const routeName = route.name as keyof typeof tabDetails;
        return {
          tabBarIcon: ({focused}) => (
            <Icon
              name={tabBarDetails(focused)[routeName].icon}
              size={20}
              color={focused ? '#000' : '#7A7A7A'}
            />
          ),
          tabBarActiveTintColor: '#000',
          title: tabBarDetails(false)[routeName].title ?? '',
          tabBarStyle:{paddingBottom:3},
        };
      }}>
      <Tab.Screen name="chatlist" component={ChatListScreen} />
      <Tab.Screen name="settings" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
