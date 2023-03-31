import { View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { signUpStyle } from '../signUpPage/SignUpStyle';
import Email from 'react-native-vector-icons/Ionicons'
import User from 'react-native-vector-icons/Ionicons'
import LockClose from 'react-native-vector-icons/Ionicons'
import BackgroundImage from '../../../assets/img/bgSignUp.jpg';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'
import ShowPass from 'react-native-vector-icons/Ionicons'

export default function SignUp() {

  const navigation = useNavigation();

  const [enteringPass, setEnteringPass] = useState(false)
  const [showPass, setShowPass] = useState(false)

  const onShowPass = () => {
    setShowPass(!showPass);
}

  return (
    <View>
      <ImageBackground source={BackgroundImage} style={{ height: '100%', opacity: 0.8 }}>
        <ScrollView>
          <Text style={signUpStyle.topHeader}>Register</Text>
          <View style={signUpStyle.inputBox}>
            <User name='person' size={20} style={{ marginHorizontal: 10 }} />
            <TextInput placeholder='Username' placeholderTextColor='black' />
          </View>
          <View style={signUpStyle.inputBox}>
            <Email name='mail' size={20} style={{ marginHorizontal: 10 }} />
            <TextInput placeholder='Email' placeholderTextColor='black' />
          </View>
          <View style={signUpStyle.inputBox}>
            <LockClose name='lock-closed' size={20} style={{ marginHorizontal: 10 }} />
            <TextInput placeholder='Password' placeholderTextColor='black' />
            <ShowPass name={showPass ? 'eye' : 'eye-off'} style={{ marginHorizontal: 185, marginRight: 1, marginTop: 2,}} size={18} onPress={() => onShowPass()} />
          </View>
          <View style={signUpStyle.inputBox}>
            {
              <LockClose name={enteringPass ? 'lock-open' : 'lock-closed'} size={20} style={{ marginHorizontal: 10 }} />
            }
            <TextInput placeholder='Confirm Password' placeholderTextColor='black' onFocus={() => setEnteringPass(false)} onBlur={() => setEnteringPass(true)} />
            <ShowPass name={showPass ? 'eye' : 'eye-off'} style={{ marginHorizontal: 130, marginTop: 2 }} size={18} onPress={() => onShowPass()} />
          </View>
          <TouchableOpacity>
            <View style={signUpStyle.signUpContainer}>
              <Text style={signUpStyle.signUpText}>SignUp
              </Text>
            </View>
          </TouchableOpacity>
          <View style={signUpStyle.loginOptionContainer}> 
            <Text style={signUpStyle.loginOptionText}>Have an account? <Text style={signUpStyle.loginText} onPress={() => navigation.navigate("Login")}>Login</Text></Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  )
}