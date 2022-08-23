import React from "react";
import {Pressable,Text,StyleSheet}from 'react-native'

const MashButton =(props)=>{
    return (
        <Pressable
        onPress={props.onPressFunction}
        android_ripple={{ color: '#00f' }}
        style={({ pressed }) => [{ backgroundColor: pressed ? '#dddddd' : props.color },
        styles.button,
        {...props.style}
        ]}>

        <Text style={styles.text}>{props.title}</Text>
      </Pressable>

    )
}


const styles=StyleSheet.create({
    text: {
        fontSize: 20,
        // fontStyle: 'italic',
        alignItems: 'center',
        color: '#000',
        margin: 10,
        textAlign: 'center',
      },
      button: {
        // backgroundColor: 'green',
        width: 150,
        height: 50,
        alignItems: 'center',
      },
})

export default MashButton;


// import React from 'react';
// import {
//     Pressable,
//     Text,
//     StyleSheet,
// } from 'react-native';

// const MashButton = (props) => {
//     return (
//         <Pressable
//             onPress={props.onPressFunction}
//             hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
//             android_ripple={{ color: '#00f' }}
//             style={({ pressed }) => [
//                 { backgroundColor: pressed ? '#dddddd' : props.color },
//                 styles.button,
//                 {...props.style}
//             ]}
//         >
//             <Text style={styles.text}>
//                 {props.title}
//             </Text>
//         </Pressable>
//     )
// }

// const styles = StyleSheet.create({
//     text: {
//         color: '#000000',
//         fontSize: 20,
//         margin: 10,
//         textAlign: 'center',
//     },
//     button: {
//         width: 150,
//         height: 50,
//         alignItems: 'center',
//     },
// })

// export default MashButton;