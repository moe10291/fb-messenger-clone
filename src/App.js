import React, {useState, useEffect} from 'react';
import {Button, FormControl, InputLabel, Input} from '@material-ui/core';
import './App.css';
import Message from './Message';

function App() {
  
  const [input, setInput]= useState("");
  const [messages, setMessages]= useState([
    {username:'Moe', text: 'hey'}, 
    {username:'Joe', text: 'Hi'}, 
    ]);
  const [username, setUsername]= useState('');

  //useState= variable in React.
  //useEffect= run code on a condition in React.

  useEffect(()=> {
    setUsername(prompt('Please enter your name'));
    //run code here
    //if its blank inside [], this code runs ONCE when app component loads.
  }, [] ) //condition
  
  const sendMessage= (event)=>{
    //all the logic to send a message goes here
    event.preventDefault();
    setMessages([
      ...messages, {username: username, text: input}
    ]);
    setInput('');
  }


  return (
    <div className="App">
     <h1>Hello World 🌎</h1>
     <h2>Welcome {username}</h2>
    <form>
      <FormControl>
      <InputLabel>Enter Message ...</InputLabel>
      <Input value={input} onChange={event=> setInput(event.target.value)}/>
      
     <Button 
       disabled={!input} 
      variant="contained" 
      color="primary" 
      type="submit" 
      onClick={sendMessage}>Send Message</Button>
  </FormControl>
     
    </form>
   
     {/* Messages*/}
     {
       messages.map(message=> (
         <Message username={username} message= {message} />
         
       ))
     }
    </div>
  );
}

export default App;
