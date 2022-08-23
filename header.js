import React from "react";
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>React-Native Tutorial</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  view: {
    backgroundColor: 'blue',
    height: 50,
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    

  },
  text: {
    fontSize: 25,
    color: '#ffff',
    fontWeight: 'bold'
  }
})

export default Header;


