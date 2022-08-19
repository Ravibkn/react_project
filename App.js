import React from "react";
import {View,Text,StyleSheet,Button}from 'react-native'


const App =()=>{
  return (
    <View style={styles.body}>
      <View style={styles.row}>
        <View style={styles.view1}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.view3}>
          <Text style={styles.text}>3</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.view4}>
          <Text style={styles.text}>4</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.view5}>
          <Text style={styles.text}>5</Text>
        </View>
      </View>
      <View style={styles.bigrow}>
        <View style={styles.view6}>
          <Text style={styles.text}>6</Text>
        </View>   
        <View style={styles.view7}>
          <Text style={styles.text}>7</Text>
        </View>   
      </View>
      
      
      
    </View>
  )
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    backgroundColor:'blue',
    alignItems:'center',
    justifyContent:'flex-start',
  },
  row:{
    backgroundColor:'#fff',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  }, bigrow:{
    flex:1,
    backgroundColor:'#fff',
    flexDirection:'row',
    alignItems:'stretch',
    justifyContent:'center',
  },
  view1:{
    flex:1,
    backgroundColor:'green',
    alignItems:'center',
    justifyContent:'center',
  },view2:{
    flex:2,
    backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center',
  },view3:{
    flex:3,
    backgroundColor:'yellow',
    alignItems:'center',
    justifyContent:'center',
  },
  view4:{
    flex:1,
    backgroundColor:'brown',
    alignItems:'center',
    justifyContent:'center',
  },
  view5:{
    flex:1,
    backgroundColor:'pink',
    alignItems:'center',
    justifyContent:'center',
  },
  view6:{
    flex:1,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
  },
  view7:{
    flex:1,
    backgroundColor:'blue',
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    fontSize:35,
    color:'#000000',
    margin:10,
  }
})

export default App;
