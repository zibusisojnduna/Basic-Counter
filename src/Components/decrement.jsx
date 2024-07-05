function Decrement(props){

    
     //this decrease the value
    const decrement = () => {
    //alert("Aaaaaaand, you're dead.")
    props.setCounter(props.counter - 1)
  };

    return(    
        <button className="button-2" onClick={decrement}>Decrement</button>
    )
}
export default Decrement;