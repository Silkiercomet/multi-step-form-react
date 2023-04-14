import React from "react";

const NumberRow = ({ number, setNumber }) => {
  function changeNumber(n) {
    setNumber(n);
    return;
  }
  return (
    <ul className="numberRow">
      <li className={`numberrow__item ${number === 1 ? "active" : ""}`}>
        <button onClick={() => changeNumber(1)}>1</button>
        <p className="numberrow__item_info">
          <span>step 1</span>
          <span>your info</span>
        </p>
      </li>
      <li className={`numberrow__item ${number === 2 ? "active" : ""}`}>
        <button onClick={() => changeNumber(2)}>2</button>
        <p className="numberrow__item_info">
          <span>step 2</span>
          <span>select a plan</span>
        </p>
      </li>
      <li className={`numberrow__item ${number === 3 ? "active" : ""}`}>
        <button onClick={() => changeNumber(3)}>3</button>
        <p className="numberrow__item_info">
          <span>step 3</span>
          <span>add-ons</span>
        </p>
      </li>
      <li className={`numberrow__item ${number === 4 ? "active" : ""}`}>
        <button onClick={() => changeNumber(4)}>4</button>
        <p className="numberrow__item_info">
          <span>step 4</span>
          <span>summary</span>
        </p>
      </li>
    </ul>
  );
};

export default NumberRow;
