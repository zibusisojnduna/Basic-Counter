import Heading from "./Components/headings"
import Counter from "./Components/counter"
import Increment from "./Components/increment"
import Decrement from "./Components/decrement"
import "./App.css"
import { useState } from "react"

function App() {

const [counter, setCounter] = useState(0)

  return(
    <div id="main">
      <section><Heading/></section>
      <section><Counter/></section>
      <section><Increment setCounter={setCounter}/><Decrement setCounter={setCounter}/></section>
    </div>
  )
}

export default App
