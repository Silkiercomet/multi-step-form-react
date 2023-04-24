import React, {useEffect} from 'react'
import style from "./styles/form4.module.css"
const Form4 = ({fullForm, setFullform, handleNumber}) => {
  const fullAddon = fullForm.addon.reduce((acc, cur) => {
    if(fullForm.billing.type === "yearly"){
      if(cur === "online services"){
        acc += 10
        return acc
      }
      acc += 20
      return acc
    }
    acc += cur === "online services" ? 1 : 2
    return acc 
  }, 0)
  const total = fullForm.billing["price"] + fullAddon
  const typeOfPlan = fullForm.billing["type"] === "yearly" ? "yr" : "mo" 

  useEffect(() => {
    console.log(fullForm)
    setFullform((prev) => {
      return { ...prev, total:total };
    });
    
  }, [])

  return (
    <div className={style.container}>
      <div className={style.row}>
        <div className={style.plan}>
          <span className={style.plan__details}>{fullForm.billing["plan"]} ({fullForm.billing["type"]})</span>
          <button className={style.btn}>Change</button>
        </div>
        <span className={style.total}>{`$${fullForm.billing["price"]}`}/{typeOfPlan}</span>
      </div>
      <div >
        {fullForm.addon.map((e, i) => <div className={style.row} key={i}> 
        <div className={style.addon}>
          <span>{e}</span>
          <span className={style.addon__price}>+{ e === "online services" ? 10 : 20 }/{typeOfPlan}</span>
        </div>
       
        </div>)}
      </div>
      <div className={style.row}>
        <span>total </span>
        <span className={style.complete__total}>${total}/{typeOfPlan}</span>
      </div>
      <button id='btn-next' onClick={()=>handleNumber()}>Confirm</button>
      <button id='btn-prev' onClick={()=>handleNumber(false)}>Go Back</button>
    </div>
  )
}

export default Form4