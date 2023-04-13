import { View, Text } from 'react-native'
import React, { useRef } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Video from 'react-native-video';
import { ReelStyle } from './ReelStyle';



const SingleReel = ({ item, index, currentIndex }) => {

    console.log('item', item)

    const videoRef = useRef(null);

    const onBuffer = (e) => {
        console.log('Buffering...', e)
    }

    const onError = (e) => {
        console.log('error Occured....', e)
    }

    return (
        <View style={ReelStyle.backgroundVideo}>
            <TouchableOpacity>
                <Video
                    source={item.sources}
                    // poster="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    posterResizeMode="cover"
                    resizeMode="cover"
                    paused={false}
                    ref={videoRef}
                    onBuffer={onBuffer}
                    onError={onError}
                    repeat={true}
                    style={ReelStyle.backgroundVideo} />
            </TouchableOpacity>
        </View>
    )
}

export default SingleReel