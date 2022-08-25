// import React from "react";
// import { StyleSheet } from 'react-native'

// import { NavigationContainer } from '@react-navigation/native';
// import ScreenA from "./Screen_A";
// import ScreenB from "./Screen_B";
// import { createStackNavigator } from '@react-navigation/stack'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// //import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import FAIcon from 'react-native-vector-icons/FontAwesome';




// const Tab = createBottomTabNavigator();





// function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, size, color }) => {
//             let iconName;
//             if (route.name === 'Screen_A') {
//               iconName = 'user'
//               size = focused ? 25 : 20
//             } else if (route.name === 'Screen_B') {
//               iconName = 'btc';
//               size = focused ? 25 : 20
//             }
//             return (<FAIcon
//               name={iconName}
//               size={size}
//               color={color}
//             />);
//           }
//         })}
//       >
//         <Tab.Screen
//           name="Screen_A"
//           component={ScreenA} />
//         <Tab.Screen
//           name="Screen_B"
//           component={ScreenB} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   )
// }

// const styles = StyleSheet.create({
//   body: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   text: {
//     fontSize: 40,
//     fontWeight: 'bold',
//     margin: 10,
//     color: '#000'
//   }
// })

// export default App;

import React from "react";
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icons from 'react-native-vector-icons/FontAwesome'
import ScreenA from './Screen_A'
import ScreenB from './Screen_B'
import {createMaterialBottomTabNavigator}from '@react-navigation/material-bottom-tabs'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

// const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();


function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator

        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#f0f',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarInactiveTintColor:'#555',
        tabBarStyle: { backgroundColor: 'powderblue' },
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === 'Screen_A') {
              iconName = 'apple'
              size = focused ? 25 : 20
            } else if (route.name === 'Screen_B') {
              iconName = 'btc'
              size = focused ? 25 : 20
            }
            return (
              <Icons
                name={iconName}
                size={size}
                color={color} />
            )
          }
        })}
       
        
      >
        <Tab.Screen
          name={'Screen_A'}
          component={ScreenA} />
        <Tab.Screen
          name={'Screen_B'}
          component={ScreenB} />

      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;
