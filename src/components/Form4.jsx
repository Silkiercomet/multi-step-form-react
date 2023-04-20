import React, {useEffect} from 'react'

const Form4 = ({fullForm, setFullform}) => {
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

  useEffect(() => {
    setFullform((prev) => {
      return { ...prev, total:total };
    });
  }, [])
  return (
    <div>
      <div className="row">
        <div className="plan">
          <span>{fullForm.billing["plan"]}</span>
          <button>change</button>
        </div>
        <span className="total">{`$${fullForm.billing["price"]}`}</span>
      </div>
      <div className="row">
        {fullForm.addon.map(e => <div className="row"> 
        <div className="addon">
          <span>{e}</span>
        </div>
        <span className="addon__price">{fullForm.billing.type === "yearly" ? e === "online services" ? 10 + "/yr" : 20 + "/yr" :  e === "online services" ? 10 + "/mo" : 20 + "mo"}</span>
        </div>)}
      </div>
      <div className="row">
        <span>total </span>
        <span>${total}</span>
      </div>

    </div>
  )
}

export default Form4