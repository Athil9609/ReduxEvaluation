import React from 'react'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Eval,Reset } from './store/EvalSlice'

function Evaluate() {

    

    const [calculation,setCalcuation]=useState("")

    const resetInp = () => {
        const inputElement = document.getElementById("calc");
        if (inputElement) {
          inputElement.value = "";  // Clear the value of the input directly
        }
      }

    const dispatch=useDispatch()
    const cal=useSelector((state)=>state.EvalReducer.calculate)
  return (
    <>
<div className='d-flex justify-content-center align-items-center' style={{height:"90vh"}} >
    <div className='w-75 shadow p-5 p-sm-2'>
        <h1 className='text-center'>Calculate</h1>
        <input type="text" id="calc" placeholder='Enter an Expression' onChange={(e)=>{setCalcuation(e.target.value)}} className="form-control mt-5" />
        <h3 className='mt-3 text-center'>Result:{cal}</h3>
        <div className='d-flex justify-content-center gap-3 mt-5'>
            <button onClick={()=>{dispatch(Eval(calculation))}} className='btn btn-success'>Calculate</button>
            <button onClick={()=>{dispatch(Reset());resetInp()}} className='btn btn-danger'>Reset</button>
        </div>
    </div>
    </div>    
    </>
  )
}

export default Evaluate