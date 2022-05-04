import React, {useContext, useRef, useState} from 'react';
import {AppContext} from "../context/AppContext";

const EmployeeForm = () => {

  const [newUser, setNewUser] = useState(null);

  const {
    saveNewEmploy,
  } = useContext(AppContext);

  const form = useRef(null);

  const handleSubmit = () => {
    const formData = new FormData(form.current);

    const employData = {
      'identification': formData.get('identification'),
      'name': formData.get('name'),
      'lastName': formData.get('lastName'),
      'email': formData.get('email'),
      'user': formData.get('email'),
      'birthDate': '',
      'address': '',
      'phone': '',
      'isVaccinated': '',
      'vaccineType': '',
      'vaccineDate': '',
      'dose': '',
    }

    console.log('employData', employData);

    setNewUser(saveNewEmploy(employData));

  }

  const handleReset = () => {
    form.current.reset();
    setNewUser(null);
  }

  return (
    <div>
      {newUser && (
        <div>
          <p>Usuario: {newUser.username}</p>
          <p>Password: {newUser.password}</p>
          <button type="button" onClick={handleReset}>OK</button>
        </div>
      )}
      <h1>New Employee</h1>
      <form ref={form}>
        <input type="text" placeholder="Identificación" name="identification" required={true} />
        <input type="text" placeholder="Nombres" name="name" required={true} />
        <input type="text" placeholder="Apellidos" name="lastName" required={true} />
        <input type="text" placeholder="Correo" name="email" required={true} />
        {!newUser && <button type="button" onClick={handleSubmit}>Guardar</button>}
      </form>
    </div>
  );
};

export default EmployeeForm;
