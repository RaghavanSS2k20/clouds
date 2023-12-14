import React, { useState } from 'react';
import { View, ScrollView, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { RectButton,Swipeable } from 'react-native-gesture-handler';
import Cloud from './Cloud';
import LinearGradient from 'react-native-linear-gradient';
import { SendSVGComponent } from '../assets/Icons/SVG';
interface Message {
  text: string;
  id: number;
}


const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const handleChange = (text:string)=>{
   
    setNewMessage(text)
    setIsDisabled(text.trim() === '')
    

  }
  const renderRightActions = () => (
    <RectButton style={{ backgroundColor: '#303030', justifyContent: 'center', alignItems: 'flex-end', flex: 1 }}>
      <Text style={{ color: 'white', padding: 10 }}>Delete</Text>
    </RectButton>
  );
  const handleSend = () => {
    // Add the new message to the messages array
    setMessages([...messages, { text: newMessage, id: messages.length }]);
    // Clear the input field
    setNewMessage('');
    setIsDisabled(true)
  };
  
  const handleDelete = ()=>{
    console.log("hii")
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.chatContainer}>
        {/* Render the chat messages */}
        {messages.map((message) => (
          <Swipeable renderRightActions={renderRightActions} onSwipeableRightOpen={handleDelete}>
          <View style={{margin:'2%'}}>
            <Cloud cloud={message.text} type="draft" isDay={false}/>
        </View>
        </Swipeable>
        ))}
      </ScrollView>
      <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)']} style={styles.gradientOverlay} />
      <View style={styles.inputBar}>
        <TextInput
          style={styles.messageInput}
          placeholder="Add your cloud"
          value={newMessage}
          onChangeText={handleChange}
        />
        <View style={{padding:'2%'}}>
        {/* <Button disabled={isDisabled}  title="Send" onPress={handleSend}  /> */}
        <TouchableOpacity onPress={handleSend} disabled={isDisabled} >
          <SendSVGComponent fill={isDisabled?'#508A97':'#5FD4EE'}  strokeWidth={1} size={40}/>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatContainer: {
    flex: 1,
    paddingBottom: 60, // Height of the input bar
  },
  messageContainer: {
    padding: 10,    
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  inputBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex:4,
    
    padding: 10,
  },
  messageInput: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: '#5FD4EE',
    borderRadius: 4,
    fontFamily:'Poppins',
    backgroundColor:'rgba(0,0,0,0.7)'
    
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 160,
    zIndex:2
  },
});

export default ChatScreen;
