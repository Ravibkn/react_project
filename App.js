import React, { useState } from "react";
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native'


const App = () => {

  const [items, setItems] = useState([
    { key: 1, item: 'item 1' },
    { key: 2, item: 'item 2' },
    { key: 3, item: 'item 3' },
    { key: 4, item: 'item 4' },
    { key: 5, item: 'item 5' },
    { key: 6, item: 'item 6' },
    { key: 7, item: 'item 7' },
    { key: 8, item: 'item 8' },
    { key: 9, item: 'item 9' },
    { key: 10, item: 'item 10' },
    { key: 11, item: 'item 11' },

  ])

  return (

    <ScrollView  style={styles.body}>
      {
        items.map((i) => {
          return (
            <View style={styles.item} key={i.key}>
              <Text style={styles.text}>{i.item}</Text>
            </View>
          )
        })
      }
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  body: {
   
    backgroundColor: '#ffff',

  },
  item: {
    margin: 10,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',

  },
  text: {
    fontSize: 35,
    color: '#000000',
    margin: 10,
  }
})

export default App;
