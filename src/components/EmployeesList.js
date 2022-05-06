import React, {useContext} from 'react';
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

    if(value === 'true') {
      setIsVaccinatedValue(true);
    }

    if(value === 'false') {
      setIsVaccinatedValue(false);
    }

    if(value === '') {
      setIsVaccinatedValue(null);
    }

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
    <div className='pb-12'>
      <h1 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>Listado de empleados</h1>

      <EmployeeForm/>

      <div className='mt-4 flex w-full bg-white p-4 justify-between items-center  rounded-md'>
        <div>
          <select
            name="isVaccinated"
            id="isVaccinated"
            onChange={handleIsVaccinatedChange}
            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm"
          >
            <option value="">Estado de vacunación</option>
            <option value={'true'}>Vacunado</option>
            <option value={'false'}>No vacunado</option>
          </select>
        </div>
        <div>
          <select
            name="vaccineType"
            id="vaccineType"
            onChange={handleVaccineTypeChange}
            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm"
          >
            <option value="">Tipo de vacuna</option>
            {vaccineTypes.map(vaccineType => (
              <option key={vaccineType.id} value={vaccineType.id}>{vaccineType.name}</option>
            ))}
          </select>
        </div>
        <div>
          <input
            type="date"
            placeholder="Desde"
            name="vaccineDateFrom"
            onChange={handleVaccineDateFromChange}
            className="block border border-gray-300 bg-gray-100 w-full rounded-md px-3 py-1"
          />
        </div>
        <div>
          <input
            type="date"
            placeholder="Hasta"
            name="vaccineDateTo"
            onChange={handleVaccineDateToChange}
            className="block border border-gray-300 bg-gray-100 w-full rounded-md px-3 py-1"
          />
        </div>

      </div>

      <div className='mt-4 flex w-full bg-white p-4 justify-center items-center  rounded-md'>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className=' text-xs w-full text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th className='px-6 py-3'>Identification</th>
              <th className='px-6 py-3'>Nombre</th>
              <th className='px-6 py-3'>Apellidos</th>
              <th className='px-6 py-3'>Email</th>
              <th className='px-6 py-3'>Vacunado?</th>
              <th className='px-6 py-3'>Tipo de vacuna</th>
              <th className='px-6 py-3'>Fecha de vacunación</th>
              <th className='px-6 py-3'>Dosis</th>
            </tr>
            </thead>
            <tbody>
            {searchedEmployees.map(employee => (
              <tr key={employee.identification} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                <td className='px-6 py-4'>{employee.identification}</td>
                <td className='px-6 py-4'>{employee.name}</td>
                <td className='px-6 py-4'>{employee.lastName}</td>
                <td className='px-6 py-4'>{employee.email}</td>
                <td className='px-6 py-4'>{employee.isVaccinated ? 'Si' : 'No'    }</td>
                <td className='px-6 py-4'>{employee.vaccineType}</td>
                <td className='px-6 py-4'>{employee.vaccineDate}</td>
                <td className='px-6 py-4'>{employee.dose}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeesList;
