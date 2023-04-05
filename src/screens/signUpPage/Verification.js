import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react';
import backGroundImage from '../../../assets/img/VerificationBg.jpg'
import { ScrollView } from 'react-native-gesture-handler';
import CodeInput from 'react-native-confirmation-code-input';
import { signUpStyle } from './SignUpStyle';

export default function Verification() {

  // const { userData } = route.params;

  // console.log('userdata', userData?.verificationCode)

  const onCodeAdded = (code) => {
    console.log(code)
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
            compareWithCode='123456'
            autoFocus={false}
            codeInputStyle={{ fontWeight: '800' }}
            onFulfill={(isValid, code) => onCodeAdded(code)}
          />
          <View>

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
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  )
}