import React from 'react'
import thankYou from "../assets/icon-thank-you.svg"
const Thanks = () => {
  return (
    <div>
        <figure>
            <img src={thankYou} alt="checkmark" />
        </figure>
        <h1>Thank you!</h1>
        <p> Thanks for confirming your subscription! We hope you have fun 
  using our platform. If you ever need support, please feel free 
  to email us at support@loremgaming.com.</p>
    </div>
  )
}

export default Thanks