import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get("screen");
console.log('width', width, 'height', height)

const buttonSize = (width - 100) / 4;
console.log('buttonSize', buttonSize);
const zeroButtonSize =  (width - 250) ;

const calculatorStyle = StyleSheet.create({
    bodyContainer: {
        backgroundColor: '#000000',
        height: height,
        width: width
    },
    inputValue: {
        backgroundColor: 'black',
        flex: 1,
    },
    textInput: {
        // backgroundColor: 'pink',
        marginTop: 130,
        fontSize: 30,
        color: 'white',
        textAlign: 'right',
        marginRight: 30,
    },
    buttonContainer: {
        // backgroundColor: 'yellow',
        flex: 2,
    },
    RowButtonContainer: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    // buttonView: {
    //     backgroundColor: 'pink',
    //     height: buttonSize,
    //     width: buttonSize,
    //     borderRadius: 50,
    //     marginStart: 15,
    //     marginTop: 5,
    // },
    firstRowContainer:{
        backgroundColor: 'grey',
        height: buttonSize,
        width: buttonSize,
        borderRadius: 50,
        marginStart: 15,
        marginTop: 5,
        shadowColor: 'white',
        shadowOpacity: 0.9,
        shadowRadius: 0.1
    },
    rowFourthButton:{
        backgroundColor: 'orange',
        height: buttonSize,
        width: buttonSize,
        borderRadius: 50,
        marginStart: 15,
        marginTop: 5,
        shadowColor: '#BACDDB',
        shadowOpacity: 0.9,
        shadowRadius: 0.1,
    },
    secondRowContainer: {
        backgroundColor: '#454545',
        height: buttonSize,
        width: buttonSize,
        borderRadius: 50,
        marginStart: 15,
        marginTop: 5,
        shadowColor: 'white',
        shadowOpacity: 0.9,
        shadowRadius: 0.1
    },
    buttonText: {
        padding: 22,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    zeroButton: {
        backgroundColor: '#454545',
        height: buttonSize,
        width: buttonSize,
        borderRadius: 35,
        marginStart: 15,
        marginTop: 5,
        paddingHorizontal: 77,
        shadowColor: 'white',
        shadowOpacity: 0.9,
        shadowRadius: 0.1
    },
    zeroButtonText: {
        padding: 22,
        fontSize: 20,
        fontWeight: 'bold',
        // backgroundColor: 'red',
        marginLeft: -70  
    },
})

export {calculatorStyle};