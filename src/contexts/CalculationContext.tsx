import React, { createContext } from "react";

interface Calculation {
  calculation: string;
  setCalculation: (value: string)=> void;
  result: number;
  setResult: (value: number) => void;
  handleCalculation: (value: string) => void,
}

const CalculationContext = createContext<Calculation>({
  calculation: '',
  setCalculation: (value: string) => {},
  result: 0,
  setResult: (value: number) => {},
  handleCalculation: (value: string) => {}
});

export default CalculationContext ;
