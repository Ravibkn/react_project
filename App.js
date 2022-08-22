import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, RefreshControl, FlatList, SectionList, TextInput } from 'react-native'

const App = () => {
  const [name, setName] = useState('')
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
      <Text style={styles.text}>Your Name Is:{name}
      </Text>
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
  }
})

export default App;