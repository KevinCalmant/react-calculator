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
    <div className={'button ' + (isNaN(+operation) ? 'operator' : 'number')} onClick={() => calculationContext.handleCalculation(operation)}>
      {
        isNaN(+operation) ? (<span className={`icon-${label}`}></span>) : <span>{label}</span>
      }
    </div>
  );
};

export default Operator;
