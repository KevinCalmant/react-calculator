const Operator = ({
  operation,
  label,
}: {
  operation: string;
  label: string;
}) => {
  return (
    <div className='operator button'>
      <span className={`icon-${label}`}></span>
    </div>
  );
};

export default Operator;
