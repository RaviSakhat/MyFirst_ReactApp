import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react';
import backGroundImage from '../../../assets/img/VerificationBg.jpg'
import { ScrollView } from 'react-native-gesture-handler';
import CodeInput from 'react-native-confirmation-code-input';
import { signUpStyle } from './SignUpStyle';
import axios from 'axios';

export default function Verification({navigation, route}) {

  const { userdata } = route.params;
  console.log('userdata', userdata.verificationCode);

  // const [actualCode, setActualCode] = useState("");
  const [userCode, setUserCode] = useState("");
  const [verificationError, setVerificationError] = useState("");

  useEffect(() => {
    let code = userdata.verificationCode
    console.log('code', code)
    setUserCode(code)
  }, [userdata])
  
  const onCodeAdded = (code) => {
    if(code === userCode){
      alert("User created Successfully")
      navigation.navigate("Login")
    }
  }

  return (
    <View>
      <ImageBackground source={backGroundImage} style={{ height: '100%', opacity: 0.8 }}>
        <ScrollView>
          <Text style={signUpStyle.VerificationText}>
            Enter Verification Code!
          </Text>
          <CodeInput
            keyboardType="numeric"
            codeLength={6}
            className='border-circle'
            compareWithCode={userCode}
            autoFocus={false}
            codeInputStyle={{ fontWeight: '800' }}
            onFulfill={(isValid, code) => onCodeAdded(code)}
          />
          {/* <View>
            <TouchableOpacity>
              <View style={signUpStyle.VerificationButton} >
                <Text style={signUpStyle.VerificationButtonText}>SignUp
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={signUpStyle.VerificationButton}>
                <TouchableOpacity>
                  <Text style={signUpStyle.VerificationButtonText}>Resend
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View> */}
        </ScrollView>
      </ImageBackground>
    </View>
  )
}