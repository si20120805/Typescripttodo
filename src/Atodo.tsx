import React from 'react'
import {TODO} from './amodel'
import Asingle from './Asingle'

type Props={
andler:TODO[];
setandler:React.Dispatch<React.SetStateAction<TODO[]>>;
    
}
// here we are assining the type of the component
//  by Reeact.FC and then pass the props because its using the jsx in the child  class so have to assing like this
const Atodo:React.FC<Props> = ({andler,setandler}) => {
  return (
    <div>
{andler.map(data=>(<Asingle data={data} key={data.id}  andler={andler} setandler={setandler}/>))


}
        
    </div>
  )
}

export default Atodo