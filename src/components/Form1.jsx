import React from 'react'
import { useForm } from "react-hook-form";
const Form1 = ({setFullform, handleNumber, fullForm}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

    const onSubmit = (e) => {
      handleNumber()
      const {name,email,phone} = e
      setFullform((prev) => ({...prev, name:name, email:email, phone:phone}))
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form1'>
      <label htmlFor="Name">Name</label>
      <input type="text" name='Name' className='input__text' defaultValue={fullForm.name} {...register("name", { required: true })} />
      <label htmlFor="Email">Email</label>
      <input type="email" name='Email' className='input__text' defaultValue={fullForm.email} {...register("email", { required: true })}/>
      <label htmlFor="Phone">Phone Number</label>
      <input type="text" name='Phone' className='input__text' defaultValue={fullForm.phone} {...register("phone", { required: true })}/>
      <button type="submit" id='btn-next'>Next Step</button>
    </form>
  )
}

export default Form1