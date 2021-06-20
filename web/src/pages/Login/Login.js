import React, { useEffect, useState } from 'react';
import { withRouter } from "react-router";
import './login.css';

function Login(props) {
  const [name, setName] = useState("");

  function  handleLogin() {
    const inputName = document.getElementById("name").value;
    localStorage.setItem('@socket:userLogin',inputName);
    setName(inputName);
  }

  useEffect(() => {
    const userLogin = localStorage.getItem('@socket:userLogin');

    if (userLogin) {
      console.log("logged");
         props.history.push('/');
    } else {
      console.log("not logged");
    }
  }, [name]);

  return (
    <div id="nameselectcontainer">
      <div>
        <label>
            Escolha um Nome &nbsp;
            <input id="name" autoFocus name="name" placeholder="nome"></input>
        </label>
        &nbsp;
        <button id="join" onClick={handleLogin}>Entrar</button>
      </div>
    </div>
  );
}

export default withRouter(Login);
