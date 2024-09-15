import React, { useState } from "react"

const Counter = () => {
  // see on komponent
  const [counter, setCounter] = useState(0)

  const modifyCounter = (element) => setCounter(prevCounter => prevCounter + element)

  return (
    <>
      <h1>{counter}</h1>

      {[+1, +5, +50, -1, -5, -50].map(element => {
        let symbol = "";
        if (element > 0 ){
          symbol = "+";
        }
        return (
          <button onClick={()=> modifyCounter(element)}>
          sync {symbol}{element}
          </button>
        );
      })}

      <br></br>
      <button onClick={() => setTimeout(() => modifyCounter(1), 2000)}>
        async+1
      </button>
    </>
  )
}
// () => setCounter(counter + 1)}>+1</button>
export default Counter
