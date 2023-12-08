import React from "react";
import "./Button.css";

type ButtonProps = {
  valueText: string,
  typeClass: string,
  onClick: () => void
}

const Button = ({ valueText, typeClass, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={typeClass}>{valueText}</button>
  );
};

export default Button;
