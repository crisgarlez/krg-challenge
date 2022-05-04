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

  console.log('item', item);


  if(!item.user.isAuthenticated) {
    return (

        <Login/>

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
