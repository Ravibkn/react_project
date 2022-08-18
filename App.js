import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Linking } from 'react-native'


const App = () => {
  const [name, setName] = useState('Ravi')
  const [session,setSession]=useState({number:6,title:'State Less'})
  const [current,setCurrent]=useState(true)
  const onClickedHendelar = () => {
    setName('Monu')
setSession({number:7,title:'State Full'})
setCurrent(false)
  }
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Programing With {name}</Text>
      <Text style={styles.text}>Number is = {session.number} This Is {session.title}</Text>
      <Text style={styles.text}>{current? 'Current Session': 'Next Session'}</Text>
      <Button title='Login' onPress={onClickedHendelar}></Button>
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
    margin: 10,
  }
})

export default App;