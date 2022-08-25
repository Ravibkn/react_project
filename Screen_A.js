import React from "react";
import {View,Text,StyleSheet,Pressable}from 'react-native'


export default function ScreenA({navigation}){
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