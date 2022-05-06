import React, {useContext, useRef, useState, useEffect} from 'react';
import { useForm } from "react-hook-form";
import {AppContext} from "../context/AppContext";

const UserDetails = () => {

  const [isVaccinated, setIsVaccinated] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const {
    getEmployee,
    saveEmploy,
    vaccineTypes,
  } = useContext(AppContext);

  const employ = getEmployee();



  useEffect(() => {
    if(employ.isVaccinated) {
      setIsVaccinated(true);
    }

  }, [employ]);

  const form = useRef(employ || null);

  const onSubmit = (data) => {

    const employData = {
      identification: data.identification,
      name: data.name,
      lastName: data.lastName,
      email: data.email,
      user: data.user,
      birthDate: data.birthDate,
      address: data.address,
      phone: data.phone,
      isVaccinated: (data.isVaccinated === 'true'),
      vaccineType: (isVaccinated) ? data.vaccineType: '',
      vaccineDate: (isVaccinated) ? data.vaccineDate: '',
      dose: (isVaccinated) ? data.dose: 0,
    }


    saveEmploy(employData);

  }

  const handleChange = (event) => {
    const {value} = event.target;
    setIsVaccinated(value === 'true');
  }

  return (
    <div className=''>
      <h1 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>Detalles del usuario</h1>

      <div className='mt-8 flex w-full'>
        <div className='flex flex-col items-center w-1/2 sm:w-full px-4 py-5 bg-white space-y-6 sm:p-6 rounded-md'>
          <h1 className='text-lg font-medium leading-6 text-gray-900'>Información del empleado</h1>
          <form ref={form} onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full'>
            <div className='w-full mb-1'>
              <label
                htmlFor="identification"
                className='block text-md font-medium text-gray-700'
              >
                Identificación
              </label>
              <input
                type="text"
                placeholder="Identificación"
                name="identification"
                defaultValue={employ.identification}
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
                Nombre
              </label>
              <input
                type="text"
                placeholder="Nombres"
                name="name"
                defaultValue={employ.name}
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
                htmlFor="name"
                className='block text-md font-medium text-gray-700'
              >
                Apellidos
              </label>
              <input
                type="text"
                placeholder="Apellidos" name="lastName"
                defaultValue={employ.lastName}
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
                placeholder="Correo" name="email"
                defaultValue={employ.email}
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
            <div className='w-full mb-1'>
              <label
                htmlFor="user"
                className='block text-md font-medium text-gray-700'
              >
                Usuario
              </label>
              <input
                readOnly={true}
                type="text"
                placeholder="Usuario"
                name="user"
                id="user"
                defaultValue={employ.user}
                {...register("user")}
                className="block border border-gray-300 bg-gray-100 w-full rounded-md px-3 py-1"
              />
            </div>
            <div className='w-full mb-1'>
              <label
                htmlFor="birthDate"
                className='block text-md font-medium text-gray-700'
              >
                Fecha de nacimiento
              </label>
              <input
                type="date"
                placeholder="Fecha de nacimiento"
                name="birthDate"
                id="birthDate"
                defaultValue={employ.birthDate}
                className="block border border-gray-300 bg-gray-100 w-full rounded-md px-3 py-1"
                {...register("birthDate", {
                  required: { value: true, message: "Campo obligatorio!" }
                })}
              />
              {errors.birthDate && <span className='text-red-500'>{ errors.birthDate.message }</span>}
            </div>
            <div className='w-full mb-1'>
              <label
                htmlFor="address"
                className='block text-md font-medium text-gray-700'
              >
                Dirección
              </label>
              <input
                type="text"
                placeholder="Dirección"
                name="address"
                defaultValue={employ.address}
                className="block border border-gray-300 bg-gray-100 w-full rounded-md px-3 py-1"
                {...register("address", {
                  required: "Campo obligatorio!",
                  minLength: {
                    value: 3,
                    message: 'Mínimo 3 caracteres!'
                  },
                  maxLength: {
                    value: 80,
                    message: 'Máximo 80 caracteres!'
                  },
                })}
              />
              {errors.address && <span className='text-red-500'>{ errors.address.message }</span>}
            </div>
            <div className='w-full mb-1'>
              <label
                htmlFor="phone"
                className='block text-md font-medium text-gray-700'
              >
                Teléfono
              </label>
              <input
                type="text"
                placeholder="Teléfono"
                name="phone"
                id="phone"
                defaultValue={employ.phone}
                className="block border border-gray-300 bg-gray-100 w-full rounded-md px-3 py-1"
                {...register("phone", {
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
              {errors.phone && <span className='text-red-500'>{ errors.phone.message }</span>}
            </div>
            <div className='w-full mb-1'>
              <label
                htmlFor="isVaccinated"
                className='block text-md font-medium text-gray-700'
              >
                Estado de vacunación
              </label>
              <select
                name="isVaccinated"
                id="isVaccinated"
                defaultValue={employ.isVaccinated}
                className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm"
                {...register("isVaccinated", {
                  required: "Campo obligatorio!",
                })}
                onChange={handleChange}
              >
                <option value={true}>Vacunado</option>
                <option value={false}>No vacunado</option>
              </select>
              {errors.isVaccinated && <span className='text-red-500'>{ errors.isVaccinated.message }</span>}
            </div>
            { isVaccinated && (
              <div className='w-full mb-1'>
                <label
                  htmlFor="vaccineType"
                  className='block text-md font-medium text-gray-700'
                >
                  Tipo de vacuna
                </label>
                <select
                  name="vaccineType"
                  id="vaccineType"
                  defaultValue={employ.vaccineType}
                  className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm"
                  {...register("vaccineType", {
                    required: {
                      value: isVaccinated,
                      message: "Campo obligatorio!"
                    },
                  })}
                >
                  <option value="">Seleccione una vacuna</option>
                  {vaccineTypes.map(vaccineType => (
                    <option key={vaccineType.id} value={vaccineType.id}>{vaccineType.name}</option>
                  ))}
                </select>
                {errors.vaccineType && <span className='text-red-500'>{ errors.vaccineType.message }</span>}
              </div>
            )}

            { isVaccinated && (
              <div className='w-full mb-1'>
                <label
                  htmlFor="vaccineDate"
                  className='block text-md font-medium text-gray-700'
                >
                  Fecha de vacunación
                </label>
                <input
                  type="date"
                  placeholder="Fecha de Vacunación ?"
                  name="vaccineDate"
                  id="vaccineDate"
                  defaultValue={employ.vaccineDate}
                  className="block border border-gray-300 bg-gray-100 w-full rounded-md px-3 py-1"
                  {...register("vaccineDate", {
                    required: { value: isVaccinated, message: "Campo obligatorio!" }
                  })}
                />
                {errors.vaccineDate && <span className='text-red-500'>{ errors.vaccineDate.message }</span>}
              </div>
            )}

            { isVaccinated && (
              <div className='w-full mb-1'>
                <label
                  htmlFor="dose"
                  className='block text-md font-medium text-gray-700'
                >
                  Número de Dosis
                </label>
                <input
                  type="number"
                  placeholder="Dosis"
                  name="dose"
                  id="dose"
                  defaultValue={employ.dose}
                  className="block border border-gray-300 bg-gray-100 w-full rounded-md px-3 py-1"
                  {...register("dose", {
                    required: { value: isVaccinated, message: "Campo obligatorio!" },
                    minLength: {
                      value: 1,
                      message: 'Mínimo 1 caracter!'
                    },
                    maxLength: {
                      value: 2,
                      message: 'Máximo 2 caracteres!'
                    },
                    pattern: {
                      value: /^[0-9]+$/,
                      message: 'El campo debe contener solo números',
                    },
                  })}
                />
                {errors.dose && <span className='text-red-500'>{ errors.dose.message }</span>}
              </div>
            )}

            <div className='w-full mb-1 pt-4'>
              <button
                type="submit"
                className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
