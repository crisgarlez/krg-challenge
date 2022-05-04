import React, {useContext, useRef} from 'react';
import {AppContext} from "../context/AppContext";

const UserDetails = () => {

  const {
    getEmployee,
    saveEmploy,
    vaccineTypes,
  } = useContext(AppContext);

  const employ = getEmployee();

  const form = useRef(employ || null);

  const handleSubmit = () => {
    const formData = new FormData(form.current);

    const employData = {
      'identification': formData.get('identification'),
      'name': formData.get('name'),
      'lastName': formData.get('lastName'),
      'email': formData.get('email'),
      'user': formData.get('user'),
      'birthDate': formData.get('birthDate'),
      'address': formData.get('address'),
      'phone': formData.get('phone'),
      'isVaccinated': formData.get('isVaccinated'),
      'vaccineType': formData.get('vaccineType'),
      'vaccineDate': formData.get('vaccineDate'),
      'dose': formData.get('dose'),
    }

    console.log('employData', employData);

    saveEmploy(employData);

  }

  return (
    <div>
      <h1>User Details</h1>
      <p>This is the user details component</p>
      <form ref={form}>
        <input type="text" placeholder="Identificación" name="identification" defaultValue={employ.identification} />
        <input type="text" placeholder="Nombres" name="name" defaultValue={employ.name} />
        <input type="text" placeholder="Apellidos" name="lastName" defaultValue={employ.lastName} />
        <input type="text" placeholder="Correo" name="email" defaultValue={employ.email} />
        <input type="text" placeholder="Usuario" name="user" defaultValue={employ.user} />
        <input type="text" placeholder="Fecha de nacimiento" name="birthDate" defaultValue={employ.birthDate} />
        <input type="text" placeholder="Dirección" name="address" defaultValue={employ.address} />
        <input type="text" placeholder="Teléfono" name="phone" defaultValue={employ.phone} />
        <input type="text" placeholder="Vacunado ?" name="isVaccinated" defaultValue={employ.isVaccinated} />
        <select name="vaccineType" id="vaccineType" defaultValue={employ.vaccineType}>
          <option value="">Seleccione una vacuna</option>
          {vaccineTypes.map(vaccineType => (
            <option key={vaccineType.id} value={vaccineType.id}>{vaccineType.name}</option>
          ))}
        </select>
        <input type="text" placeholder="Fecha de Vacunación ?" name="vaccineDate" defaultValue={employ.vaccineDate} />
        <input type="text" placeholder="Dosis" name="dose" defaultValue={employ.dose} />
        <button type="button" onClick={handleSubmit}>Guardar</button>
      </form>
    </div>
  );
};

export default UserDetails;
