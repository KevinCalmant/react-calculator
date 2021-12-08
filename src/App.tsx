import { useState } from 'react';
import './App.scss';
import Clear from './components/Clear';
import Number from './components/Number';
import Operator from './components/Operator';
import Screen from './components/Screen';
import { rows } from './misc/rows';

function App() {
  const [result, setResult] = useState(0);
  const [calculation, setCalculation] = useState('');

  return (
    <div className='calculator'>
      <Screen calculation={calculation} result={result} />
      <div className='keyboard'>
        <div className='row'>
          <Clear />
          <Operator label='eq' operation='=' />
          <Operator label='plus' operation='+' />
        </div>
        {rows.map((row) => {
          return (
            <div className='row'>
              {row.map((button) => {
                return button.operation ? (
                  <Operator label={button.label} operation={button.operation} />
                ) : (
                  <Number number={button.label} />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
