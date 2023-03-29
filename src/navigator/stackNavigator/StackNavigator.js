
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import SignUp from '../../screens/SignUp';
import DrawerNavigator from '../drawerNavigator/DrawerNavigator';
import TopTabNavigator from '../topTabNavigator/TopTabNavigator';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: true }} />
        <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: true }} />
        <Stack.Screen name='DrawerNavigator' component={DrawerNavigator} options={{ headerShown: false }} />
        {/* <Stack.Screen name='TopTabNavigator' component={TopTabNavigator} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}