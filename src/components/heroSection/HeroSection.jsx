import styled from "styled-components"

const HeroSection = ({myData})=>{
  const { title,img, textHighlight,btn,width} = myData;
  
  const Wrapper = styled.section`
  padding: 5rem 8rem;
  max-width:100%;
  img {
    min-width: 10rem;
    height: 20rem;
    background-color:var(--color-bg);
  }
  .flex{
  width:100%;
  display:flex;
  justify-content:space-around;
  align-items:center;
  gap:10px;
  flex-wrap:wrap-reverse;
  }
  .hero-section-data {
    margin: 3rem 0;
    word-break:all;
    overflow:hidden;
    width:400px;
    p {
      margin: 0.5rem 0;
      text-align:left;
      font-weight:bold;
    }
    .title-highlight{
      color:#aaa;
      font-size:2.5rem;
      
    }
    h1 {
      text-transform: capitalize;
      text-align:center;
      font-weight: bold;
      font-size:2rem;
      word-break:all;
    }
  }
  .text-animate{
    width:${width};
  }
  .hero-section-image {
    max-width:500px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:2rem;
    border:10px solid ${({theme})=>theme.colors.bgColors};
      border-left:0px;
      border-bottom:0px;
     img{
     border-radius:1.8rem 1rem 1.8rem 1.8rem;
       box-shadow:-1px -1px 10px ${({theme})=>theme.colors.bgColors},5px 5px 10px #000;
     }
    &:before{
        content:'';
        position:absolute;
        width:100%;
        height:100%;
        border-radius:2rem;
        background-image: linear-gradient(45deg, rgba(0,0,0,0.3),rgba(,0,0,0,0.8));
        z-index:1;
        transition:0.5s;
      }
    &::after {
      content: "";
      width: 70%;
      height: 70%;
      background-color: rgba(255, 150,0, 0.4);
      border-radius:2rem;
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
    &:hover:before{
    height:0%;
    transform:translate(-50%,-50%)
    width:0%;
     }
  }
  .img-style {
    width: 100%;
    height: auto;
    
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding:5rem 2rem;
    align-items:center;
    gap:5rem;
    figure{
    width:100%;
    
      border-radius:2rem;
    img{
      width:100%;
      height:30rem;
      position:relative;
    }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.small}) {
  padding:5rem 2rem;
    .text-animate{
    width:65%;
    text-align:center;
  }
    section{
      padding: 5rem 0rem
    }

    .hero-section-data,.hero-section-image{
    min-width:100%;
    display:flex;
    justify-contents: center;
    flex-direction:column;
    align-items: center;
    }.hero-section-data{
    .intro-data{
      text-align: center;
      width:90%;
    }
    h1{
      font-size:4.5rem;
      filter:drop-shadow(2px 2px 1px #aaa);
    }
    }
    figure{
    padding:2rem auto;
    margin:1rem auto 0 2.5rem;
    border:0;
    img{
    border-radius:2rem;
      width:calc(100% - 110px);
      position:relative;
      border:5px inset ${({theme})=>theme.colors.bgColors};
      border-right:0px;
      border-bottom:0px;
    }
    &:hover:before{
    
    height:30%;
    width:30%;
     }
    }
    figure::after {
      content: "";
      width: 50%;
      height: 50%;
      left: 0%;
      top: -20%;
      /* bottom: 10%; */
      background-color: rgba(0, 200, 248, 0.6);
    }
    figure::before {
      content: "";
      position:absolute;
      width: 30%;
      height: 30%;
      right: 10%;
      bottom: -10%;
      /* bottom: 10%; */
      background-image: linear-gradient(305deg, rgba(0,0,0,0.3),rgba(,0,0,0,0.8));
      background-color: rgba(250,80,0, 1);
      border-radius:2rem;
      z-index:1;
      transition: background 0.5s;
      border:5px solid ${({theme})=>theme.colors.bgColors};
    }
  }
`;
  return (
    <Wrapper>
     <div className="contianer">
        <div className="flex">
          <div className="hero-section-data">
            <p className="intro-data">Hello I'm</p>
            <h1 data-text={`${title}`} className="text-animate">{title}</h1>
            <p className="title-highlight">
             {textHighlight}
              <br />
            </p>
              {btn}
          </div>
         <div className="hero-section-image">
            <figure>
              <img src={img} alt="Hreo section images"/>
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
    )
}
export default HeroSection