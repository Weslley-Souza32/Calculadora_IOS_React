import React, { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import { VALUES_CALC } from './constants';
import Display from './components/Display';

function App() {
  const [textDisplay, setTextDisplay] = useState('')
  const [result, setResult] = useState('')
  const [oparationType, setOperationType] = useState('')

  const handleButtonClicked = (text: string, type: string) => {
    if (type === 'operation') {
      if (text === '=') {
        // Realiza o cálculo quando o botão "=" é clicado
        const newResult = operation(result);
        setResult(newResult.toString());
        setTextDisplay(newResult.toString());
      } else {
        // Armazena o primeiro número e o operador
        setOperationType(text)
        setResult(textDisplay);
        setTextDisplay('');
      }
    } else if (type === 'action' && text === 'AC') {
      // Limpa o display
      setTextDisplay('');
      setResult('');
    } else if (type === 'action' && text === '+/-') {
      // Inverte o sinal do número exibido no display
      setTextDisplay((prevText) => {
        if (prevText.charAt(0) === '-') {
          return prevText.slice(1);
        } else {
          return `-${prevText}`;
        }
      });
    } else if (type === 'action' && text === '%') {
      // Calcula a porcentagem do número exibido no display
      setTextDisplay((prevText) => {
        const number = parseFloat(prevText);
        return (number / 100).toString();
      });
    } else {
      setTextDisplay((prevState) => prevState + text);
    }
  };

  const operation = (currentNumber: string) => {
    if (textDisplay === '') {
      return currentNumber;
    }
  
    const num1 = parseFloat(currentNumber);
    const num2 = parseFloat(textDisplay);
  
    switch (oparationType) {
      case '+':
        return (num1 + num2).toString();
      case '-':
        return (num1 - num2).toString();
      case '*':
        return (num1 * num2).toString();
      case '/':
        if (num2 === 0) {
          return 'Erro: Divisão por zero';
        }
        return (num1 / num2).toString();
      default:
        throw new Error('Operação inválida.');
    }
  };

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
