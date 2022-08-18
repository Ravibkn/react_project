import React from "react";
import { View, Text, StyleSheet, Button, Linking } from 'react-native'


const App = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Programing With Monu</Text>
      <Button title='Login' onPress={() => { Linking.openURL('https://www.youtube.com/watch?v=ANdSdIlgsEw&list=PLJQbNrpYMOD5WE1kNfdgakkqzUNymtjlS&index=29&t=2027s') }}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'

  },
  text: {
    fontSize: 20,
    color: 'white',
    margin:10,
  }
})

export default App;