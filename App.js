import React from "react";
import {View,Text,StyleSheet,Button}from 'react-native'


const App =()=>{
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Programing With Monu</Text>
    </View>
  )
}

const styles =StyleSheet.create({
  body:{
    flex:1,
    backgroundColor:'green',
    alignItems:'center',
    justifyContent:'center'
    
  },
  text:{
    fontSize:20,
    color:'white',
  }
})

export default App;