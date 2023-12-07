import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Tabs from "./components/Tabs/Tabs";
import HomeScreen from "./screens/Home";
const navTheme = DefaultTheme
navTheme.colors.background = "#303030"
const Stack = createStackNavigator()
function App():JSX.Element{
  return(
    <NavigationContainer>
    <Tabs/>
    </NavigationContainer>
  )
}
export default App