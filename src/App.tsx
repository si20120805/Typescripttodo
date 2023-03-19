import { useState } from 'react';
import './App.css'
import { Inp } from './Inp';
import {Todo} from "./model"
import Rodo from './Rodo';
// D:\React_project\type\model.ts

//Here we are assining the type of the React.FC by adding the the value React.Node will support the all of the Type
const  App:React.FC=()=> {

  const [todo,settodo]=useState<string>('')
  const [handler,sethandler]=useState<Todo[]>([])

  const handleradd=(e:React.FormEvent)=>{
    e.preventDefault()
    if(todo){
      sethandler([...handler,{id:Date.now(),todo,isDone:false}])
      settodo('')
    }
console.log()

  }
  return (
   <div className="App">
<span className="heading ">TaskTodo</span>
   <Inp todo={todo} settodo={settodo} handleradd={(e)=>handleradd(e)}/>
   <Rodo handler={handler} sethandler={sethandler}/>
   </div>
  );
}

export default App;
