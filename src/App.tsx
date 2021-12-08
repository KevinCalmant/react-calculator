import { useState } from "react";
import "./App.scss";
import Operator from "./components/Operator";
import Screen from "./components/Screen";
import CalculationContext from "./contexts/CalculationContext";
import { rows } from "./misc/rows";

function App() {
  const [calculation, setCalculation] = useState("");
  const [result, setResult] = useState(0);

  const calculatorProvider = {
    calculation,
    setCalculation,
    result,
    setResult,
    handleCalculation: (operation: string) => {
      if (operation === "clear") {
        setCalculation("");
        setResult(0);
      } else if (operation === "=") {
        const calcEval = eval(calculation);
        if (isNaN(calcEval)) {
          setResult(0);
        } else {
          setResult(calcEval);
          setCalculation("");
        }
      } else if (isNaN(+operation)) {
        setCalculation(calculation + " " + operation + " ");
      } else {
        setCalculation(calculation + +operation);
      }
    },
  };

  return (
    <div className="calculator">
      <CalculationContext.Provider value={calculatorProvider}>
        <Screen />
        <div className="keyboard">
          {rows.map((row) => {
            return (
              <div className="row">
                {row.map((button) => {
                  return (
                    <Operator
                      label={button.label}
                      operation={button.operation}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </CalculationContext.Provider>
    </div>
  );
}

export default App;
