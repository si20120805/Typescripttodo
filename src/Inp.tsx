import React, { useRef } from 'react'
import './Inp.css'

interface Props{

    todo:string,
    settodo:React.Dispatch<React.SetStateAction<string>>,
    handleradd:(e:React.FormEvent)=>void
}

export const Inp = ({todo,settodo,handleradd}:Props) => {
    const inputref=useRef<HTMLInputElement>(null);
  return (
    <form className='input' onSubmit={(e)=>{handleradd(e);
        inputref.current?.blur() }}>
            {/* here we use the Blur to loose the focus on the input text  */}


<input ref={inputref} className='inputsub' value={todo} onChange={(e)=>settodo(e.target.value)} type='text' placeholder='Entert the task'/>
<button type='submit' className='buttonsub'> Go</button>

    </form>
  )
}
