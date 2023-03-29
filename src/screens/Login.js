import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'

export default function Login() {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity>
                <Text style={{ backgroundColor: 'pink', padding: 10, marginVertical: 10, color: 'purple' }} onPress={() => navigation.navigate("DrawerNavigator")}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'blue', padding: 20, marginVertical: 10 }} onPress={() => navigation.navigate("SignUp")}>
                <Text style={{ color: 'white' }}>New User SignUp?</Text>
            </TouchableOpacity>
        </View>
    )
}