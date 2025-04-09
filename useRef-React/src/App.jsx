import React from 'react'
import { useRef } from 'react'
import Button from './components/Button';

const App = () => {
  const boxRefernce = useRef(null);
  const changeColor = (color) => {
    boxRefernce.current.style.backgroundColor = color;
  }
  return (
    <>
      <div 
      style={{
        height: "200px",
        width: "200px"
      }}
      ref={boxRefernce}>
      </div>
      <Button name={"red"} fn={changeColor} />
      <Button name={"blue"} fn={changeColor} />
      <Button name={"green"} fn={changeColor} />
    </>
  )
}

export default App