import React, { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import { VALUES_CALC } from './constants';
import Display from './components/Display';

function App() {
  const [textDisplay, setTextDisplay] = useState('')

  const handleButtonClicked = (text: string) => {
    setTextDisplay((prevState) => prevState + text)
  }

  return (
    <div className="container-calculadora">
      <Display text={textDisplay} />
      <div className='calculator-grid'>
        {VALUES_CALC.map((value) => (
          <div className={value.text === '0' ? 'calculator-button double' : 'calculator-button'}>
            <Button onClick={() => handleButtonClicked(value.text)} valueText={value.text} typeClass={value.type} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
