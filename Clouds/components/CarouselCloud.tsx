import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { horizontalScale, verticalScale, moderateScale } from "../helpers/Metrics";
import { RFValue } from "react-native-responsive-fontsize";
import LinearGradient from "react-native-linear-gradient";
/*
[
    {
        cloud:"some string content",
        time:"mongodb mongoose datetime datatype"
    },
    {
        cloud:"some string content",
        time:"mongodb mongoose datetime datatype"
    },
    {
        cloud:"some string content",
        time:"mongodb mongoose datetime datatype"
    }
]
 */

const getColor = (type:string)=>{
    if(type === "good"){
        return("#43DD5C")
    }
    else if(type==="neutral"){
        return("#C9E424")
    }
    else if(type==="bad"){
        return("#E44624")
    }
}
interface CarouselData{
    cloud?:string,
    time?:string,
    type?:string,
    index?:any
}

const CarouselCloud: React.FC<CarouselData>=({cloud,time, type,index})=>{
    const styles = StyleSheet.create({
        cloud:{
           
            borderWidth:2,
            borderColor:"#43DD5C",   
            borderRadius:moderateScale(10),         
            display:'flex',
            flexDirection:'row',
           // alignItems:'center',
           justifyContent:'space-evenly',
            height:verticalScale(250),
            width:horizontalScale(360),
            
                        

        },
        TimeText: {
        
            fontSize: RFValue(30),
            color:'white',
            
            fontFamily:'Poppins-Bold'
          },
          dateText:{
            
              fontSize: RFValue(15),
              color:"#5FD4EE",
              
              fontFamily:'Poppins-SemiBold'
            },
        cloudText:{
            fontFamily:'Poppins-SemiBold',
            color:'white',
            fontSize:RFValue(16)
        },
        innerContainer:{
            margin:moderateScale(15),
            display:'flex',
            justifyContent:'space-between',
        
        }

    })
    return(
      <LinearGradient 
        colors={["rgba(67, 221, 92,0.1)" , "rgba(4, 10, 5, 0.1)"]}
        start={{x: 0.5, y: 0}}  // Start from the center of the top edge
        end={{x: 0.5, y: 1}} 
        style={styles.cloud} // End at the center of the bottom edge
        
        key={index}
      >
        <View style={styles.innerContainer}>
        
            <Text style={styles.cloudText}>Helped a Senior citizen by offering them
                food, isnt it a good start 
            </Text>
            <View>
                <Text style={styles.TimeText}>9:30 AM</Text>
                <Text style={styles.dateText}>30th August, 2023</Text>
            </View>
        </View>

      </LinearGradient>
    )

}

export default CarouselCloud