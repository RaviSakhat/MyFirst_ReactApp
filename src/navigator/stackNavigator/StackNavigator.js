
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import SignUp from '../../screens/signUpPage/SignUp';
import DrawerNavigator from '../drawerNavigator/DrawerNavigator';
import TopTabNavigator from '../topTabNavigator/TopTabNavigator';
import HomeScreen from '../../screens/HomeScreen';
import BottomNavigator from '../tabNavigator/BottomNavigator';
import ForgotPassword from '../../screens/ForgotPassword';
import Verification from '../../screens/signUpPage/Verification';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name='DrawerNavigator' component={DrawerNavigator} options={{ headerShown: false }} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: true }} />
        <Stack.Screen name='TopTabNavigator' component={TopTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name='BottomNavigator' component={BottomNavigator} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{headerShown: true}}></Stack.Screen>
        <Stack.Screen name='Verification' component={Verification} options={{headerShown: true}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}