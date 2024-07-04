function Increment(props) {

  //This increases the value
  const increment = () => {
    alert("Don't look behind you.");
  };
  return <button className="button-1" onClick={increment}>Increment</button>;
}
export default Increment;
