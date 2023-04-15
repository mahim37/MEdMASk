import React , {useState} from 'react'
import "./Accordion.css";
const MyAccordion = ({question,answer}) => {
    const [show,setShow]=useState(false);
  return (
    <div className="bashogaya">
        <div className='main-heading'>
            <p><i onClick={()=>{setShow(!show)}} className={show ? "fa-solid fa-minus" : "fa-solid fa-plus"}></i></p>
            <h3 className='questionhaibhai'>{question}</h3>
        </div>
        <br></br>
        {show && <p className='answers'>{answer}</p>}
        <br></br>
    </div>
  )
}

export default MyAccordion