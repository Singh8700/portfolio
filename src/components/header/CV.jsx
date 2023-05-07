import React from "react";
import resume from "../../Assets/rohit@8700.pdf";
import { Link } from "react-router-dom";
const CV=()=>{
  
  return(
    <div style={{
  marginTop: '2.5rem',
  gap:'1.5rem',
  display:'flex',
  justifyContent: 'center',
  alignItem:'center',
  flexWrap:'wrap',
  fontWeight:'900',
}}>
      <a href={resume} download className="btn">Download CV</a>
    <Link to="/contact" className="btn btn-primary">
    Let's Talk
    </Link>
    </div>
    )
}
export default CV