import React, {useContext, useRef, useState, useEffect} from 'react';
import { useForm } from "react-hook-form";
import {AppContext} from "../context/AppContext";

const UserDetails = () => {

  const [isVaccinated, setIsVaccinated] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

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
      isVaccinated: data.isVaccinated,
      vaccineType: data.vaccineType,
      vaccineDate: data.vaccineDate,
      dose: data.dose,
    }


    saveEmploy(employData);

  }

  const handleChange = (event) => {
    const {value} = event.target;
    setIsVaccinated(value === 'true');
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>This is the user details component</p>
      <form ref={form} onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Identificación" name="identification" defaultValue={employ.identification} {...register("identification")}/>
        <input type="text" placeholder="Nombres" name="name" defaultValue={employ.name} {...register("name")}/>
        <input type="text" placeholder="Apellidos" name="lastName" defaultValue={employ.lastName} {...register("lastName")}/>
        <input type="text" placeholder="Correo" name="email" defaultValue={employ.email} {...register("email")}/>
        <input type="text" placeholder="Usuario" name="user" defaultValue={employ.user} {...register("user")}/>
        <input type="text" placeholder="Fecha de nacimiento" name="birthDate" defaultValue={employ.birthDate} {...register("birthDate")}/>
        <input type="text" placeholder="Dirección" name="address" defaultValue={employ.address} {...register("address")}/>
        <input type="text" placeholder="Teléfono" name="phone" defaultValue={employ.phone} {...register("phone")}/>
        <select name="isVaccinated" defaultValue={employ.isVaccinated === 'true'} {...register("isVaccinated")} onChange={handleChange} >
          <option value="">Vacunado?</option>
          <option value="true">Vacunado</option>
          <option value="false">No vacunado</option>
        </select>
        { isVaccinated && (
          <select name="vaccineType" id="vaccineType" defaultValue={employ.vaccineType} {...register("vaccineType", {required: { value: isVaccinated, message: "Campo obligatorio!" }})} >
            <option value="">Seleccione una vacuna</option>
            {vaccineTypes.map(vaccineType => (
              <option key={vaccineType.id} value={vaccineType.id}>{vaccineType.name}</option>
            ))}
          </select>
        )}
        { isVaccinated && errors.vaccineType && errors.vaccineType.type === "required" && <span>{ errors.vaccineType.message }</span>}
        { isVaccinated && (<input type="text" placeholder="Fecha de Vacunación ?" name="vaccineDate" defaultValue={employ.vaccineDate} {...register("vaccineDate", {required: { value: isVaccinated, message: "Campo obligatorio!" }})} />)}
        { isVaccinated && errors.vaccineDate && errors.vaccineDate.type === "required" && <span>{ errors.vaccineDate.message }</span>}
        { isVaccinated && (<input type="text" placeholder="Dosis" name="dose" defaultValue={employ.dose} {...register("dose", {required: { value: isVaccinated, message: "Campo obligatorio!" }})} />)}
        { isVaccinated && errors.dose && errors.dose.type === "required" && <span>{ errors.dose.message }</span>}
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default UserDetails;
