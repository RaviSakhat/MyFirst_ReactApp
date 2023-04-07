import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get("screen");

const signUpStyle = StyleSheet.create({
    topHeader:{
        textAlign: 'center',
        fontSize: 40,
        marginTop: 90,
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
        borderWidth: 1.5,
        marginBottom: 10
    },
    signUpText: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    loginOptionContainer: {
        alignItems: 'center'
    },
    loginText: {
        color: 'black',
        fontWeight: 'bold'
    },
    signUpError: {
        color: 'red',
        textAlign: 'center',
        padding: 10,
    },
    VerificationText: {
        marginTop: 100,
        textAlign: 'center',
        fontSize: 20
    },
    VerificationButton: {
        alignItems: 'center',
        marginTop: 50,
        padding: 10,
        marginHorizontal: 145,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1.5,
    },
    VerificationButtonText: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
    }
})

export { signUpStyle };