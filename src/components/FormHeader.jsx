import React from 'react'

const FormHeader = ({number}) => {
    const obj = {
        1 : ["Personal info", "Please provide your name, email address, and phone number."],
        2 : ["Select your plan","You have the option of monthly or yearly billing."],
        3 : ["Pick add-ons","Add-ons help enhance your gaming experience."],
        4 : ["Finishing up","Double-check everything looks OK before confirming."]
    }
  return (
    <header>
        <h1>{obj[number][0]}</h1>
        <p>{obj[number][1]}</p>
    </header>
  )
}

export default FormHeader