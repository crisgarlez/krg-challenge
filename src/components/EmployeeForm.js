import React, {useContext, useState} from 'react';
import { useForm } from "react-hook-form";
import {AppContext} from "../context/AppContext";

const EmployeeForm = () => {

  const [newUser, setNewUser] = useState(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const {
    saveNewEmploy,
  } = useContext(AppContext);


  const onSubmit = (data) => {

    const employData = {
      identification: data.identification,
      name: data.name,
      lastName: data.lastName,
      email: data.email,
      user: data.email,
      birthDate: '',
      address: '',
      phone: '',
      isVaccinated: '',
      vaccineType: '',
      vaccineDate: '',
      dose: '',
    }

    console.log('employData', employData);

    setNewUser(saveNewEmploy(employData));

  }

  const handleReset = () => {
    reset();
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Identificación" name="identification" {...register("identification", {required: { value: true, message: "Campo obligatorio!" }, maxLength: 80})} />
        {errors.identification && errors.identification.type === "required" && <span>{ errors.identification.message }</span>}
        <input type="text" placeholder="Nombres" name="name" {...register("name", {required: { value: true, message: "Campo obligatorio!" }, maxLength: 80})} />
        {errors.name && errors.name.type === "required" && <span>{ errors.name.message }</span>}
        <input type="text" placeholder="Apellidos" name="lastName" {...register("lastName", {required: { value: true, message: "Campo obligatorio!" }, maxLength: 80})} />
        {errors.lastName && errors.lastName.type === "required" && <span>{ errors.lastName.message }</span>}
        <input type="text" placeholder="Correo" name="email" {...register("email", {required: { value: true, message: "Campo obligatorio!" }, maxLength: 80})} />
        {errors.email && errors.email.type === "required" && <span>{ errors.email.message }</span>}
        {!newUser && <button type="submit">Guardar</button>}
      </form>
    </div>
  );
};

export default EmployeeForm;
