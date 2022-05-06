import React, {useContext, useState} from 'react';
import { useForm } from "react-hook-form";
import {AppContext} from "../context/AppContext";

const EmployeeForm = () => {

  const [newUser, setNewUser] = useState(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const {
    saveNewEmploy,
    error,
    setError
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
      isVaccinated: false,
      vaccineType: '',
      vaccineDate: '',
      dose: 0,
    }

    console.log('employData', employData);

    let savedEmploy = saveNewEmploy(employData);

    if (savedEmploy) {
      setNewUser(savedEmploy);
    }

  }

  const handleReset = () => {
    reset();
    setNewUser(null);
    setError(null);
  }

  const handleClearError = () => {
    setNewUser(null);
    setError(null);
  }

  return (
    <div className='mt-8 flex w-full'>
      <div className='flex flex-col items-center w-1/2 sm:w-full px-4 py-5 bg-white space-y-6 sm:p-6 rounded-md'>
        <h1 className='text-lg font-medium leading-6 text-gray-900'>Nuevo empleado</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full'>
          <div className='w-full mb-1'>
            <label
              htmlFor="identification"
              className='block text-md font-medium text-gray-700'
            >
              Identificación
            </label>
            <input
              id="identification"
              name="identification"
              placeholder="Ingresa la identificación"
              className="block border border-gray-300 bg-gray-100 w-full rounded-md px-3 py-1"
              {...register("identification", {
                required: "Campo obligatorio!",
                minLength: {
                  value: 10,
                  message: 'Mínimo 10 caracteres!'
                },
                maxLength: {
                  value: 10,
                  message: 'Máximo 10 caracteres!'
                },
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'El campo debe contener solo números',
                },
              })}
            />
            {errors.identification && <span className='text-red-500'>{ errors.identification.message }</span>}
          </div>
          <div className='w-full mb-1'>
            <label
              htmlFor="name"
              className='block text-md font-medium text-gray-700'
            >
              Nombres
            </label>
            <input
              type="text"
              placeholder="Nombres"
              name="name"
              className="block border border-gray-300 bg-gray-100 w-full rounded-md px-3 py-1"
              {...register("name", {
                required: "Campo obligatorio!",
                minLength: {
                  value: 3,
                  message: 'Mínimo 3 caracteres!'
                },
                maxLength: {
                  value: 80,
                  message: 'Máximo 80 caracteres!'
                },
                pattern: {
                  value: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/,
                  message: 'El campo debe contener solo letras',
                },
              })}
            />
            {errors.name && <span className='text-red-500'>{ errors.name.message }</span>}
          </div>
          <div className='w-full mb-1'>
            <label
              htmlFor="lastName"
              className='block text-md font-medium text-gray-700'
            >
              Apellidos
            </label>
            <input
              type="text"
              placeholder="Apellidos"
              name="lastName"
              id="lastName"
              className="block border border-gray-300 bg-gray-100 w-full rounded-md px-3 py-1"
              {...register("lastName", {
                required: "Campo obligatorio!",
                minLength: {
                  value: 3,
                  message: 'Mínimo 3 caracteres!'
                },
                maxLength: {
                  value: 80,
                  message: 'Máximo 80 caracteres!'
                },
                pattern: {
                  value: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/,
                  message: 'El campo debe contener solo letras',
                },
              })}
            />
            {errors.lastName && <span className='text-red-500'>{ errors.lastName.message }</span>}
          </div>
          <div className='w-full mb-1'>
            <label
              htmlFor="email"
              className='block text-md font-medium text-gray-700'
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Correo"
              name="email"
              className="block border border-gray-300 bg-gray-100 w-full rounded-md px-3 py-1"
              {...register("email", {
                required: "Campo obligatorio!",
                minLength: {
                  value: 3,
                  message: 'Mínimo 3 caracteres!'
                },
                maxLength: {
                  value: 80,
                  message: 'Máximo 80 caracteres!'
                },
                pattern: {
                  value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'El campo debe contener un correo válido',
                },
              })}
            />
            {errors.email && <span className='text-red-500'>{ errors.email.message }</span>}
          </div>
          <div className='w-full mb-1 pt-4'>
            {!newUser && (
              <button
                type="submit"
                className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Guardar
              </button>
            )}
          </div>
        </form>
      </div>
      <div className='flex flex-col w-1/2 items-center pt-8 ml-2'>
        {newUser && (
          <div className='bg-white rounded-md px-4 py-5 flex flex-col items-center'>
            <h2 className='text-lg font-bold leading-6 text-green-700 mb-2'>Nuevo usuario agregado!</h2>
            <p className=''>
              <span className='font-bold'>Usuario: </span>
              {newUser.username}
            </p>
            <p className=''>
              <span className='font-bold'>Password: </span>
              {newUser.password}
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              OK
            </button>
          </div>
        )}
        {error && (
          <div className='bg-white rounded-md px-4 py-5 flex flex-col items-center'>
            <h2 className='text-lg font-bold leading-6 text-red-700 mb-2'>Error!</h2>
            <p className=''>
              <span className='font-bold'>Error: </span>
              {error}
            </p>
            <button
              type="button"
              onClick={handleClearError}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              OK
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeForm;
