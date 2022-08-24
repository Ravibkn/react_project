import React from "react";
import {View,Text,StyleSheet,Pressable}from 'react-native'

import {NavigationContainer}from '@react-navigation/native';
import {createStackNavigator}from '@react-navigation/stack';
import { State } from "react-native-gesture-handler";

const Stack= createStackNavigator();

function ScreenA({navigation}){
       const onPressHandler=()=>{
        navigation.navigate('Screen_B')
       }
  return (
    <View style={styles.body}>
     <Text style={styles.text}>Screen A</Text>
     <Pressable onPress={onPressHandler}
     style={({pressed})=>({backgroundColor:pressed? '#fff':'#0ff'})}>
      <Text style={styles.text}>Go To Screen B</Text>
     </Pressable>
    </View>
  )
}
function ScreenB({navigation}){
  const onPressHandler=()=>{
    navigation.navigate('Screen_A')
   }
  return (
    <View style={styles.body}>
     <Text style={styles.text}>Screen B</Text>
     <Pressable onPress={onPressHandler}
     style={({pressed})=>({backgroundColor:pressed? '#fff':'#0ff'})}>
      <Text style={styles.text}>Go To Screen A</Text>
     </Pressable>
    </View>
  )
}


function App(){
 return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Screen_A"
        component={ScreenA}/>
        <Stack.Screen
        name="Screen_B"
        component={ScreenB}/>
    </Stack.Navigator>
  </NavigationContainer>
 )
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
 text:{
  fontSize:40,
  fontWeight:'bold',
  margin:10,
  color:'#000'
 }
})

export default App;