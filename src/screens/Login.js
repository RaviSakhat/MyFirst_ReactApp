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


export default function Login() {

    const navigation = useNavigation();
    const [inputBox, setInputBox] = useState("");
    const [userValue, setUserValue] = useState([]);
    const [enteringPass, setenteringPass] = useState(false);
    const [showPass, setshowPass] = useState(false)

    useEffect(() => {
        async function tempFunction() {
            await getItemList();
        }
        tempFunction();
        return () => {
        };
    }, [])


    const addItemToList = async () => {
        // try {
        //     userValue.push(inputBox);
        //     console.log('userValue', userValue)
        //     const output = JSON.stringify(userValue);
        //     await AsyncStorage.setItem("itemList", output)
        //     console.log('output', output)
        //     setInputBox('');
        // } catch (error) {
        //     console.log('error', error)
        // }
        // navigation.navigate("HomeScreen")
    }

    const getItemList = async () => {
        try {
            const userData = await AsyncStorage.getItem("itemList");
            const getOutput = JSON.parse(userData);
            setUserValue(getOutput);
        } catch (error) {
            console.log('error', error)
        }
        // navigation.navigate("HomeScreen")
    }

    const onHandleDelete = async () => {
        await AsyncStorage.clear();
        setUserValue([]);
    }

    const onShowPass = () => {
        setshowPass(!showPass);
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
                                    value={inputBox}
                                    placeholder="Please enter your email"
                                    placeholderTextColor={'black'}
                                    onChangeText={(value) => setInputBox(value)} />
                            </View>
                            <View style={LogInPageStyle.inputBoxContainer}>
                                <User name='person' size={20} style={{ marginHorizontal: 10 }} />
                                <TextInput
                                    value={inputBox}
                                    placeholder="Please enter your name"
                                    placeholderTextColor={'black'}
                                    onChangeText={(value) => setInputBox(value)} />
                            </View>
                            <View style={LogInPageStyle.inputBoxContainer}>
                                {
                                    <LockClose name={enteringPass ? 'lock-open' : 'lock-closed'} size={20} style={{ marginHorizontal: 10 }} />
                                }
                                <TextInput
                                    value={inputBox}
                                    placeholder="Please enter your password"
                                    placeholderTextColor={'black'}
                                    secureTextEntry={showPass ? false : true}
                                    onChangeText={(value) => setInputBox(value)}
                                    //how to change icon when you entering the input field value
                                    onFocus={() => setenteringPass(false)}
                                    onBlur={() => setenteringPass(true)}
                                />
                                <ShowPass name={showPass ? 'eye' : 'eye-off'} style={{ marginHorizontal: 70, marginTop: 2 }} size={20} onPress={() => onShowPass()} />
                            </View>
                            {/* <Text style={{fontFamily: "RobotoMono-VariableFont_wght"}}>HomeScreen</Text> */}
                            <View style={LogInPageStyle.forgotPasswordText}>
                                <Text>Forgot Your Password? <Text style={{fontWeight: 'bold'}} onPress={() => navigation.navigate("ForgotPassword")}>Click Here</Text></Text>
                            </View>
                            <View style={LogInPageStyle.buttonView}>
                                <TouchableOpacity  style={LogInPageStyle.loginButton} onPress={() => navigation.navigate("DrawerNavigator")}>
                                    <Text style={LogInPageStyle.loginButton} >Login</Text>
                                </TouchableOpacity>
                                {/* <TouchableOpacity>
                            <Text style={LogInPageStyle.addButton} onPress={() => onHandleDelete()}>Delete</Text>
                        </TouchableOpacity> */}
                            </View>
                            {/* <ScrollView>
                        {
                            userValue?.map((item, index) => {
                                return (
                                    <Text>{item}</Text>
                                    )
                                })
                            }
                        </ScrollView> */}
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
                                <Text style={LogInPageStyle.SignUpButtnText} onPress={()=> navigation.navigate("SignUp")}>Sign Up</Text>
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
