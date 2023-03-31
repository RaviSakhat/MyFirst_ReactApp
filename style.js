import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get("screen");

const DashBoardStyle = StyleSheet.create({
    topHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
        flex: 1,
        height: '100%',
    },
    firstView: {
        height: height / 2,
        width: '100%',
        backgroundColor: 'purple',
    },
    firstFontView: {
        textAlign: 'center',
        color: 'white',
        padding: 10,
        backgroundColor: 'magenta',
        borderRadius: 50,
    },
    secondView: {
        height: height / 2,
        width: '100%',
        backgroundColor: 'yellow',
    },
    secondFontView: {
        textAlign: 'center',
        color: 'black'
    },
    thirdView: {
        height: height / 2,
        width: '100%',
        backgroundColor: 'green',
    },
    thirdFontView: {
        textAlign: 'center',
        color: 'white'
    }
});

const LogInPageStyle = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#867070',
    },
    loginText: {
        textAlign: 'left',
        fontSize: 50,
        marginTop: 50,
        marginHorizontal: 25,
    },
    inputBoxContainer: {
        // backgroundColor: '#F7DB6A'
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: "black",
        // marginVertical: 10,
        marginHorizontal: 20,
        width: '90%',
        marginTop: 10,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        overflow: 'hidden',
        flex: 1
    },
    loginButton: {
        backgroundColor: '#2D2727',
        textAlign: 'center',
        color: 'white',
        marginVertical: 10,
        marginHorizontal: 50,
        borderRadius: 30,
        fontWeight: 'bold',
    },
    ListData: {
        textAlign: 'center',
        borderColor: 'red',
        fontSize: 20,
        padding: 10,
        backgroundColor: 'skyblue'
    },
    buttonView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    orTextView: {
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: '#2D2727',
        width: 40,
        height: 40,
        justifyContent: 'center',
        marginHorizontal: 170
    },
    orTextStyle: {
        textAlign: 'center',
        color: 'white'
    },
    signUpText: {
        fontSize: 30,
        color: 'grey',
        padding: 10,
        marginVertical: 10
    },
    socialMediaContainer: {
          // backgroundColor: '#F7DB6A'
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: "black",
          // marginVertical: 10,
          marginHorizontal: 20,
          width: '90%',
          marginTop: 10,
          borderRadius: 20,
          paddingHorizontal: 20,
          paddingVertical: 10,
          overflow: 'hidden',
          flex: 1,
          alignItems: 'center'
    },
    socialMediaText: {
        marginHorizontal: 50,
        color: '#000000',
        fontWeight: 'bold',
    },
    socialMediaLogo: {
        alignItems: 'center',
    },
    forgotPasswordText: {
        marginTop: 5,
        alignItems: 'center'
    },
    SignUpContainer: {
        flexDirection: 'row',  
    },
    signUpButton: {
       marginTop: 10,
       marginHorizontal: -50
    },
    SignUpButtnText: {
        padding: 10,
        color: 'white',
        fontWeight: 'bold',
    }
});

export { DashBoardStyle, LogInPageStyle };