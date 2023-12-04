import React from "react";
import "./Button.css";

const Button = () => {
  return (
      <div className="container-calculadora">
        <button className="acao">AC</button>
        <button className="acao">+/-</button>
        <button className="acao">%</button>
        <button className="operacoes">/</button><br />

        <button className="number">7</button>
        <button className="number">8</button>
        <button className="number">9</button>
        <button className="operacoes">X</button><br />

        <button className="number">4</button>
        <button className="number">5</button>
        <button className="number">6</button>
        <button className="operacoes">-</button><br />

        <button className="number">1</button>
        <button className="number">2</button>
        <button className="number">3</button>
        <button className="operacoes">+</button><br />

        <button className="number number0">0</button>
        <button>,</button>
        <button className="operacoes">=</button>
      </div>
  );
};

export default Button;
