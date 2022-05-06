import React, {useContext} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Layout from '../components/Layout';

import Home from '../containers/Home';
import Login from "../containers/Login";

function AppUI() {

  const {
    item
  } = useContext(AppContext);



  if(!item.user.isAuthenticated) {
    return (
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Login/>
        </div>
      </div>

    )
  }

  return (

      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home/>} />
          </Routes>
        </Layout>
      </BrowserRouter>

  );
}

export { AppUI };
