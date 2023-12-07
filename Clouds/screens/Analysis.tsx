import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
interface AnalysisScreenProps{
    navigation?:any
}
const AnalysisScreen: React.FC<AnalysisScreenProps> = ({navigation})=>{
    return(
        <View style={style.container}>
            <Text style={style.HeaderText}>
                Hang On Tight!

            </Text>
            <Text style={style.bodyText}>
                We are still working on this feature

            </Text>

        </View>
    )


}
const style = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    HeaderText:{
        fontFamily:'Poppins-Bold',
        fontSize:RFValue(25),
        color:'#5FD4EE'

    },
    bodyText:{
        fontFamily:'Poppins-SemiBold',
        fontSize:RFValue(15),
        color:'white'

    }
})
export default AnalysisScreen