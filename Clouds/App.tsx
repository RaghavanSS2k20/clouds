import React from "react";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { verticalScale,horizontalScale, moderateScale } from "./helpers/Metrics";
import { createStackNavigator, CardStyleInterpolators, Header } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import AddScreen from "./screens/AddScreen";
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
          headerStyle:style.headerStyle,
          headerTitleStyle:style.headerTitileStyle,
          headerTintColor:'#3D5860',
          headerTitleContainerStyle:{padding:'2%'},
          
          
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // Enable horizontal swipe gestures
        }}
        initialRouteName="Tabs"
      >
          <Stack.Screen name="Tabs" component={Tabs}  options={{ headerShown: false }} />
          <Stack.Screen name="Analysis" component={AnalysisScreen}/> 
          <Stack.Screen name="Today" component={AddScreen}/>
      </Stack.Navigator>
    
    </NavigationContainer>
  )
}

const style = StyleSheet.create({
  headerStyle:{
    backgroundColor:"#303030",
    shadowColor:'transparent',
    // height:verticalScale(50),
    elevation:0
   
  },
  headerTitileStyle:{
     fontFamily:'Poppins-Bold',
    fontSize:RFValue(15),
    color:'#5FD4EE',
    
  }
})
export default App