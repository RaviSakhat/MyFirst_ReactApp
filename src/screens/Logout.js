import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Logout() {

    const navigation = useNavigation();

    return (
        <>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.fontStyle}>Are You sure to want to exit?</Text>
                <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
                >
                    <Text style={{ backgroundColor: 'black', padding: 10, marginVertical: 10, color: 'white', fontFamily: "RobotoMono-Italic" }}>Logout</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    fontStyle:{
        color: 'black',
        fontFamily: 'RobotoMono-Italic',
    }
})