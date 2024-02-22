import React, { useState } from "react";

function MyAccordion({ Question, Answer }) {
    const [show,setShow] = useState(false);
  return (
    <div className="MyAccordion">
      <div className="main-Heading">
        <p style={{cursor:'pointer'}} onClick={()=>setShow(!show) } >{ show ? ' ➖ ' : ' ➕ '}</p>
        <h1>{Question}</h1>
      </div>
      <div className="answer">{show && <p>{Answer}</p> }</div>
    </div>
  );
}

export default MyAccordion;
