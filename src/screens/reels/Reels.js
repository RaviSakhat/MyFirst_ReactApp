import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState, useRef } from 'react'
import { ReelStyle } from './ReelStyle';
import song from '../../../assets/video/video.mp4'
import InstaIcon from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';
import profileImg from '../../../assets/img/edit-avatar.png';
import { useNavigation } from '@react-navigation/native';
import ReanimatedBottomsheet from "react-native-reanimated-bottomsheet";
import ReelsComponent from './ReelsComponent';


const { height, width } = Dimensions.get("screen");

const Reels = () => {

    const [iconColor, setIconColor] = useState(false);
    const [iconPress, setIconPressed] = useState(false);
    const [forFollowing, setforFollowing] = useState("Follow");
    const [Follow, setFollow] = useState(false);
    const [bottomList, setBottomList] = useState([
        {
            title: 'Share',
            icon: () => <InstaIcon name='share-social-outline' size={25} color='white' />
        },
        {
            title: 'Link',
            icon: () => <InstaIcon name='link-outline' size={25} color='white' />
        },
        {
            title: 'Save',
            icon: () => <InstaIcon name='bookmark-outline' size={25} color='white' />
        },
        {
            title: 'Remix',
            icon: () => <InstaIcon name='add-circle-outline' size={30} color='white' style={{ marginLeft: 3.5 }} />
        }

    ]);


    const bottomSheetRef = useRef(null);
    const navigation = useNavigation();



    const iconPressed = () => {
        setIconColor(!iconColor)
        setIconPressed(!iconPress)
    }

    const pressToFollowing = () => {
        setFollow(!Follow)
        setforFollowing(Follow ? "Follow" : "Following")
    }



    return (
        <>
            <View style={{
                flex: 1,
                backgroundColor: 'green'
            }}>
                <SafeAreaView style={ReelStyle.safeAreaMargin}>
                    <View style={ReelStyle.textView}>
                        <Text style={ReelStyle.reelText}>
                            Reels
                        </Text>
                        <InstaIcon name='camera-outline' size={30} color='white' />
                    </View>
                </SafeAreaView>
                <StatusBar barStyle="dark-content" />
                {/* Reels component */}
                <ReelsComponent />
                {/* Reels component */}
                <View style={ReelStyle.bottomView}>
                    <View style={ReelStyle.profileImageView}>
                        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                            <Image source={profileImg} style={ReelStyle.profileImage} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={ReelStyle.profileText}>CartoonNetwork</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Follow ? ReelStyle.followingView : ReelStyle.followView} onPress={() => pressToFollowing()}>
                            <Text style={Follow ? ReelStyle.followingText : ReelStyle.followText}>{forFollowing}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={ReelStyle.socialIcons}>
                        <InstaIcon name={!iconPress ? 'heart-outline' : 'heart'} size={30} color={!iconColor ? 'white' : 'red'} onPress={() => iconPressed()} />
                        <Text style={ReelStyle.socialIconsText}>117k</Text>
                        <InstaIcon name='chatbubble-outline' size={25} color='white' />
                        <Text style={ReelStyle.socialIconsText}>184</Text>
                        <InstaIcon name='paper-plane-outline' size={25} color='white' />
                        <Text style={ReelStyle.socialIconsText}>86.3k</Text>
                        <InstaIcon name='ellipsis-vertical-outline' size={30} color='white' onPress={() => {
                            bottomSheetRef.current.snapTo(2);
                        }} />
                    </View>
                </View>
                <ReanimatedBottomsheet
                    enabledGestureInteraction
                    hasFixedHeight={true}
                    ref={bottomSheetRef}
                    snapPoints={[0, 30, 350, height - 20]}
                    renderHeader={() => {
                        return (
                            <View style={{
                                alignItems: 'center', backgroundColor: 'black', paddingVertical: 10,
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20
                            }}>
                                <View style={{ height: 2, width: 10, backgroundColor: 'white', paddingHorizontal: 10 }}>
                                </View>
                            </View>
                        );
                    }}
                    renderContent={() => {
                        return <>
                            <View style={ReelStyle.shareOptionView}>
                                {bottomList.map((item, index) => (
                                    <>
                                        <View style={{ marginTop: 5 }}>
                                            <View key={index} style={ReelStyle.shareOptionIcon}>{item.icon()}
                                            </View>
                                            <Text style={{ color: 'white', textAlign: 'center', marginTop: 5 }}>{item.title}</Text>
                                        </View>
                                    </>
                                ))}
                            </View>
                            <View style={{ backgroundColor: 'black', flexDirection: 'column', justifyContent: 'flex-start', flex: 1, padding: 10 }}>
                                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                    <InstaIcon name='eye-off-outline' color='white' size={25} style={{ marginLeft: 15 }} />
                                    <Text style={{ color: 'white', marginTop: 5, marginLeft: 10, fontSize: 15 }}>
                                        Not Interested
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                    <InstaIcon name='warning-outline'
                                        color='red' size={25} style={{ marginLeft: 15 }}
                                    />
                                    <Text style={{ color: 'red', marginTop: 5, marginLeft: 10, fontSize: 15 }}>
                                        Report...
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <InstaIcon
                                        color='white'
                                        name='options-outline' size={25} style={{ marginLeft: 15 }} />
                                    <Text style={{ color: 'white', marginTop: 5, marginLeft: 10, fontSize: 15 }}>
                                        Manage suggested content
                                    </Text>
                                </View>
                            </View>
                        </>

                    }}
                />
            </View>
        </>
    )
}

export default Reels

