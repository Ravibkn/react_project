import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Button, RefreshControl, FlatList, SectionList, TextInput, Touchable, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Pressable, Alert, ToastAndroid } from 'react-native'

const App = () => {
  const [name, setName] = useState('')
  const [submited, setSubmited] = useState(false)
  const onPrssedHendler = () => {
    if (name.length > 3) { setSubmited(!submited); }
    else {
      // Alert.alert('Warning', 'The Name must be longer then 3 characters', [
      //   { text: 'do not show again', onPress: () => console.warn('do not show again Pressed') },
      //   { text: 'cancel', onPress: () => console.warn('cancel Pressed') },
      //   { text: 'ok', onPress: () => console.warn('ok Pressed') }
      // ],
      //   { cancelable: true, onDismiss: () => console.warn('Alert dissmiss') })
      ToastAndroid.showWithGravity('The Name must be longer then 3 characters',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER)
    }
  }
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Plese Enter Name:</Text>
      <TextInput style={styles.input}
        placeholder='Enter name'
        onChangeText={(value) => setName(value)}
        keyboardType='numbers-and-punctuation'
        secureTextEntry
      >
      </TextInput>
      {/* <Button title={submited ? 'clear' : 'Submit'}
        onPress={onPrssedHendler}
        color='#00f'>
      </Button> */}
      {/* <TouchableOpacity
      style={styles.button}
      onPress={onPrssedHendler}
      >
        <Text style={styles.text}>{submited? 'clear':'Submit'}</Text>
      </TouchableOpacity> */}
      {/* <TouchableHighlight
      style={styles.button}
      onPress={onPrssedHendler}
      underlayColor='#dddddd'
      >
        <Text style={styles.text}>{submited? 'clear':'Submit'}</Text>
      </TouchableHighlight> */}
      {/* <TouchableNativeFeedback
     
      onPress={onPrssedHendler}
      underlayColor='#dddddd'
      >
        <View  style={styles.button}>
        <Text style={styles.text}>{submited? 'clear':'Submit'}</Text>
        </View>
       
      </TouchableNativeFeedback> */}

      <Pressable
        onPress={onPrssedHendler}
        android_ripple={{ color: '#00f' }}
        style={({ pressed }) => [{ backgroundColor: pressed ? '#dddddd' : 'green' },
        styles.button]}>

        <Text style={styles.text}>{submited ? 'clear' : 'Submit'}</Text>
      </Pressable>


      {submited ? <Text style={styles.text}>
        Your Name Is:{name}
      </Text> : null
      }

    </View>
  )
}
const styles = StyleSheet.create({
  body: {
    backgroundColor: 'gray',
    flex: 1,
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    width: 200,
    borderColor: 'white',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
  },
  item: {
    margin: 10,
    backgroundColor: 'darkgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontStyle: 'italic',
    alignItems: 'center',
    color: '#000',
    margin: 10,
  },
  button: {
    backgroundColor: 'green',
    width: 150,
    height: 50,
    alignItems: 'center',
  }
})

export default App;