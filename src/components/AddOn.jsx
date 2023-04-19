import React from 'react'
import checkMark from "../assets/icon-checkmark.svg"
import style from './styles/addon.module.css'
const AddOn = ({addonTitle,addonDes, amount}) => {
  return (
    <>
    <figure className={style.check}>
        <img src={checkMark} alt="this option is checked" />
    </figure>
    <div>
        <p className={style.title}>{addonTitle}</p>
        <p className={style.description}>{addonDes}</p>
    </div>
    <p className={style.amount}>+${amount}/mo</p>
    </>
  )
}

export default AddOn