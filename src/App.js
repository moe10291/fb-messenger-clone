import React, {useState, useEffect} from 'react';
import {Button, FormControl, InputLabel, Input} from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';



function App() {
  
  const [input, setInput]= useState("");
  const [messages, setMessages]= useState([]);
  const [username, setUsername]= useState('');

  //useState= variable in React.
  //useEffect= run code on a condition in React.

  useEffect(()=> {
    //run once when the app component loads
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot=> {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    });
  }, []);

  useEffect(()=> {
    setUsername(prompt('Please enter your name'));
    //run code here
    //if its blank inside [], this code runs ONCE when app component loads.
  }, [] ) //condition
  
  const sendMessage= (event)=>{
    //all the logic to send a message goes here
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    // setMessages([
    //   ...messages, {username: username, text: input}
    // ]);
    setInput('');
  }


  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&family=Nanum+Brush+Script&family=Poiret+One&display=swap" rel="stylesheet"></link>
      <img className="logo" src="https://cdn.pixabay.com/photo/2017/06/10/07/21/chat-2389223_1280.png?"/>
     <h1>Moe's Messenger 🗣    </h1>
     <h2>Welcome {username}</h2>

    <form className="app_form">
      <FormControl className="app_formControl">
      <InputLabel>Enter Message ...</InputLabel>
      <Input className="app_input" placeholder="Enter a message" value={input} onChange={event=> setInput(event.target.value)}/>

    <IconButton
    className="app_iconButton"
    disabled={!input} 
    variant="primary" 
    color="primary" 
    type="submit" 
    onClick={sendMessage}> 
    
      <SendIcon/>
    </IconButton>

      
     {/* <Button 
       disabled={!input} 
      variant="contained" 
      color="primary" 
      type="submit" 
      onClick={sendMessage}>Send Message</Button> */}
  </FormControl>
     
    </form>

    <FlipMove>

     {
       messages.map(({id, message})=> (
         <Message key={id} username={username} message= {message} />
         
       ))
     }

    </FlipMove>
   
     {/* Messages*/}
    </div>
  );
}

export default App;
