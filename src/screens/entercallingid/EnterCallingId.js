import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { EnterCallingIdStyle } from './EnterCallingIdStyle'
import { useNavigation } from '@react-navigation/native';

const EnterCallingId = () => {

  const [randomId, setRandomId] = useState("")

  const navigation = useNavigation();

  const generateRandomId = () => {
    return `${Math.floor(Math.random() * (999 - 100 + 1) + 100)}-${Math.floor(Math.random() * (999 - 100 + 1) + 100)}-${Math.floor(Math.random() * (999 - 100 + 1) + 100)}`
  }
  return (
    <View style={EnterCallingIdStyle.idContainer}>
      <View style={EnterCallingIdStyle.inputContainer}>
        <TextInput style={EnterCallingIdStyle.textInput}
          value={randomId}
          onChangeText={(txt) => setRandomId(txt)}
        />
        <Button title='join Meeting!' onPress={() => {
          if (randomId.length > 5) {
            navigation.navigate("VideoCallPage", {callID: randomId})
          }
          else {
            alert ("Please enter correct Join Id")
          }
        }
        }
        />
        <TouchableOpacity>
          <Text style={EnterCallingIdStyle.generatingIdText} onPress={() => { const id = generateRandomId(); setRandomId(id) }}>
            Generate MeetingId!!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default EnterCallingId