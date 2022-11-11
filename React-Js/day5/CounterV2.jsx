const Counter = () => {
  const [value, setValue] = React.useState(0);
  const decrease = () => setValue(value - 1);
  const increase = () => setValue(value + 1);
  const reset = () => setValue(0);

  return (
    <div className="Counter">
      Count : {value}
      <button onClick={decrease}>decrease</button>
      <button onClick={increase}>increase</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};
