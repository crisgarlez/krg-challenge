import React, {useContext} from 'react';
import {AppContext} from "../context/AppContext";
import EmployeesList from "../components/EmployeesList";
import UserDetails from "../components/UserDetails";

const Home = () => {

  const {
    item
  } = useContext(AppContext);

  if(item.user.user.isAdmin) {
    return (
      <div>
        <EmployeesList/>
      </div>
    );
  }

  return (
    <div>
      <UserDetails/>
    </div>
  );
};

export default Home;
