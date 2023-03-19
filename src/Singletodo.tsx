import React, { useState,useRef,useEffect } from "react";
import { Todo } from "./model";
import "./Todo.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { IoIosDoneAll } from "react-icons/io";
type Props = {
  data: Todo;
  handler: Todo[];
  sethandler: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const Singletodo = ({ data, handler, sethandler }: Props) => {
    const [edit,setedit]=useState<boolean>(false)
    const [edittodo,setedittodo]=useState<string>(data.todo)
    const inputref=useRef<HTMLInputElement>(null)
  const handledone = (id: number) => {
    sethandler(
      handler.map((val) =>
        val.id === id ? { ...val, isDone: !val.isDone } : val
      )
    );
  };

  const handledelete=(id:number)=>{

sethandler(handler.filter(val=>val.id!==id))
  }

  const handleedit=(e:React.FormEvent,id:number)=>{
    e.preventDefault()
  
    sethandler(handler.map(key=>key.id===id?{...key,todo:edittodo}:key))
   


setedit(false)
  }
  console.log(data.todo)
  useEffect(()=>{
    inputref.current?.focus()
  },[edittodo])
  return (
    <form className="todosingle" onSubmit={(e)=>handleedit(e,data.id)}>
  {edit ? (<input ref={inputref} value={edittodo} onChange={(e)=>setedittodo(e.target.value)}/>):(

data.isDone ? (
    <s className="todosingletext">{data.todo} </s>
  ) : (
    <span className="todosingletext">{data.todo} </span>
  )
  )}


        
      

      <div>
        <span className="icons" 
        onClick={()=>{
            if(!edit && !data.isDone){
            setedit(!edit)
          }}}>
        
        
          <AiFillEdit />
        </span>
        <span
          className="icons"
          onClick={() => {
            handledelete(data.id);
          }}
        >
          <AiFillDelete />
        </span>
        <span className="icons" onClick={() => handledone(data.id)}>
          <IoIosDoneAll />
        </span>
      </div>
    </form>
  );
};

export default Singletodo;
