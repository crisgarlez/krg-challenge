import React, {useContext, useRef} from 'react';
import {AppContext} from "../context/AppContext";
import EmployeeForm from "./EmployeeForm";

const EmployeesList = () => {

  const {
    vaccineTypes,
    setVaccineTypeValue,
    searchedEmployees,
    setIsVaccinatedValue,
    setVaccineDateFromValue,
    setVaccineDateToValue,
  } = useContext(AppContext);

  const handleVaccineTypeChange = (e) => {
    const {value} = e.target;
    setVaccineTypeValue(value);
  };

  const handleIsVaccinatedChange = (e) => {
    const {value} = e.target;
    setIsVaccinatedValue(value);
  };

  const handleVaccineDateFromChange = (e) => {
    const {value} = e.target;
    setVaccineDateFromValue(value);
  };

  const handleVaccineDateToChange = (e) => {
    const {value} = e.target;
    setVaccineDateToValue(value);
  };

  return (
    <div>
      <h1>Employees List</h1>
      <p>This is the EmployeesList component</p>

      <br/>

      <EmployeeForm/>

      <br/>

      <div>
        <select name="isVaccinated" id="isVaccinated" onChange={handleIsVaccinatedChange}>
          <option value="">Todos</option>
          <option value={'true'}>Si</option>
          <option value={'false'}>No</option>
        </select>
        <select name="vaccineType" id="vaccineType" onChange={handleVaccineTypeChange}>
          <option value="">Todas</option>
          {vaccineTypes.map(vaccineType => (
            <option key={vaccineType.id} value={vaccineType.id}>{vaccineType.name}</option>
          ))}
        </select>
        <input type="text" placeholder="Desde" name="vaccineDateFrom" onChange={handleVaccineDateFromChange} />
        <input type="text" placeholder="Hasta" name="vaccineDateTo" onChange={handleVaccineDateToChange}  />
      </div>

      <br/>

      <table>
        <thead>
          <tr>
            <th>identification</th>
            <th>name</th>
            <th>lastName</th>
            <th>email</th>
            <th>user</th>
            <th>birthDate</th>
            <th>address</th>
            <th>phone</th>
            <th>isVaccinated</th>
            <th>vaccineType</th>
            <th>vaccineDate</th>
            <th>dose</th>
          </tr>
        </thead>
        <tbody>
          {searchedEmployees.map(employee => (
          <tr key={employee.identification}>
            <td>{employee.identification}</td>
            <td>{employee.name}</td>
            <td>{employee.lastName}</td>
            <td>{employee.email}</td>
            <td>{employee.user}</td>
            <td>{employee.birthDate}</td>
            <td>{employee.address}</td>
            <td>{employee.phone}</td>
            <td>{employee.isVaccinated}</td>
            <td>{employee.vaccineType}</td>
            <td>{employee.vaccineDate}</td>
            <td>{employee.dose}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeesList;
