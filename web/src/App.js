import React from 'react';
import './App.css';
import socketIOClient from "socket.io-client";
import Chat from"./Components/Chat/Chat";


function App() {

  return (
    <div className="App">
      <Chat></Chat>
    </div>      
  );
}

export default App;
