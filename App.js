import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
//custom components
import { TextBox }  from './components/TextBox'; 
import {ClickCounter} from './components/ClickCounter';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Open up App.js to start working on your app!</Text>
      <Button title="Click me" color="blue"/>
      <StatusBar style="auto" />
      <TextBox color="green" size={24} text="Custom Component" />
      <TextBox color="red" size={12} text="Custom Text 2" />
      <ClickCounter/>
      <ClickCounter/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting:{
    color: 'red'
  }

});
