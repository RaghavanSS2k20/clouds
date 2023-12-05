import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { horizontalScale, verticalScale } from "../helpers/Metrics";
interface Props {
    navigation?:any
}

const LandingHeader:React.FC<Props>=({navigation})=>{
    const handleSearchPress = ()=>{
        console.log("Presse")
    }
    return(
       <View style={styles.headerContainer}>
          <View style={{padding:'2%'}}>
        <Text style={styles.headerText}>Good Morning</Text>
        <Text style={styles.userNameText}>Raghavan M</Text>
      </View>
      <TouchableOpacity onPress={handleSearchPress}>
        <Text style={styles.analysis}>Analysis</Text>
      </TouchableOpacity>


       </View>
    )
}
const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
       
        paddingHorizontal: horizontalScale(10),
        paddingTop: 0,
        height: 100,
      },
      headerText: {
        
        fontSize: RFValue(10),
        color:'#48828f',
        
        fontFamily:'Poppins-SemiBold'
      },
      userNameText:{
        
          fontSize: RFValue(15),
          color:"#5FD4EE",
          
          fontFamily:'Poppins-Bold'
        },
      analysis: {
       
        fontSize: RFValue(10),
        color:'#48828f',
        
        fontFamily:'Poppins-SemiBold'
        
      }
    })
        

    export default LandingHeader;