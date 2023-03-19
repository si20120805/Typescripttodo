import React, { useRef } from 'react'
import './againinput.css'
type Props={
    avalue:string;
    setavalue:React.Dispatch<React.SetStateAction<string>>;
    againhandler:(e:React.FormEvent)=>void;

}


export const Ainput = ({avalue,setavalue,againhandler}:Props) => {
    const eref=useRef<HTMLInputElement>(null)
  return (
    <form className='input'  onSubmit={(e)=>{againhandler(e); eref.current?.blur()
   }}>
<input ref={eref} className='ainput' placeholder='Enter the Text' value={avalue} onChange={(e)=>setavalue(e.target.value)}/>
<button className='abutton'>Go</button>

    </form>
  );
}
