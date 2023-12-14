import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { moderateScale, horizontalScale, verticalScale } from "../helpers/Metrics";
import { RFValue } from "react-native-responsive-fontsize";
import { formatDay, formatTime } from "../helpers/helpers";
interface CarouselData {
  cloud?: string;
  time?: Date;
  type?: string;
index?:any;
isDay?:boolean
}

const Cloud: React.FC<CarouselData> = ({ cloud, time, type,index, isDay  }) => {
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
        else{
          return("#5FD4EE")
        }
    }

    const getAesthetic = (type:String)=>{
      if(type === "good"){
        return("rgba(67, 221, 92,0.1)")
      }
      else if(type === "neutral"){
        return("rgba(201, 228, 36, 0.1)")
      }
      else if(type === "bad"){
        return("rgba(228, 70, 36,0.1)")
       
      }
      else{
        return("rgba(95, 212, 238,0.1)")

      }
    }
  const [cloudHeight, setCloudHeight] = useState(200);

  const calculateHeight = (event: any) => {
    const { height } = event.nativeEvent.layout;
    setCloudHeight(height);
  };

  const styles = StyleSheet.create({
    cloud: {
      borderWidth: moderateScale(1),
      borderColor: getColor(type || ""),
      borderRadius: moderateScale(10),
      display: 'flex',
      flexDirection: 'row',
      //justifyContent: 'space-evenly',
      //height: cloudHeight, // Set the height dynamically
      width: RFValue(300),
    },
    TimeText: {
      fontSize: RFValue(30),
      color: 'white',
      fontFamily: 'Poppins-Bold',
    },
    dateText: {
      fontSize: RFValue(12),
      color: "#5FD4EE",
      fontFamily: 'Poppins-SemiBold',
      marginTop:moderateScale(20)
    },
    cloudText: {
      fontFamily: 'Poppins-Light',
      color: 'white',
      fontSize: RFValue(12),
     
    },
    innerContainer: {
      margin: moderateScale(10),
      display: 'flex',
      justifyContent: 'space-between',
    },
  });

  return (
    <LinearGradient
      colors={[getAesthetic(type), "rgba(4, 10, 5, 0.1)"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.cloud}
      key={index}
      onLayout={calculateHeight} // Triggered after rendering to get the height
    >
      <View style={styles.innerContainer}>
        <Text style={styles.cloudText}>{cloud}</Text>
      

     

      
          
        <Text style={styles.dateText}>{isDay?formatDay(new Date()):formatTime(new Date())}</Text>
        </View>
      
    </LinearGradient>
  );
};

export default Cloud;
