import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import AnalysisScreen from "./screens/Analysis";
import Tabs from "./components/Tabs/Tabs";
import HomeScreen from "./screens/Home";
const navTheme = DefaultTheme
navTheme.colors.background = "#303030"
const Stack = createStackNavigator()
function App():JSX.Element{
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          
          
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // Enable horizontal swipe gestures
        }}
        initialRouteName="Tabs"
      >
          <Stack.Screen name="Tabs" component={Tabs}  options={{ headerShown: false }} />
          <Stack.Screen name="AnalysisScreen" component={AnalysisScreen}/> 
      </Stack.Navigator>
    
    </NavigationContainer>
  )
}
export default App