const Operator = ({
  operation,
  label,
  handleCalculation
}: {
  operation: string;
  label: string;
  handleCalculation: (value: string) => void
}) => {
  return (
    <div className={'button ' + (isNaN(+operation) ? 'operator' : 'number')} onClick={() => handleCalculation(operation)}>
      {
        isNaN(+operation) ? (<span className={`icon-${label}`}></span>) : <span>{label}</span>
      }
    </div>
  );
};

export default Operator;
