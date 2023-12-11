import React, { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import { VALUES_CALC } from './constants';
import Display from './components/Display';

function App() {
  const [textDisplay, setTextDisplay] = useState('')
  const [result, setResult] = useState('')

  const handleButtonClicked = (text: string, type: string) => {
    if (type === 'operation' && text === '=') {
      setTextDisplay(result)
    } else if (type === 'operation') {
      // Daqui temos que fazer outras logicas para colocar armazenar os dados da conta: primeiro numero + segundo numero
      // Deixei a funcao que realiza a operação e uma funcção que seta o resultado no final (setResult) quando o usuario 
      // clicar no botão de igual
      // Voce precisa agora a partir disso fazer com que as operações sejam realizadas e mostradas no display.
    } else {
      setTextDisplay((prevState) => prevState + text)
    }
    
  }

  const operation = (currentNumber: string, operation: string) => {
    switch (operation) {
      case '+':
        return parseInt(currentNumber, 10) + parseInt(textDisplay, 10)
      case '-':
        return parseInt(currentNumber, 10) - parseInt(textDisplay, 10)
      case '*':
        return parseInt(currentNumber, 10) * parseInt(textDisplay, 10)
      case '/':
        return parseInt(currentNumber, 10) / parseInt(textDisplay, 10)
      default:
        throw new Error('Operação inválida.');
    }
  }

  return (
    <div className="container-calculadora">
      <Display text={textDisplay} />
      <div className='calculator-grid'>
        {VALUES_CALC.map((value) => (
          <div className={value.text === '0' ? 'calculator-button double' : 'calculator-button'}>
            <Button onClick={() => handleButtonClicked(value.text, value.type)} valueText={value.text} typeClass={value.type} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
