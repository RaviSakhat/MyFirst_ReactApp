import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get("screen");

const videoCallStyle = StyleSheet.create({
    videoContainer : {
        flex: 1
    }
})

export { videoCallStyle };