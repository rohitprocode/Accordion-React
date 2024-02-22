import React, { useState } from 'react'
import './Accordion.css'
import { Questions } from '../Data/data'
import MyAccordion from './MyAccordion'
function Accordion() {
    const [data,setData] = useState(Questions)
    console.log("Rendered")
  return (
    <div className='Accordion'>
        {data.map((currElem)=>{
            const { id, Questions, Answer } = currElem;
           return <MyAccordion key={id} {...currElem} />
        })}
    </div>
  )
}

export default Accordion
