import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get("screen");

const signUpStyle = StyleSheet.create({
    topHeader:{
        textAlign: 'center',
        fontSize: 40,
        marginTop: 130,
        marginHorizontal: 25,
    },
    inputBox: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black',
        marginHorizontal: 20,
        marginTop: 10,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        overflow: 'hidden',
        flex: 1,
    },
    signUpContainer: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        marginTop: 30,
        padding: 10,
        marginHorizontal: 145,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1.5
    },
    signUpText: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    loginOptionContainer: {
        alignItems: 'center'
    },
    loginText: {
        color: 'black',
        fontWeight: 'bold'
    }
})

export { signUpStyle };