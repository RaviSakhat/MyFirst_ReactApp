import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get("screen");

const EnterCallingIdStyle = StyleSheet.create({
    idContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        width: '90%',
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 20,
        textAlign: 'center',
        padding: 10,
        fontSize: 20
    },
    generatingIdText: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 20
    }
})

export { EnterCallingIdStyle };