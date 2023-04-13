import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import Settings from '../../screens/Settings';
import Profile from '../../screens/Profile/Profile';
import IonicIcons from "react-native-vector-icons/Ionicons"
import Reels from '../../screens/reels/Reels';


const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false, tabBarIcon: () => <BottomIconsContainer name="home" />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false, tabBarIcon: () => <BottomIconsContainer name="settings" /> }} />
      <Tab.Screen
        name="Reels"
        component={Reels}
        options={{
          headerShown: false, tabBarIcon: () =>
            <BottomIconsContainer name="caret-forward-circle" />
        }} />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false, tabBarIcon: () =>
            <BottomIconsContainer name="person-circle" />
        }} />
    </Tab.Navigator>
  )
}

const BottomIconsContainer = (props) => {
  return <IonicIcons name={props.name} size={20} />;
};