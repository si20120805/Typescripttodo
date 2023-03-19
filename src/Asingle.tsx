import React, { useState,useRef,useEffect} from 'react'
import {AiFillEdit,AiFillDelete,AiOutlineCheck} from 'react-icons/ai'
import { TODO } from './amodel'
import './againinput.css'
type Props={
    data:TODO;
    andler:TODO[];
    setandler: React.Dispatch<React.SetStateAction<TODO[]>>;
}


const Asingle = ({data,andler,setandler}:Props) => {
  const[edit,setedit]=useState<boolean>(false)
  const [aedit,setaedit]=useState<string>(data.todo)
  const rref=useRef<HTMLInputElement>(null)

const hcheckout=(id:number)=>{

 setandler(
  andler.map((val)=>val.id===id ?{...val,isDone:!val.isDone}:val))
}
const hdelete=(id:number)=>{

 setandler(andler.filter(val=>val.id!==id))
}
const formhandel=(e:React.FormEvent,id:number)=>{
e.preventDefault()
setandler(andler.map(k=>k.id===id ?{...k,todo:aedit}:k))
setedit(false)
}

useEffect(()=>{

rref.current?.focus()
},[aedit])


  return (
   <form className='asingle' onSubmit={(e)=>{formhandel(e,data.id)}} >
{edit ? (<input ref={rref} value={aedit} onChange={(e)=>setaedit(e.target.value)}/>):(data.isDone ? (<s className='againsingle'>{data.todo}</s>):(<span className='againsingle'>{data.todo}</span>))}

<div>

<span className='aicons' onClick={()=>{
if(!data.isDone&&!edit){
  setedit(!edit)
}

}}><AiFillEdit/></span>
<span className='aicons' onClick={()=>hdelete(data.id)}><AiFillDelete/></span>
<span className='aicons' onClick={()=>hcheckout(data.id)}><AiOutlineCheck/></span>

</div>

   </form>
  )
}

export default Asingle