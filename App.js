import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  RefreshControl,
  FlatList,
  SectionList,
  TextInput, Touchable,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Pressable,
  Alert,
  ToastAndroid,
  Modal,
  Image,
  ImageBackground,
} from 'react-native'

const App = () => {
  const [name, setName] = useState('')
  const [submited, setSubmited] = useState(false)
  const [showWarning, setShowWarning] = useState(false)
  const onPrssedHendler = () => {
    if (name.length > 3) { setSubmited(!submited); }
    else {
      setShowWarning(true)
    }
  }
  return (
    <ImageBackground 
    source={{uri:'https://cdn.pixabay.com/photo/2013/07/12/12/35/texture-145968_960_720.png'}}
    style={styles.body}>
      <Modal
        visible={showWarning}
        transparent
        onRequestClose={() => setShowWarning(false)}
      >
        <View style={styles.centerpage_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}><Text style={styles.text}>Warning!</Text>
            </View>
            <View style={styles.warning_body}>
              <Text style={styles.text}>The Name Must Be Gretar Then 3 charachters</Text>
            </View>
            <Pressable
              style={styles.warningbutton1}
              android_ripple={{ color: 'white' }}
              onPress={() => setShowWarning(false)}
            ><Text style={styles.text}>ok</Text></Pressable>
          </View>
        </View>


      </Modal>
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


      {
        submited ?
<View style={styles.body}>
  <Text style={styles.text}>
            Your Name Is:{name}
          </Text>
          <Image
          style={styles.image}
          source={require('./assets/done.png')}
          resizeMode='stretch'
        />
        </View>: <Image
            style={styles.image}
            source={require('./assets/error.png')}
            resizeMode='stretch'
          />
      }

    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  body: {
    // backgroundColor: 'gray',
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
    // fontStyle: 'italic',
    alignItems: 'center',
    color: '#000',
    margin: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'green',
    width: 150,
    height: 50,
    alignItems: 'center',
  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
  },
  centerpage_view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000099'
  },
  warning_title: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  warning_body: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  warningbutton1: {
    backgroundColor: '#00ffff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  }
})

export default App;