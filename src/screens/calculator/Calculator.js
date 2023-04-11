import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { calculatorStyle } from '../../screens/calculator/CalculatorStyle'


const Calculator = () => {
    
    const [userInputValue, setUserInputValue] = useState("0");
    
    const onHandleClick = (id) => {
        if (id === "AC") {
            setUserInputValue("0")
        } else if (id === "=") {
            try {
                if (userInputValue.slice(-1) === '+' || userInputValue.slice(-1) === '-' ||
                userInputValue.slice(-1) === '/' ||
                userInputValue.slice(-1) === 'x' ||
                userInputValue.slice(-1) === '%' ||
                userInputValue.slice(-1) === '+/-' ||
                userInputValue.slice(-1) === "."
                ) {
                    
                } else {
                    setUserInputValue(`${eval(userInputValue)}`)
                }
            } catch (e) {
                setUserInputValue('Format Error')
            }
        }
        else {
            if (userInputValue === "0") {
                if (isNaN(id)) {
                    setUserInputValue(userInputValue + id)
                }
                else {
                    setUserInputValue(id)
                }
            }
            else if (isNaN(id)) {
                if (userInputValue.slice(-1) === '+' || userInputValue.slice(-1) === '-' ||
                userInputValue.slice(-1) === '/' ||
                userInputValue.slice(-1) === '*' ||
                userInputValue.slice(-1) === '%' ||
                userInputValue.slice(-1) === '+/-' ||
                userInputValue.slice(-1) === "."
                ) {
                    setUserInputValue(userInputValue.slice(0, -1) + id)
                } else {
                    setUserInputValue(userInputValue + id)
                }
                // setUserInputValue(userInputValue + id)
            }
            else {
                setUserInputValue(userInputValue + id)
            }
        }
    }
    
    
    
    
    return (
        <View style={calculatorStyle.bodyContainer}>
            <View style={calculatorStyle.inputValue}>
                <TextInput
                    // placeholder="0"
                    placeholderTextColor='white' style={calculatorStyle.textInput}
                    value={userInputValue}
                    onChangeText={(value) => setUserInputValue(value)}
                    multiline={true}
                />
            </View>
            <View style={calculatorStyle.buttonContainer}>
                <View style={calculatorStyle.RowButtonContainer}>
                    <TouchableOpacity onPress={() => onHandleClick("AC")}>
                        <View style={calculatorStyle.firstRowContainer} >
                            <Text style={calculatorStyle.buttonText}>AC</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onHandleClick("-")}>
                        <View style={calculatorStyle.firstRowContainer}>
                            <Text style={calculatorStyle.buttonText}>+/-</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onHandleClick("%")}>
                        <View style={calculatorStyle.firstRowContainer}>
                            <Text style={calculatorStyle.buttonText}>%</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onHandleClick("/")}>
                        <View style={calculatorStyle.rowFourthButton}>
                            <Text style={calculatorStyle.buttonText}>/</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={calculatorStyle.RowButtonContainer}>
                    <TouchableOpacity onPress={() => onHandleClick("7")}>
                        <View style={calculatorStyle.secondRowContainer}>
                            <Text style={calculatorStyle.buttonText}>7</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onHandleClick("8")}>
                        <View style={calculatorStyle.secondRowContainer}>
                            <Text style={calculatorStyle.buttonText}>8</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onHandleClick("9")}>
                        <View style={calculatorStyle.secondRowContainer}>
                            <Text style={calculatorStyle.buttonText}>9</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onHandleClick("*")}>
                        <View style={calculatorStyle.rowFourthButton}>
                            <Text style={calculatorStyle.buttonText}>x</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={calculatorStyle.RowButtonContainer}>
                    <TouchableOpacity onPress={() => onHandleClick("4")}>
                        <View style={calculatorStyle.secondRowContainer}>
                            <Text style={calculatorStyle.buttonText}>4</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onHandleClick("5")}>
                        <View style={calculatorStyle.secondRowContainer}>
                            <Text style={calculatorStyle.buttonText}>5</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onHandleClick("6")}>
                        <View style={calculatorStyle.secondRowContainer}>
                            <Text style={calculatorStyle.buttonText}>6</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onHandleClick("-")}>
                        <View style={calculatorStyle.rowFourthButton}>
                            <Text style={calculatorStyle.buttonText}>-</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={calculatorStyle.RowButtonContainer}>
                    <TouchableOpacity onPress={() => onHandleClick("1")}>
                        <View style={calculatorStyle.secondRowContainer}>
                            <Text style={calculatorStyle.buttonText}>1</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onHandleClick("2")}>
                        <View style={calculatorStyle.secondRowContainer}>
                            <Text style={calculatorStyle.buttonText}>2</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onHandleClick("3")}>
                        <View style={calculatorStyle.secondRowContainer}>
                            <Text style={calculatorStyle.buttonText}>3</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onHandleClick("+")}>
                        <View style={calculatorStyle.rowFourthButton}>
                            <Text style={calculatorStyle.buttonText}>+</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={calculatorStyle.RowButtonContainer}>
                    <TouchableOpacity onPress={() => onHandleClick("0")}>
                        <View style={calculatorStyle.zeroButton}>
                            <Text style={calculatorStyle.zeroButtonText}>0</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onHandleClick(".")}>
                        <View style={calculatorStyle.secondRowContainer}>
                            <Text style={calculatorStyle.buttonText}>.</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onHandleClick("=")
                    }>
                        <View style={calculatorStyle.rowFourthButton}>
                            <Text style={calculatorStyle.buttonText}>=</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Calculator