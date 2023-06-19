import React, { useState } from 'react';
import './Calculator.css'; // Import the CSS file containing styles

function Calculator() {
  const [theme, setTheme] = useState('bright');
  const [result, setResult] = useState('');

  const handleThemeChange = () => {
    setTheme(theme === 'bright' ? 'dark' : 'bright');
  };

  const handleButtonClick = (value) => {
    setResult(result + value);
  };


  const handledel=()=>{
    setResult(result.slice(0, -1));
  }

  const handleClear=()=>{
    setResult("");
  }

  const handleCalculate = () => {
    try {
      const calculatedResult = eval(result);
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className={`calculator ${theme}`}>
      <div className="theme-toggle">
        <input type="checkbox" id="switch"
                    class="checkbox" onClick={handleThemeChange} />
        <label for="switch" class="toggle">
             
 
<p>{theme === 'bright' ? 'Dark' : 'Bright'}</p>
 
 
        </label>
      </div>
      <div className="result">{result}</div>
      <div className="buttons">
        <button onClick={handleButtonClick.bind(null, '1')}>1</button>
        <button onClick={handleButtonClick.bind(null, '2')}>2</button>
        <button onClick={handleButtonClick.bind(null, '3')}>3</button>
        <button onClick={handleButtonClick.bind(null, '3')}>4</button>
        <button onClick={handleButtonClick.bind(null, '3')}>5</button>
        <button onClick={handleButtonClick.bind(null, '3')}>6</button>
        <button onClick={handleButtonClick.bind(null, '3')}>7</button>
        <button onClick={handleButtonClick.bind(null, '3')}>8</button>
        <button onClick={handleButtonClick.bind(null, '3')}>9</button>
        {/* Add more number buttons here */}
        <button onClick={handleButtonClick.bind(null, '+')}>+</button>
        <button onClick={handleButtonClick.bind(null, '-')}>-</button>
        <button onClick={handleButtonClick.bind(null, '*')}>*</button>
        <button onClick={handleButtonClick.bind(null, '/')}>/</button>
        <button onClick={handleButtonClick.bind(null, '0')}>0</button>
        <button onClick={handleButtonClick.bind(null, '.')}>.</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={handleClear}>clear</button>
        <button onClick={handledel}>x</button>
      </div>
    </div>
  );
}

export default Calculator;
