import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {

  const [inputBox, setInputBox] = useState("");
  const [userValue, setUserValue] = useState([]);

  useEffect(() => {
    async function tempFunction() {
      await getItemList();
    }
    tempFunction();
    return () => {
    };
  }, [])


  const addItemToList = async () => {
    try {
      userValue.push(inputBox);
      console.log('userValue', userValue)
      const output = JSON.stringify(userValue);
      await AsyncStorage.setItem("itemList", output)
      console.log('output', output)
      setInputBox('');
    } catch (error) {
      console.log('error', error)
    }
  }

  const getItemList = async () => {
    try {
      const userData = await AsyncStorage.getItem("itemList");
      const getOutput = JSON.parse(userData);
      setUserValue(getOutput);
    } catch (error) {
      console.log('error', error)
    }
  }

  const onHandleDelete = async () => {
    await AsyncStorage.clear();
    setUserValue([]);
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.inputBox} value={inputBox} placeholder="Please enter your name" onChangeText={(value) => setInputBox(value)} />
      {/* <Text style={{fontFamily: "RobotoMono-VariableFont_wght"}}>HomeScreen</Text> */}
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => addItemToList()}>
          <Text style={styles.addButton}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.addButton} onPress={() => onHandleDelete()}>Delete</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {
          userValue?.map((item, index) => {
            return (
              <Text style={styles.ListData}>{item}</Text>
            )
          })
        }
      </ScrollView>
    </View>
  )
}

const { width } = Dimensions.get("screen")

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputBox: {
    borderWidth: 2,
    borderColor: "black",
    marginVertical: 10,
    marginHorizontal: 8,
  },
  addButton: {
    width: width - 200,
    backgroundColor: 'pink',
    // marginHorizontal: 10,
    textAlign: 'center',
    padding: 10,
    color: 'purple',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  ListData: {
    textAlign: 'center',
    borderColor: 'red',
    fontSize: 20,
    padding: 10,
    backgroundColor: 'skyblue'
  }
})