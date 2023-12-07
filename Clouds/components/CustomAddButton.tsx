import React, {ReactNode} from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { AddSVGComponent } from "../assets/Icons/SVG";
import { horizontalScale, verticalScale, moderateScale } from "../helpers/Metrics";
interface Props{
    focused:boolean
    children:ReactNode
}

export const CustomAddButton:React.FC<Props> = ({children, onPress})=>(
    <TouchableOpacity onPress={onPress} style={style.buttonContainer}>
       { 
        children
       }
    </TouchableOpacity>

)
const style = StyleSheet.create({
    buttonContainer: {
        top:verticalScale(6),
        width: horizontalScale(50),
        height: verticalScale(50),
        borderRadius: moderateScale(25),
        backgroundColor: "#25282C", // Change this to the background color you desire
        justifyContent: "center",
        alignItems: "center",
      },


})