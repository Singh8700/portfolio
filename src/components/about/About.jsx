
import style from "./About.module.css";
//import pic from "../../img/logo.png";
import Animation from "../../Animation";
import {list, Qualification} from "./AboutApi"
import { Link } from "react-router-dom";
const About=()=>{
  
  return(
    <>
    <Animation/>
    <div className={`transformX ${style.aboutUs}`}>
    <section id="about" className="transX">
     <h5 className="scales">Get To Know</h5>
     <h2 className="scales">About Me </h2>
     
    <div className={`container ${style.about}`}>
      <div className={style.aboutMe}>
        <div className={`${style.aboutMeImg}`} >
         {/* <img src={pic} alt={pic} />
       */}
        </div>
      </div>
      <div className={style.aboutContent}>
       <div className={style.aboutCards}>
         <h2 className="tit"> Experience </h2>
          {list.map((element)=>{
            return(
        <div key={element.id} className={element.cl}>
          <article className={style.aboutCard}>
            <span className={style.aboutIcon}>
              {element.icon}
            </span>
            <h5>{element.text}</h5>
            <small>{element.result}</small>
          </article>
        </div>
            )
          })
          }
      <h2 className="tit">Qualification</h2>
          {Qualification.map((element)=>{
            return(
        <div key={element.id} className={element.cl}>
          <article className={style.aboutCard}>
            <span className={style.aboutIcon}>
              {element.icon}
            </span>
            <h5>{element.text}</h5>
            <small>{element.result}</small>
          </article>
        </div>
            )
          })
          }
        </div>
      </div>
    </div>

  <div className={style.pera}>
        <p className="scale">
        Hi, I am Rohit.
        <br/>I am currently doing my internship as a tutor for the DCA course. Before this,I have also worked as a computer operator in Covid-19 at the Vaccination Center. 
        <br/>
         I love to Learn programming language and also taught some programming languages like: Python (Only Basic),HTML, CSS, JS, some Css Frameworks & librarys, some JS librarys.  now I'm learning React JS and i have understood little bit of Python Django.
         <br/>
         I currently live in Delhi and have completed all my education from Delhi. I started my programming journey from my phone and learned as much as I could from my phone.
         
        </p>
        <Link to="/contact" className={`btn btn-primary ${style.btns}`}>
        Send Massage
     </Link>
     <br/>
     <br/>
    </div>
    </section>
  </div>
 </>
    )
}
export default About