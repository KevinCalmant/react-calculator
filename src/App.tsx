import { useState } from "react";
import "./App.scss";
import Operator from "./components/Operator";
import Screen from "./components/Screen";
import { rows } from "./misc/rows";

function App() {
  const [calculation, setCalculation] = useState("");
  const [result, setResult] = useState(0);

  const handleCalculation =  (operation: string) => {
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
  };

  return (
    <div className="calculator">
        <Screen calculation={calculation} result={result} />
        <div className="keyboard">
          {rows.map((row) => {
            return (
              <div className="row">
                {row.map((button) => {
                  return (
                    <Operator
                      label={button.label}
                      operation={button.operation}
                      handleCalculation={handleCalculation}
                    />
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
