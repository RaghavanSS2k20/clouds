import React from "react";
import { View, Text, TextInput,StyleSheet, TouchableOpacity , KeyboardAvoidingView, Platform} from "react-native";
import { useRef } from "react";

interface Props{
    navigation?:any
}

const ChatTextInput:React.FC<Props> = ({navigation})=>{
    const inputRef = useRef<TextInput | null>(null);
    const cloudValue = useRef<string>('')
    const handleSend = () =>{
        console.log('Sending message:', cloudValue.current);
    // You can implement the logic to send the message to the backend or update the state as needed
    cloudValue.current = '';
    // Focus the TextInput again after sending
    inputRef.current?.focus();
    }
    return(
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingContainer}
      >
        <View style={styles.container}>
          <TextInput
            ref={inputRef}
            style={styles.textInput}
            placeholder="Type your message..."
            value={cloudValue.current} // Access the value through the ref
            onChangeText={(text) => (cloudValue.current = text)} // Update the value through the ref
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <View>
              {/* You can customize the send button, for example, you can use an icon here */}
              <Text>Send</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
    
    
}
const styles = StyleSheet.create({
    keyboardAvoidingContainer: {
      flex: 1,
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 8,
      backgroundColor: '#fff',
      borderTopWidth: StyleSheet.hairlineWidth,
      borderTopColor: '#ccc',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
    textInput: {
      flex: 1,
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 20,
      paddingHorizontal: 16,
      marginRight: 8,
    },
    sendButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'blue',
      borderRadius: 20,
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
  });

  export default ChatTextInput