import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import initialState from '../initialState';

const AppContext = React.createContext();

function AppProvider(props) {


  const {
    item,
    saveItem,
  } = useLocalStorage('APP_V2',initialState );

  const [vaccineTypeValue, setVaccineTypeValue] = useState(null);
  const [isVaccinatedValue, setIsVaccinatedValue] = useState(null);
  const [vaccineDateFromValue, setVaccineDateFromValue] = useState(null);
  const [vaccineDateToValue, setVaccineDateToValue] = useState(null);

  const [error, setError] = React.useState(null);

  const isAuthenticated = item.user.isAuthenticated;

  const vaccineTypes = item.vaccineTypes;

  let searchedEmployees = [];

  if (!vaccineTypeValue) {
    searchedEmployees = item.employees;
  } else {
    searchedEmployees = item.employees.filter(employee => employee.vaccineType === vaccineTypeValue);
  }

  if (isVaccinatedValue) {

    searchedEmployees = searchedEmployees.filter(employee => {
      return employee.isVaccinated === isVaccinatedValue
    });
  } else if (isVaccinatedValue === false) {
    searchedEmployees = searchedEmployees.filter(employee => {
      return employee.isVaccinated === isVaccinatedValue
    });
  }

  if (vaccineDateFromValue) {
    searchedEmployees = searchedEmployees.filter(employee => {
      let vaccineDate = new Date(employee.vaccineDate);
      let vaccineDateFilter = new Date(vaccineDateFromValue);
      return vaccineDate >= vaccineDateFilter
    });
  }

  if (vaccineDateToValue) {
    searchedEmployees = searchedEmployees.filter(employee => {
      let vaccineDate = new Date(employee.vaccineDate);
      let vaccineDateFilter = new Date(vaccineDateToValue);
      return vaccineDate <= vaccineDateFilter
    });
  }

  const login = payload => {
    saveItem({
      ...item,
      user: {
        isAuthenticated: true,
        isLoading: false,
        user: payload,
        error: {},
      },
    });
  }

  const logout = () => {
    saveItem({
      ...item,
      user: {
        isAuthenticated: false,
        isLoading: false,
        user: {},
        error: {},
      },
    });
  }

  const addEmployee = payload => {
    saveItem({
      ...item,
      employees: [...item.employees, payload],
    });
  }

  const saveEmploy = payload => {
    const employToEdit = item.employees.findIndex(emp => emp.identification === payload.identification);
    const newEmployees = item.employees;
    newEmployees[employToEdit] = payload;
    saveItem({
      ...item,
      employees: newEmployees,
    });
  }

  const saveNewEmploy = payload => {

    const existingEmployee = item.employees.find( (employee) => {
      return (employee.identification === payload.identification) || (employee.email === payload.email);
    });

    if (existingEmployee) {
      setError('Ya existe un empleado con ese número de identificación o correo electrónico');
      return null;
    }

    const newUser = {
      username: payload.email,
      password: payload.identification,
      isAdmin: false,
    };

    saveItem({
      ...item,
      employees: [...item.employees, payload],
      users: [...item.users, newUser],
    });

    return {
      username: payload.email,
      password: payload.identification,
    };
  }

  const getEmployee = () => {
    return item.employees.filter(employee => employee.user === item.user.user.username)[0];
  }

  return (
    <AppContext.Provider value={{
      item,
      isAuthenticated,
      addEmployee,
      login,
      getEmployee,
      saveEmploy,
      saveNewEmploy,
      logout,
      vaccineTypes,
      vaccineTypeValue,
      setVaccineTypeValue,
      searchedEmployees,
      isVaccinatedValue,
      setIsVaccinatedValue,
      vaccineDateFromValue,
      setVaccineDateFromValue,
      vaccineDateToValue,
      setVaccineDateToValue,
      error,
      setError
    }}>
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };

