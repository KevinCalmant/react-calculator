const Screen = ({
  calculation,
  result,
}: {
  calculation: string;
  result: number;
}) => {
  return (
    <div className='screen'>
      <div className='screen-member'>
        {calculation && <h3>{calculation}</h3>}
      </div>
      <div className='screen-member'>
        <h1>{new Intl.NumberFormat('fr-FR').format(result)}</h1>
      </div>
    </div>
  );
};

export default Screen;
