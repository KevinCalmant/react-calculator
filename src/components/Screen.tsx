import { useContext } from "react";
import CalculationContext from "../contexts/CalculationContext";

const Screen = () => {
  const calculationContext = useContext(CalculationContext);

  return (
    <div className='screen'>
      <div className='screen-member'>
        {calculationContext.calculation && <h3>{calculationContext.calculation}</h3>}
      </div>
      <div className='screen-member'>
        <h1>{new Intl.NumberFormat('fr-FR').format(calculationContext.result)}</h1>
      </div>
    </div>
  );
};

export default Screen;
