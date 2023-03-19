import React, { useState } from 'react'
import { Ainput } from './Ainput'
import App from './App'
import {TODO} from'./amodel'
import Atodo from './Atodo'

const Again:React.FC = () => {
    const [avalue,setavalue]=useState<string>('')
    const [andler,setandler]=useState<TODO[]>([])

const againhandler=(e:React.FormEvent)=>{
if(avalue){
setandler([...andler,{id: Date.now(),todo:avalue,isDone:false}])

}

}

  return (
   <>
   
   <App/>
   <Ainput avalue={avalue} setavalue={setavalue} againhandler={(e)=>{againhandler(e)}}/>
   <Atodo andler={andler} setandler={setandler}/>

   
   </>


  )
}

export default Again