import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Status from '../../screens/Status';
import Call from '../../screens/Call';

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Status" component={Status} />
          <Tab.Screen name="Call" component={Call} />
        </Tab.Navigator>
      );
}