import Heading from "./Components/headings"
import Counter from "./Components/counter"
import Increment from "./Components/increment"
import Decrement from "./Components/decrement"
import "./App.css"
import { useState } from "react"

function App() {

 
const [counter, setCounter] = useState(0)

let num = 21

console.log ("This is the counter value; ", counter)

console.log ("This is the num value;", num)

  return(
    <div id="main">
      <section><Heading/></section>
      <section><Counter setCounter={setCounter} counter={counter}/></section>
      <section><Increment setCounter={setCounter} counter={counter}/><Decrement setCounter={setCounter} counter={counter}/></section>
    </div>
  )
}

export default App
