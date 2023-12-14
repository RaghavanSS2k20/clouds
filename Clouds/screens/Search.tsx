import React from "react";
import { View, Text,StyleSheet , Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { verticalScale, horizontalScale } from "../helpers/Metrics";
const SearchScreen = ()=>{
    return(
        <View>
           <View style={styles.metabarContainer}>
        <LinearGradient
          colors={["#1EA6C6", "#9CE1F1"]}
          start={{x:1, y:0}}
          end={{x:0, y:0}}
          style ={styles.linearGradient}

        >
              <View style={styles.innerContainer}>
                <View style={styles.metricsHeader}>
                <Text style={styles.buttonText}>Clouds Passed</Text>
                <Text style={styles.counterText}>153</Text>
                </View>
                <View style={styles.searchBorContainer}>
                  <SearchSVGComponent fill="#5FD4EE" size={moderateScale(25)}/>
                </View>
              
              </View>

        </LinearGradient>
      </View>
        </View>
    )
}

const styles = StyleSheet.create({
    metabarContainer:{
        padding:'3%'  
       },
       linearGradient:{
        height:verticalScale(45),
        width: "100%",
        borderRadius:12,
        
        backgroundColor:'transparent'
    
      },
})
export default SearchScreen