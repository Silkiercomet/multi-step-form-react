import React from 'react'
import style from './styles/inputPlan.module.css'
const inputPlan = ({isYearly,name,amount, img}) => {
  return (
    <div className={style.inputPlan}>
        <figure>
            <img src={img} alt={name + " plan icon"} />
        </figure>
        <div>
            <p className={style.inputPlan__name}>{name}</p>
            <p className={style.inputPlan__amount}>{isYearly ? `$${amount * 10}/yr` : `$${amount}/mo`}</p>
            {isYearly && <p className={style.inputPlan__yearly}>2 months free</p>}
        </div>
    </div>
  )
}

export default inputPlan