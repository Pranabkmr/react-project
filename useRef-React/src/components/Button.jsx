import React from 'react'

const Button = ({name, fn}) => {
  return (
    <button 
    onClick={() => {
        fn(name)
    }}>
        {name}
    </button>
  )
}

export default Button