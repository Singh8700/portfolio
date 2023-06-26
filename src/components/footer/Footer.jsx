import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../../templates/Button";
import { FaDiscord, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3>Ready to get started?</h3>
              <h3>Talk to us today</h3>
            </div>

            <div>
              <Button className="btn hireme-btn">
                <NavLink to="/contact"> 
                <a href="#contact">Get Started </a>
                </NavLink>
              </Button>
            </div>
          </div>
        </section>
        {/* footer section */}

        <footer>
        <div className="grid grid-col-three">
          <div className="container">
            <div className="footer-about">
              <h1>Rohit</h1>
              <h2>Rohit@8700</h2>
              <p>DCA Tutor, Web Designer (like :- HTML, CSS JS & other library's or frameworks), Tally also</p>
            </div>
            <div className="footer-subscribe">
              <h3>Subscribe to get important updates</h3>
              <form action="https://formspree.io/f/mrgvdbzp" method="POST">
                <input type="email" name="email" placeholder="YOUR E-MAIL" required/>

                <input type="submit" value="subscribe" className="btn" />
              </form>
            </div>
      <div className="footer-social">
              <h3>Follow Us</h3>
             <div className="footer-social--icons">
                <div>
                  <a href="https://github.com/Singh8700">
                  <FaDiscord className="icons" />
                  GitHub
                  </a>
                </div>
                <div>
                <a href="https://instagram.com/83_rohit?igshid=MzNlNGNkZWQ4Mg==">
                  <FaInstagram className="icons" />
                  Instagram 
                </a>
                </div>
                 <div>
                <a href="https://bit.ly/rohit-port">
                  <FaWhatsapp className="icons" />
                  WhatsApp 
                </a>
                </div>
              </div>
            </div>
          </div>
      
      <div className="footer-link-section">
        <ul className="container">
        <NavLink to="/">
         <h3>Home</h3>
        </NavLink>
       <NavLink to="/about">
         <h3>About</h3>
        </NavLink>
      <NavLink to="/services">
         <h3>Projects</h3>
      </NavLink>
      <NavLink to="/experience">
         <h3>Skills</h3>
      </NavLink>
      <NavLink to="/contact">
         <h3>Contact Us</h3>
      </NavLink>
        </ul>
        </div>
    <div className="footer-contact">
      <div className="container">
            <div>
              <h3>Call Us</h3>
              <a href="tel:918700750589"><h3>+91 8700750589</h3></a>
              </div>
              <div>
               <h3>E-Mail Us</h3>
               <a href="mailto:rohitfolio8700@gmail.com"><h3>rohitfolio8700@gmail.com</h3></a>
              </div>
       </div>
     </div>
        </div>
          <div className="footer-bottom--section">
            <hr />
            <div className="container flexs">
              <h3>
                @{new Date().getFullYear()} Rohit@8700. All Rights Reserved
              </h3>
              <div className="container">
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.footer_bg};
  position: sticky;
  bottom: 0%;
  padding:0rem 5rem;
  .contact-short {
    max-width: 80vw;
    margin:5rem auto 0;
    padding: 2rem 4rem;
    
    background-color: ${({ theme }) => theme.colors.box};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(-50%);
    .grid div:last-child {
      justify-self: center;
      align-self: center;
    }
    h3{
    font-weight: 900;
    color:#444;
    }
  }

  footer {
    padding: 10rem 4rem 15rem 0;
    h1{
      font-size:4rem;
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 1rem;
      word-break:all;
    }
    h3{
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 1rem;
      word-break:all;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      justify-contetn:center;
      align-items:center;
      div {
        padding:1rem;
        text-align:center;
        a{
        color:#fff;
        font-size:1.2rem;
        display:flex;
        flex-direction:column;
        margin:1rem auto;
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 4.4rem;
          position: relative;
          cursor: pointer;
          border:1px solid #fff;
          padding:1rem;
          border-radius:50%;
          margin:0.4rem auto;
        }
      }
      }
    }
  }
 .btn{
  background-color:${({theme})=>theme.colors.btns};
  border-radius:1.5rem;
 }

  .footer-bottom--section {
    width:100%;
    padding-top: 8rem;
    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  .flexs{
  display:flex;
  justify-contetn:scape-around;
  align-items:center;
  }
.footer-subscribe form input{
  width:400px; 
  margin:2.5rem 0;
}
  @media (max-width: ${({ theme }) => theme.media.tab}) {
  margin-top:20rem;
  padding:2rem 0 0;
    .footer-bottom--section{
      div{
        text-align:left;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
  margin-top:3rem;
    .contact-short {
      max-width: 80vw;
      height:auto;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      margin-bottom: 2rem;
      .footer-about{
        width:80%;
      }
      
      .footer-subscribe{
        width:100%;
        display:flex;
        flex-direction:column;
        align-items:left;
        margin:2rem auto;
        input{
          width:100%;
        }
      }
    }
    .footer-subscribe form input{
    width:100%;
    margin: 2rem auto;
    }
  .footer-bottom--section {
    padding-top: 4rem;
      div{
        text-align:left;
      }
    }
    .flexs{
      flex-direction:column;
    }
  }
 
`;

export default Footer;