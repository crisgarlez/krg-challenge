import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { item, logout } = useContext(AppContext);

  const { user } = item;

  return (
    <div className="bg-gray-800">
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <h1 className="text-gray-50 h-8 w-auto">
              <Link to="/">Challenge</Link>
            </h1>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="text-gray-50">
              {user && <div className="Header-alert">@{user.user.username}</div>}
            </div>
            <button
              type="button"
              onClick={logout}
              className='block px-4 py-2 text-sm text-gray-50'
            >
              Logout
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Header;
