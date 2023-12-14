import React from "react";
import { View, Text } from "react-native";
interface Props{
  navigation?:any
}
import ChatScreen from "../components/ChatScreen";
import ChatTextInput from "../components/ChatTextInput";
import Cloud from "../components/Cloud";
const AddScreen:React.FC<Props> = ({navigation})=>{
  return(
   <ChatScreen/>
   

  )
  
}


export default AddScreen