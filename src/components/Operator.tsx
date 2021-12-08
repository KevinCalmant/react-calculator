import { useContext } from "react";
import CalculationContext from "../contexts/CalculationContext";

const Operator = ({
  operation,
  label
}: {
  operation: string;
  label: string;
}) => {
  const calculationContext = useContext(CalculationContext);

  return (
    <div className='operator button' onClick={() => calculationContext.handleCalculation(operation)}>
      <span className={`icon-${label}`}></span>
    </div>
  );
};

export default Operator;
