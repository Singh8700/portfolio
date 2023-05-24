import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {Button} from "../../templates/Button"
const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2>404</h2>
          <h3>UH OH! You're lost.</h3>
          <p>
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>

          <NavLink to="/">
            <Button>Go Back to Home</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width:100%;
  min-height:80vh;
  display:flex;
  justify-content: center;
  align-items: centre;
  .container {
    padding: 15rem 4rem;
    text-align: center;
    margin:20rem auto;
    h2 {
      font-size: 10rem;
    }

    h3 {
      font-size: 4.2rem;
    }

    p {
      margin: 2rem 0;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}){
    .container{
      margin:0rem auto;
      padding:5rem 2rem;
    }
  }
`;

export default ErrorPage;