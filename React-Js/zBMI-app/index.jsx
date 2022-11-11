function BMI() {
  const [Kg, setKg] = React.useState("");
  const [M, setM] = React.useState("");
  const [calc, setCalc] = React.useState(false);
  // const KgRef = React.useRef(null).current.focus()
  const calculator = () => {
    setCalc(true);
  };
  const CalcBMI = Math.floor(calc && Kg / (M * 2));
  // function nature

  return (
    <div className="App">
      <input
        // ref={KgRef}
        type="number"
        placeholder="Kg"
        onChange={(e) => setKg(e.target.value)}
      />
      <input
        type="number"
        placeholder="M"
        onChange={(e) => setM(e.target.value)}
      />
      <button onClick={calculator}> Calculator</button>
      <h1>BMI = {CalcBMI}</h1>
    </div>
  );
}
