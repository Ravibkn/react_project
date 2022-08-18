import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Linking } from 'react-native'


const App = () => {
  const [name, setName] = useState('Ravi')

  const onClickedHendelar = () => {
    setName('Monu')

  }
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Programing With {name}</Text>
      <View style={styles.button}>
        <Button title='Updte State' onPress={onClickedHendelar}></Button>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    // flex: 1,
    width: '100%',
    height: '50%',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: 'red',
    borderRadius: 40,

    // margin:40,


  },
  text: {
    fontSize: 20,
    color: 'white',
    margin: 10,
  },
  button:{
    width:200,
    height:60,
    borderRadius:10,
  }
})

export default App;