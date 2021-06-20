import React, { useEffect } from 'react';
import './chat.css';
import socketIOClient from "socket.io-client";
import { withRouter } from "react-router";

function Chat(props) {
  const [name, setName] = React.useState('');
  let socket = null;

  useEffect(() => {
    const userLogin = localStorage.getItem('@socket:userLogin');
    if (!userLogin) {
      props.history.push('/login');
    } else {
      setName(userLogin);
      handleJoinChat();
    }
    return () => {
      socket.disconnect(); 
    }
  },[]);

  
  const handleJoinChat = () => {
    const messageshow = document.getElementById("messageShow");

    if(!socket){
      socket = new socketIOClient.io("http://localhost:4444");
    }

    socket.on('received', message => {
      let elemento = document.createElement("template");
      let html = `<p><strong>${message.name} - </strong> ${message.content}</p>`.trim();
      elemento.innerHTML = html;

      messageshow.append(elemento.content.firstChild);
    })
  }

  const handleSendMessage = () => {
    const messageinput = document.getElementById("messageinput").value; 
    if(!socket){
      socket = new socketIOClient.io("http://localhost:4444");
    }

    let message = {"name":name, "content":messageinput};
    socket.emit('message', message);
  }

  return (
    <div>
        <div id="messagecontainer" className="messageContainer">
          <div id="messageShow" className="messageShow"></div>
          <input id="messageinput" name="messagebox"></input>&nbsp;
          <button id="send-message" onClick={handleSendMessage}>Send</button>
        </div>
    </div>
  );
}

export default withRouter(Chat);
