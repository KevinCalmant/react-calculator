import { useContext } from "react";
import CalculationContext from "../contexts/CalculationContext";

const Number = ({ number }: { number: string }) => {
  const calculationContext = useContext(CalculationContext);

  return (
    <div className="button" onClick={() => calculationContext.handleCalculation(number)}>
      <span>{number}</span>
    </div>
  );
};

export default Number;
