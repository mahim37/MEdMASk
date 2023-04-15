import React, {useState} from 'react';
import { questions } from './api';
import "./Accordion.css";
import MyAccordion from "./MyAccordion";
const Accordion = () => {
    const [data,setData]=useState(questions);
  return (
    <>
        <section className="main-div">
            <h1 className="faqsh">Frequently Asked Questions (FAQs)</h1>
            <br></br>
            {
                data.map((curElem)=>{
                    const {id}=curElem;
                    return <MyAccordion key={id} {...curElem}/>
                })
            }
        </section>
    </>
  )
}

export default Accordion