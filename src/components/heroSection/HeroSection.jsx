import styled from "styled-components"

const HeroSection = ({myData})=>{
  const { title,img, textHighlight,btn} = myData;
  
  const Wrapper = styled.section`
  padding: 5rem 2rem;
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
  
  .hero-section-image {
    max-width:500px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;
     img{
       border-radius:2rem;
       box-shadow:-5px -5px 10px #eee;
     }
         &:hover{
      &:before{
        left:50%;
        top:50%;
        transfrom:translate(-50%,-50%);
        width:0%;
        height:0%
      }
    }
     &:before{
        content:'';
        position:absolute;
        top:0;left:0;
        width:100%;
        height:100%;
        border-radius:2rem;
        background-image: linear-gradient(45deg, rgba(0,0,0,0.3),rgba(,0,0,0,0.8));
        z-index:1;
        transition:0.5s;
      }
    &::after {
      content: "";
      width: 85%;
      height: 70%;
      background-color: rgba(255, 150,0, 0.4);
      border-radius:2rem;
      position: absolute;
      left: 35%;
      top: -3rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
    
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    
  img {
    height:30rem;
  }
    section{
      padding: 5rem 0rem
    }
    .grid {
      padding: 12rem 0rem;
      gap: 10rem;
      margin:-2rem auto;
      width:90%;
      display:flex;
      justify-contents: center;
      align-items:center;
      flex-wrap: wrap-reverse;
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
    img{
      width:300px;
      height:30rem;
      position:relative;
    }
    }
    figure::after {
      content: "";
      width: 50%;
      height: 60%;
      left: -10%;
      top: -10%;
      /* bottom: 10%; */
      background-color: rgba(0, 200, 248, 0.6);
    }
  
  }
`;
  return (
    <Wrapper>
     <div className="contianer">
        <div className="flex grid-four-column">
          <div className="hero-section-data">
            <p className="intro-data">Hello I'm</p>
            <h1 data-text={`${title}.......`} className="text-animate">{title}</h1>
            <p className="title-highlight">
             {textHighlight}
              <br/>
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