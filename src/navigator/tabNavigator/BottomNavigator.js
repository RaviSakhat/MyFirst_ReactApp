import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import Settings from '../../screens/Settings';
import Profile from '../../screens/Profile/Profile';
import IonicIcons from "react-native-vector-icons/Ionicons"


const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false, tabBarIcon: () => <BottomIconsContainer name="home" />, tabBarColor: "black" }} />
      <Tab.Screen name="Settings" component={Settings} options={{ headerShown: false, tabBarIcon: () => <BottomIconsContainer name="settings" />, tabBarColor: "Grey" }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        headerShown: false, tabBarIcon: () =>
          <BottomIconsContainer name="person-circle" />
      }} />
    </Tab.Navigator>
  )
}

const BottomIconsContainer = (props) => {
  return <IonicIcons name={props.name} size={20} />;
};