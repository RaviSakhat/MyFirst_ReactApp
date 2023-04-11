import { View, Text, Image, ImageBackground, TouchableOpacity, Dimensions } from 'react-native'
import { profileStyle } from '../../screens/Profile/ProfileStyle'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import bgProfile from '../../../assets/img/whiteBg.jpg';
import bgSignUp from '../../../assets/img/bgSignUp.jpg';
import Call from 'react-native-vector-icons/Ionicons';
import Mail from 'react-native-vector-icons/Ionicons';
import EditImage from 'react-native-vector-icons/Ionicons';
import editAvatar from '../../../assets/img/edit-avatar.png';
import filePicker, { types } from 'react-native-document-picker';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {

  const [ProfileImage, setProfileImage] = useState([])
  const [activeButton, setActiveButton] = useState(0);

  const navigation = useNavigation();

  const changeProfileImage = async () => {
    try {
      const response = await filePicker.pick({
        presentationStyle: 'fullScreen',
        type: [types.images]
      })
      setProfileImage(response)
      console.log('response', response)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <ScrollView>
      <ImageBackground source={bgProfile} style={{ height: '100%' }}>
        <View style={profileStyle.topHeader}>
          <Text style={profileStyle.topHeaderText}>Profile</Text>
        </View>
        <View style={profileStyle.profileImageContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("EnterCallingId")}>
            <View style={profileStyle.callIconContainer}>
              <Call name='videocam' size={30} style={profileStyle.callMessageIcon} />
            </View>
          </TouchableOpacity>
          <View >
            {
              ProfileImage && ProfileImage.length > 0 ? ProfileImage.map((item, index) => {
                return (
                  <>
                    <TouchableOpacity onPress={() => changeProfileImage()}>
                      <View key={index}>
                        <Image style={profileStyle.profileImage} source={{ uri: item.uri }} />
                      </View>
                      <View style={profileStyle.editImageContainer}>
                        <EditImage name='add' size={25} style={profileStyle.editImageIcon} />
                      </View>
                    </TouchableOpacity>
                  </>
                )
              }) :
                <>
                  <TouchableOpacity onPress={() => changeProfileImage()}>
                    <View>
                      <Image style={profileStyle.profileImage} source={editAvatar} />
                    </View>
                    <View style={profileStyle.editImageContainer}>
                      <EditImage name='add' size={25} style={profileStyle.editImageIcon} />
                    </View>
                  </TouchableOpacity>
                </>
            }
          </View>
          <View style={profileStyle.messageIconContainer}>
            <Mail name='mail' size={30} style={profileStyle.callMessageIcon} />
          </View>
        </View>
        <View style={profileStyle.bottomContainer}>
          <View style={profileStyle.firstSection}>
            <TouchableOpacity onPress={() => setActiveButton(0)}>
              <View style={activeButton === 0 ? profileStyle.activeSocialMediaStatus : profileStyle.socialMediaStatus}
              ><Text>62 Posts</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveButton(1)}>
              <View style={activeButton === 1 ? profileStyle.activeSocialMediaStatus : profileStyle.socialMediaStatus}><Text>77 Followers</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveButton(2)}>
              <View style={activeButton === 2 ? profileStyle.activeSocialMediaStatus : profileStyle.socialMediaStatus}><Text>10 Following</Text></View>
            </TouchableOpacity>
          </View>
          {/* <View style={profileStyle.secondSection}>
              <Text>2nd</Text>
            </View> */}
          {/* <View style={profileStyle.thirdSection}>
              <Text>3rd</Text>
            </View> */}
        </View>
      </ImageBackground>
    </ScrollView>
  )
}