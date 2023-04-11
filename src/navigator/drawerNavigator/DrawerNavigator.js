import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashBoard from '../../screens/DashBoard';
import Chats from '../../screens/Chats';
import BottomNavigator from '../tabNavigator/BottomNavigator';
import Logout from '../../screens/Logout';
import TopTabNavigator from '../topTabNavigator/TopTabNavigator';
import Calculator from '../../screens/calculator/Calculator';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='HomeScreen' component={BottomNavigator} options={{headerShown: true}}/>
            <Drawer.Screen name="DashBoard" component={DashBoard} />
            <Drawer.Screen name="Chats" component={Chats} />
            <Drawer.Screen name="Logout" component={Logout}/>
            <Drawer.Screen name="TopTabNavigator" component={TopTabNavigator}/>
            <Drawer.Screen name="Calculator" component={Calculator}/>
        </Drawer.Navigator>
    )
}