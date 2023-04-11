import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get("screen");

const profileStyle = StyleSheet.create({
    topHeader: {
        alignItems: 'center',
        marginTop: 30
    },
    topHeaderText: {
        fontSize: 40,
        color: 'black'
    },
    profileImageContainer: {
        flexDirection: 'row',
        // backgroundColor: 'red',
    },
    callIconContainer: {
        marginTop: 70,
        // backgroundColor: 'yellow',
        marginLeft: 43,
        width: 50,
        height: 50,
        borderRadius: 100,
        borderColor: 'black',
        borderWidth: 2
    },
    callMessageIcon: {
        marginLeft: 8,
        marginTop: 7,
        color: '#4F4557'
    },
    messageIconContainer: {
        // backgroundColor: 'blue',
        marginTop: 70,
        marginLeft: 70,
        width: 50,
        height: 50,
        borderRadius: 100,
        marginLeft: 40,
        borderColor: 'black',
        borderWidth: 2
    },
    profileImage: {
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 40,
        padding: 40,
        width: 100,
        height: 100,
        borderRadius: 100,
        marginStart: 40,
        borderColor: 'black',
        borderWidth: 1.5,
    },
    editImageContainer: {
        backgroundColor: '#A9907E',
        marginBottom: 20,
        marginTop: -65, 
        width: 20,
        height: 20,
        borderRadius: 50,
        marginStart: 110
    },
    editImageIcon: {
        // marginStart: 100,
        color: 'black',
        marginTop: -3,
        marginLeft: -1
    },
    bottomContainer: {
        // backgroundColor: 'pink', 
        marginBottom: 100
    },
    firstSection: {
        marginTop: 10,
        // backgroundColor: 'blue',
        // padding: 30,
        marginBottom: 20,
        justifyContent: 'center',
        flexDirection: 'row',
        // borderColor: 'black',
        borderRadius: 10,
        // borderWidth: 2,
        marginRight: 3
    },
    socialMediaStatus: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: 'grey',
        borderRadius: 50,
        borderWidth: 2,
        marginLeft: 5,
    },
    activeSocialMediaStatus: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#4F4557',
        borderColor: 'white',
        borderRadius: 50,
        borderWidth: 2,
        marginLeft: 5,
    },
    secondSection: {
        backgroundColor: 'green',
        padding: 50,
        marginBottom: 20,
        alignItems: 'center'
    },
    thirdSection: {
        backgroundColor: 'blue',
        padding: 50,
        marginBottom: 20
    }
})

export { profileStyle };