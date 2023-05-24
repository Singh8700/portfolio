import React from "react";
import resume from "../../Assets/rohit@8700.pdf";
import styled from "styled-components"
import { Link } from "react-router-dom";
const CV=()=>{
  const Wrapper = styled.div`
  margin-top: 2.5rem;
  gap:3rem;
  display:flex;
  justify-content: center;
  align-item:center;
  flex-wrap:wrap;
  font-weight:900;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
  flex-direction:column;
  }
  `
  return(
    <Wrapper>
      <a href={resume} download className="btn">Download CV</a>
    <Link to="/contact" className="btn btn-primary">
    Let's Talk
    </Link>
    </Wrapper>
    )
}
export default CV