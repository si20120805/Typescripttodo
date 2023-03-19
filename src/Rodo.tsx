import React from 'react'
import './Todo.css'
import {Todo} from './model'
import Singletodo from './Singletodo'

interface Props{
    handler:Todo[];
    sethandler:React.Dispatch<React.SetStateAction<Todo[]>>;

}


const Rodo:React.FC<Props> = ({handler,sethandler}) => {
  return (
    <div className='todos'>
       
{
handler.map(data=>(<Singletodo data={data} key={data.id} handler={handler} sethandler={sethandler}/>))
}
        </div>
  )
}

export default Rodo