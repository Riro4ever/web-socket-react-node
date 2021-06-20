import React from 'react';
import './App.css';
import Chat from "../../components/Chat/Chat";
import Login from '../Login/Login';

function App() {
  const [name, setName] = React.useState('');

  const getLogin = (chosenName) => {
    setName(chosenName);
  }
  return (
    <div className="App">
      <Chat teste="teste"></Chat>
    </div>      
  );
}

export default App;
