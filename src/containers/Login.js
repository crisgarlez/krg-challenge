import React, { useRef, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Login = ({ history }) => {

  const form = useRef(null);

  const {
    item,
    login,
  } = useContext(AppContext);

  console.log(login);

  const isUser = (savedUser, userToCompare) => {
    console.log(savedUser, userToCompare);
    return savedUser.username === userToCompare.username && savedUser.password === userToCompare.password;
  }

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const user = {
      'username': formData.get('username'),
      'password': formData.get('password'),
    }

    const loggedInUser = item.users.find( (usuario) => isUser(usuario, user));

    console.log(loggedInUser);

    if (loggedInUser){
      login(loggedInUser);
    }
  }

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form ref={form}>
        <label>
          <p>Username</p>
          <input type="text" name='username' />
        </label>
        <label>
          <p>Password</p>
          <input type="password" name='password' />
        </label>
        <div>
          <button type="button" onClick={handleSubmit}>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login;
