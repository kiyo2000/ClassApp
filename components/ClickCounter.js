import React, { useState } from 'react'; //basics
import { View,Text, StyleSheet, TouchableOpacity } from 'react-native';//basics

export const ClickCounter = (props) =>{
    const [click, updateClick] = useState(0); // Declare a click variable. updateclick is a function. useState() is React-built-in hook/function.
    return(
        <View>
            <TouchableOpacity onPress={ () => { updateClick( click +1  ) } } style={styles.button}>
                 <Text style={style.text}>I've been clicked {click}</Text>
            </TouchableOpacity>
        </View> 
    )    
}

//Create a stylsheet
const styles = StyleSheet.create(
    {
        button: {
            minWidth: 250,
            backgroundColor: "#ff2233",
            padding: 15,
            margin: 10,
        },
        text: {
            color: 'blue',
            textAlign: 'center'
        }
    }
)