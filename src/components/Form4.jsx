import React from 'react'

const Form4 = ({fullForm}) => {

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
        <span className="addon__price">${`${e === "online services" ?  '1' :  '2'}`}/{fullForm.billing.type === "yearly" ? "y" : "m"}</span>
        </div>)}
      </div>
      <div className="row">
        <span>total </span>
        <span>${fullForm.total}</span>
      </div>

    </div>
  )
}

export default Form4