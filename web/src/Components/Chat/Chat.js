import React from 'react';
import './chat.css';
import socketIOClient from "socket.io-client";

function Chat(props) {
  const [name, setName] = React.useState('');
  const [messageInput, setMessageInput] = React.useState('');  
  let socket = null;
  const handleJoinChat = () => {
    const messagecontainer = document.getElementById("messagecontainer");
    const nameselectcontainer = document.getElementById("nameselectcontainer");
    const messageshow = document.getElementById("messageShow");

    if(!socket){
      socket = new socketIOClient.io("http://localhost:4444");
      messagecontainer.style.display = "block";
      nameselectcontainer.style.display = "none";
    }

    socket.on('received', message => {
      let elemento = document.createElement("template");
      let html = `<p><strong>${message.name} - </strong> ${message.content}</p>`.trim();
      elemento.innerHTML = html;

      messageshow.append(elemento.content.firstChild);
    })
  }

  const handleSendMessage = () => {
    if(!socket){
      socket = new socketIOClient.io("http://localhost:4444");
    }

    let message = {"name":name, "content":messageInput};
    socket.emit('message', message);
  }

  function handleNameChange(evt) {
    setName(evt.target.value);
  }
  function handleMessageChange(evt) {
    setMessageInput(evt.target.value);
  }

  return (
      <div>
          <div id="nameselectcontainer">
            <label>
                Nome &nbsp;
                <input id="name" autoFocus onChange={handleNameChange} name="name" placeholder="Digite seu nome" value={name}></input>
            </label>
            
            <button id="join" onClick={handleJoinChat}>Entrar no chat</button>
          </div>
          <br></br>
          <div id="messagecontainer" className="messageContainer">
            <div id="messageShow" className="messageShow"></div>
            <input id="messageinput" onChange={handleMessageChange} name="messagebox" value={messageInput}></input>
            <button id="send-message" onClick={handleSendMessage}>Send Message</button>
          </div>
      </div>
  );
}

export default Chat;
