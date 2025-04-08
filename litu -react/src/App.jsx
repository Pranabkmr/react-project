import { useState } from 'react';


const App=()=> {

  const [value, setvalue] = useState(0)
  const incrementCount =() =>{
    setvalue(value +1)
    console.log(value)
  }
  const decrementCount =() =>{
    setvalue(value -1)
    console.log(value)
  }
  return (
    
      <div>
       <h2>{value}</h2>
       <button onClick={decrementCount}>-</button>
       <button onClick={incrementCount}>+</button>
      </div>
     
  )
}

export default App
