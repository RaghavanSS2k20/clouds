import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/Home";
const Stack = createStackNavigator()
function App():JSX.Element{
  return(
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        cardStyle:{backgroundColor:"#313130"},
        headerShown:false
      }}
    >
      <Stack.Screen 
      name="Home"
      component={HomeScreen}
      >


      </Stack.Screen>
    </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App