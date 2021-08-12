import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [calcObject, setCalcObject] = useState({});

  function handleClick(e) {
    setCalcObject({ ...calcObject, ...calculate(calcObject, e.target.textContent) });
  }

  const { next, total } = calcObject;

  console.log(calcObject);

  return (
    <div className="calc-container">
      <div className="calc-display">{next || total || 0}</div>
      <button type="button" onClick={handleClick} className="gray-btn">AC</button>
      <button type="button" onClick={handleClick} className="gray-btn">+/-</button>
      <button type="button" onClick={handleClick} className="gray-btn">%</button>
      <button type="button" onClick={handleClick} className="orange-btn">÷</button>
      <button type="button" onClick={handleClick} className="gray-btn">7</button>
      <button type="button" onClick={handleClick} className="gray-btn">8</button>
      <button type="button" onClick={handleClick} className="gray-btn">9</button>
      <button type="button" onClick={handleClick} className="orange-btn">x</button>
      <button type="button" onClick={handleClick} className="gray-btn">4</button>
      <button type="button" onClick={handleClick} className="gray-btn">5</button>
      <button type="button" onClick={handleClick} className="gray-btn">6</button>
      <button type="button" onClick={handleClick} className="orange-btn">-</button>
      <button type="button" onClick={handleClick} className="gray-btn">1</button>
      <button type="button" onClick={handleClick} className="gray-btn">2</button>
      <button type="button" onClick={handleClick} className="gray-btn">3</button>
      <button type="button" onClick={handleClick} className="orange-btn">+</button>
      <button type="button" onClick={handleClick} className="gray-btn">0</button>
      <button type="button" onClick={handleClick} className="gray-btn">.</button>
      <button type="button" onClick={handleClick} className="orange-btn">=</button>
    </div>
  );
}

export default Calculator;
