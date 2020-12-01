import logo from './logo.svg';
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import './Login.css';

function Login() {
  const [username, setUsername] = useState('test');	
  const [password, setPassword] = useState('test');	
  const [err, setErr] = useState(false);
  let history = useHistory();	

  const handleOnChange = e => {
  	setErr(false);
  	if(e.target.name === "username")
  	setUsername(e.target.value);
  	else
  	setPassword(e.target.value)
  }

   const handleReset = () => {
   	setErr(false);
  	setUsername('');
  	setPassword('');
  }

  const handleSubmit = () => {
  	if(username === "test" && password === "test") {
  		sessionStorage.setItem("isLogin", true);
  		sessionStorage.setItem("Username", "Smith");
  		history.push('/home');
  	}else{
  		setErr(true);
  	}
  }

  return (
    <div className="Login">
      <div className="container">
      		<div className="form">
      			<h2>Login Form</h2>
      			<p>Username: <input type="text" name="username" value={username} onChange={handleOnChange} /></p>
      			<p>Password: <input type="password" name="password" value={password} onChange={handleOnChange} /></p>
      			<p>
      				<button type="submit" value="Login" onClick={() => handleSubmit()}>Login</button>
      				<button type="reset" value="Reset" onClick={() => handleReset()}>Reset</button>
      			</p>
      			{err && <p className="err"> Invalid Username/Password, please try again. </p>}
      		</div>
      </div>
    </div>
  );
}

export default Login;
