// import { View, Text, TouchableOpacity } from 'react-native';
// import React from 'react';
// import { useNavigation } from '@react-navigation/native'
import { View, Text, TextInput, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogInPageStyle } from '../../style';
import Email from 'react-native-vector-icons/Ionicons'
import User from 'react-native-vector-icons/Ionicons'
import LockClose from 'react-native-vector-icons/Ionicons'
import ShowPass from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import BackgroundImage from '../../assets/img/bg.jpg'
import SocialIcons from 'react-native-vector-icons/Ionicons'
import { signUpStyle } from './signUpPage/SignUpStyle';
import axios from 'axios';



export default function Login() {

    const navigation = useNavigation();
    const [enteringPass, setenteringPass] = useState(false);
    const [showPass, setshowPass] = useState(false);
    const [inputBox, setInputBox] = useState({
        userEmail: '',
        // userName: '',
        Password: '',
    });

    const [error, setError] = useState("");

    const onShowPass = () => {
        setshowPass(!showPass);
    }

    const onHandleLogin = () => {
        if (!inputBox.userEmail || !inputBox.Password) {
            setError("Please fill all the details");
        } else {
            axios.post('http://localhost:3000/signin', {
                userEmail: inputBox.userEmail,
                Password: inputBox.Password
            }).then(res => console.log('res', res))
            .catch(err => setError("plese enter your correct password"))
            navigation.navigate("DrawerNavigator")
            return;
    }
}

return (
    <View style={LogInPageStyle.container}>
        <ImageBackground source={BackgroundImage} style={{ height: '100%' }} >
            <ScrollView>
                <View>
                    <ScrollView>
                        <Text style={LogInPageStyle.loginText}>Hi!</Text>
                        <View style={LogInPageStyle.inputBoxContainer}>
                            <Email name='mail' size={20} style={{ marginHorizontal: 10 }} />
                            <TextInput
                                placeholder="Please enter your email"
                                placeholderTextColor={'black'}
                                onChangeText={(value) => setInputBox({ ...inputBox, userEmail: value })} onPressIn={() => setError(null)} />
                        </View>
                        {/* <View style={LogInPageStyle.inputBoxContainer}>
                                <User name='person' size={20} style={{ marginHorizontal: 10 }} />
                                <TextInput
                                    placeholder="Please enter your name"
                                    placeholderTextColor={'black'}
                                    onChangeText={(value) => setInputBox({ ...inputBox, userName: value })} />
                            </View> */}
                        <View style={LogInPageStyle.inputBoxContainer}>
                            {
                                <LockClose name={enteringPass ? 'lock-open' : 'lock-closed'} size={20} style={{ marginHorizontal: 10 }} />
                            }
                            <TextInput
                                placeholder="Please enter your password"
                                placeholderTextColor={'black'}
                                secureTextEntry={showPass ? false : true}
                                onChangeText={(value) => setInputBox({ ...inputBox, Password: value })}
                                //how to change icon when you entering the input field value
                                onFocus={() => setenteringPass(false)}
                                onBlur={() => setenteringPass(true)}
                                onPressIn={() => setError(null)}
                            />
                            <ShowPass name={showPass ? 'eye' : 'eye-off'} style={{ marginHorizontal: 70, marginTop: 2 }} size={20} onPress={() => onShowPass()} />
                        </View>
                        <View style={LogInPageStyle.forgotPasswordText}>
                            <Text>Forgot Your Password? <Text style={{ fontWeight: 'bold' }} onPress={() => navigation.navigate("ForgotPassword")}>Click Here</Text></Text>
                        </View>
                        <View style={LogInPageStyle.buttonView}>
                            {
                                error ? <Text style={signUpStyle.signUpError}>{error}</Text> : null
                            }
                            <TouchableOpacity style={LogInPageStyle.loginButton} onPress={() => onHandleLogin()}>
                                <Text style={LogInPageStyle.loginButton} >Login</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                    <View style={LogInPageStyle.orTextView}>
                        <Text style={LogInPageStyle.orTextStyle}>Or</Text>

                    </View>
                </View>
                <View style={LogInPageStyle.SignUpContainer}>
                    <View>
                        <Text style={LogInPageStyle.signUpText}>New User SignUp?</Text>
                    </View>
                    <View style={LogInPageStyle.signUpButton}>
                        <TouchableOpacity onPress={() => addItemToList()} style={LogInPageStyle.loginButton} >
                            <Text style={LogInPageStyle.SignUpButtnText} onPress={() => navigation.navigate("SignUp")}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginVertical: -20 }}>
                    <TouchableOpacity>
                        <View style={LogInPageStyle.socialMediaContainer}>
                            <SocialIcons name='logo-facebook' size={20} style={LogInPageStyle.socialMediaLogo} />
                            <Text style={LogInPageStyle.socialMediaText}>Continue with Facebook</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={LogInPageStyle.socialMediaContainer}>
                            <SocialIcons name='logo-google' size={20} style={LogInPageStyle.socialMediaLogo} />
                            <Text style={LogInPageStyle.socialMediaText}>Continue with Google</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={LogInPageStyle.socialMediaContainer}>
                            <SocialIcons name='logo-apple' size={20} style={LogInPageStyle.socialMediaLogo} />
                            <Text style={LogInPageStyle.socialMediaText}>Continue with Apple</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ImageBackground>
    </View>
)
}
