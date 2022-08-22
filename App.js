import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, RefreshControl, FlatList } from 'react-native'

const App = () => {

  const [items, setItems] = useState([
    { name: 'item 1' },
    { name: 'item 2' },
    { name: 'item 3' },
    { name: 'item 4' },
    { name: 'item 5' },
    { name: 'item 6' },
    { name: 'item 7' },
    { name: 'item 8' },
    { name: 'item 9' },
    { name: 'item 10' },
    { name: 'item 11' },
    { name: 'item 12' },

  ]);
  const [Refreshing, setRefreshing] = useState(false)
  const onRefresh = () => {
    setItems([...items, { name: 'item 69' }])
    setRefreshing(false)
  }


  return (
  
    <FlatList 
 
    keyExtractor={(item, index) => index.toString()}
    data={items}
    renderItem={({item}) =>(
      <View style={styles.item}>
     <Text style={styles.text}>{item.name}</Text>
        </View>
    )}   
    refreshControl={
          <RefreshControl
            refreshing={Refreshing}
            onRefresh={onRefresh} />
  
        }
   />
      
    // <FlatList
    //   keyExtractor={(item, index) => index.toString()}
    //   data={Items}
    //   renderItem={({ item }) => (
    //     <View style={styles.item}>
    //       <Text style={styles.text}>{item.name}</Text>
    //     </View>
    //   )}/>

    // <ScrollView style={styles.body}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={Refreshing}
    //       onRefresh={onRefresh} />

    //   }>
    //   {
    //     items.map((i) => {
    //       return (
    //         <View style={styles.item} key={i.key}>
    //           <Text style={styles.text}>{i.item}</Text>
    //         </View>
    //       )
    //     })
    //   }


    // </ScrollView>
  )
}
const styles = StyleSheet.create({
  body: {
    backgroundColor: 'gray',
    flex: 1,
  },
  item: {
    margin: 10,
    backgroundColor: 'darkgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 35,
    fontStyle: 'italic',
    color: '#000',
    margin: 10,
  }
})

export default App;