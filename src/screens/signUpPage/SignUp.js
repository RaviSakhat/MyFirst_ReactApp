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
import axios from 'axios';
import { Toast } from 'toastify-react-native';

export default function SignUp() {

  const navigation = useNavigation();

  const [enteringPass, setEnteringPass] = useState(false)
  const [showPass, setShowPass] = useState(false);
  const [userData, setUserData] = useState({
    userName: '',
    userEmail: '',
    Password: '',
    confirmPassword: ''
  })

  const [error, setError] = useState("");

  const onShowPass = () => {
    setShowPass(!showPass);
  }

  const sendToBackEnd = () => {
    if (!userData.userName ||
      !userData.userEmail ||
      !userData.Password ||
      !userData.confirmPassword) {
      setError("Please fill all the details")
      return;
    } else {
      if (userData.Password != userData.confirmPassword) {
        setError("Password and confirm Password must be the same");
        return;
      } else {
        axios.post('http://10.0.0.2:3000/signup', {
          userName: userData.userName,
          userEmail: userData.userEmail,
          Password: userData.Password,
          confirmPassword: userData.confirmPassword
        }).then(res => navigation.navigate("Verification", { userdata: res.data.userdata }))

          .catch(err => console.log('err', err))
      }
    }
    //     fetch('http://192.168.29.42:3000/signup',{
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(userData)
    //     })
    //     .then(res => res.json()).then(data => {
    //       console.log('data====>', data)
    //     })
    //   }
    // }

    // console.log('userData', userData)
    // Toast.success("User created successfully");
  }

  return (
    <View>
      <ImageBackground source={BackgroundImage} style={{ height: '100%', opacity: 0.8 }}>
        <ScrollView>
          <Text style={signUpStyle.topHeader}>Register</Text>
          <View style={signUpStyle.inputBox}>
            <User name='person' size={20} style={{ marginHorizontal: 10, paddingVertical: 15, color: 'black' }} />
            <TextInput style={{color: 'black'}} placeholder='Username' placeholderTextColor='black' onChangeText={(text) => setUserData({
              ...userData, userName
                : text
            })} onPressIn={() => setError(null)} />
          </View>
          <View style={signUpStyle.inputBox}>
            <Email name='mail' size={20} style={{ marginHorizontal: 10, paddingVertical: 15, color: 'black' }} />
            <TextInput placeholder='Email' placeholderTextColor='black' style={{color: 'black'}} onChangeText={(text) => setUserData({
              ...userData, userEmail
                : text
            })} onPressIn={() => setError(null)} />
          </View>
          <View style={signUpStyle.inputBox}>
            <LockClose name='lock-closed' size={20} style={{ marginHorizontal: 10, paddingVertical: 15, color: 'black' }} />
            <TextInput placeholder='Password' placeholderTextColor='black' style={{color: 'black'}} secureTextEntry={showPass ? false : true} onChangeText={(text) => setUserData({
              ...userData, Password
                : text
            })} onPressIn={() => setError(null)} />
            <ShowPass name={showPass ? 'eye' : 'eye-off'} style={{ marginHorizontal: 185, marginRight: 1, marginTop: 2, paddingVertical: 15, color: 'black' }} size={18} onPress={() => onShowPass()} />
          </View>
          <View style={signUpStyle.inputBox}>
            {
              <LockClose name={enteringPass ? 'lock-open' : 'lock-closed'} size={20} style={{ marginHorizontal: 10, paddingVertical: 15, color: 'black' }} />
            }
            <TextInput placeholder='Confirm Password' placeholderTextColor='black' style={{color: 'black'}} onFocus={() => setEnteringPass(false)} onBlur={() => setEnteringPass(true)} onChangeText={(text) => setUserData({
              ...userData, confirmPassword
                : text
            })} onPressIn={() => setError(null)} secureTextEntry={showPass ? false : true} />
            <ShowPass name={showPass ? 'eye' : 'eye-off'} style={{ marginHorizontal: 115, marginTop: 2, paddingVertical: 15,color: 'black' }} size={18} onPress={() => onShowPass()} />
          </View>
          {
            error ? <Text style={signUpStyle.signUpError}>{error}</Text> : null
          }
          <TouchableOpacity>
            <View style={signUpStyle.signUpContainer} >
              <TouchableOpacity onPress={() => sendToBackEnd()}>
                <Text style={signUpStyle.signUpText}>SignUp
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <View style={signUpStyle.loginOptionContainer}>
            <TouchableOpacity>
              <Text style={signUpStyle.loginOptionText}>Have an account? <Text style={signUpStyle.loginText} onPress={() => navigation.navigate("Login")}>Login</Text></Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  )
}