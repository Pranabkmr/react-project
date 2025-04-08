import { useState } from 'react'
const bmi=()=>{
    const[height,setheight]=useState(0)
    const[weight,setweight]=useState(0)
    const[bmi,setbmi]=useState(0)
    const[status,setstatus]=useState("")
    const calculatebmi=()=>
        setheight(height/100);
        setbmi(weight/(height*height));
        if(bmi<18.5){
            setstatus('undeweight')
        }else if(bmi>=18.5 && bmi<=24.5){
            setstatus('')
        }
  return(
    <div>
      <h1 className='p-2 bg-gray-400 text-center text-xl'>Bmi Calculator</h1>
    </div>
  )
}


  
 

export default bmi