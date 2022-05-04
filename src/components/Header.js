import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { item, logout } = useContext(AppContext);

  console.log('Header', item);
  const { user } = item;

  return (
    <div className="">
      <h1 className="">
        <Link to="/">Challenge</Link>
      </h1>
      <div className="">
        {user && <div className="Header-alert">{user.user.username}</div>}
      </div>

      <button type="button" onClick={logout}>Logout</button>
    </div>
  );
}

export default Header;
