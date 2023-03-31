import { View, Text } from 'react-native'
import React from 'react';
import { DashBoardStyle } from '../../style';
import { ScrollView } from 'react-native-gesture-handler';

export default function DashBoard() {
  return (
    <ScrollView>
      <View style={DashBoardStyle.topHeader}>
        <View style={DashBoardStyle.firstView}>
          <Text style={DashBoardStyle.firstFontView}>Hello</Text>
        </View>
        <View style={DashBoardStyle.secondView}>
          <Text style={DashBoardStyle.secondFontView}>World</Text>
        </View>
        <View style={DashBoardStyle.thirdView}>
          <Text style={DashBoardStyle.thirdFontView}>World</Text>
        </View>
      </View>
    </ScrollView>
  )
}

