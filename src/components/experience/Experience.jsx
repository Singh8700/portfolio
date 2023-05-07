import style from "./Experience.module.css";
import Animation from "../../Animation";
import { frontEnd, Other} from "./ExperienceApi.jsx"
const Experience=()=>{
 
  return(
    <>
    <Animation/>
    <section id="experience" className="transformX">
      <h5 className="scales">What Skills I have </h5>
      <h2 className="scales">Skills</h2>
    
      <div className={`container scales ${style.container}`}>
        <div className={style.frontEnd}>
          <h3>Frontend Development</h3>
          <div className={style.content}>
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
           })
           }
          </div>
        </div>
        {/* send Experience column*/}
        <div className={style.backEnd}>
           <h3>Other Facilities</h3>
          <div className={style.content}>
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
           })
           }
          </div>
        </div>
      </div>
    </section>
    </>
    )
}
export default Experience