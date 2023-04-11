// App.js
import React, { Component } from 'react';
import {ZegoUIKitPrebuiltCall, ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn';
import { videoCallStyle } from '../../screens/videoCall/VideoCallStyle'
import { View } from 'react-native';
import {useRoute} from '@react-navigation/native'

export default function VideoCall(props) {

    const userId = String(Math.floor(100000 + Math.random() * 900000));
    
    const route = useRoute();
    const {callID} = route.params;
    console.log('callID', callID)


    return (
        <View style={videoCallStyle.videoContainer}>
            <ZegoUIKitPrebuiltCall
                appID={830416147}
                appSign={"89c4f9795c026d8abacdbb075a1afa66e21e5a988d751e7efbf5487f298e7a47"}
                userID={userId} // userID can be something like a phone number or the user id on your own user system. 
                userName={`user_${userId}`}
                callID={callID} // callID can be any unique string. 

                config={{
                    // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
                    ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
                    onOnlySelfInRoom: () => { props.navigation.navigate('Profile') },
                    onHangUp: () => { props.navigation.navigate('Profile') },
                }}
            />
        </View>
    );
}