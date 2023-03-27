import React from 'react'
import { useForm } from "react-hook-form";
const Form2 = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  return (
    <div>Form</div>
  )
}

export default Form2