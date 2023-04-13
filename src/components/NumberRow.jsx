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
      </li>
      <li className={`numberrow__item ${number === 2 ? "active" : ""}`}>
        <button onClick={() => changeNumber(2)}>2</button>
      </li>
      <li className={`numberrow__item ${number === 3 ? "active" : ""}`}>
        <button onClick={() => changeNumber(3)}>3</button>
      </li>
      <li className={`numberrow__item ${number === 4 ? "active" : ""}`}>
        <button onClick={() => changeNumber(4)}>4</button>
      </li>
    </ul>
  );
};

export default NumberRow;
