import React from "react";
import {View,Text,StyleSheet,Pressable}from 'react-native'


export default function ScreenB({navigation}){
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