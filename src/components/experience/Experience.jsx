import style from "./Experience.module.css";
import Animation from "../../Animation";
import { frontEnd, Other} from "./ExperienceApi.jsx"
import Posters from "../portfolio/Posters"
import LogoPosters from "../portfolio/LogoProjecta"
import Contact from "../contact/Contact"
const Experience=()=>{
 
  return(
    <>
    <Animation/>
    <section id="experience" className="transformX">
      <h4 className={`scales h5`}>What Skills I have </h4>
      <h2 className={`scales h2`}>Skills</h2>
    
      <div className={`container scales ${style.container}`}>
        <div className={style.frontEnd}>
          <h3>Frontend Development</h3>
          <div className={style.content}>
          <div className="cols">
           {frontEnd.map((element)=>{
             return (
          <div key={element.id} className={element.cl}>
            <article className={style.details} key={element.id}>
              <span className={style.icon}>
              {element.icon}
              </span>
              <div>
              <h4>{element.item}</h4>
              <small className={style.small}>
              {element.exp}
             </small>
             </div>
            </article>
          </div>
            )
           })}
           </div>
          </div>
        </div>
        {/* send Experience column*/}
        <div className={style.backEnd}>
           <h3>Other Facilities</h3>
          <div className={style.content}>
         <div className="cols">
        {Other.map((element)=>{
             return (
          <div key={element.id} className={element.cl}>
            <article className={style.details} key={element.id}>
              <span className={style.icon}>
              {element.icon}
              </span>
              <div>
              <h4>{element.item}</h4>
              <small className={style.small}>
              {element.exp}
             </small>
             </div>
            </article>
         </div>
            )
           })}
          </div>
          </div>
        </div>
      </div>
    </section>
    <Posters/>
    <LogoPosters/>
    <Contact/>
    </>
    )
}
export default Experience