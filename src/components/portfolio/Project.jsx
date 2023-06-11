import Animation from "../../Animation"
import { NavLink} from "react-router-dom";
import style from"./Portfolio.module.css";
import { Pic } from "./portfolioApi.jsx"

const Project=()=>{
  return(
    <>
    <Animation/>
   <div className={`container scales ${style.containers}`}>
   <div className={`${style.cards}`}>

      <h2 className="tit"> Live Projects </h2>
      <div className="cols">
       {
        Pic.map((element)=>{
          return(
         <div key={element.id} className={`${style.cl} ${element.cl}`}>
            <article className={style.card}>
            {element.news?
            <span className={style.news}>
            <img src={element.tit}/>
            </span>:<span></span>
            }
            <div className={style.imgs}>
              <img src={element.imgs} alt={element.title} className={element.cll}/>      
            </div>
            <div className={`${style.title}`}>
              <h2 className="cols-title">{element.title}</h2>
              <h4>{element.small}</h4>
             <a href={element.link} className="btn btn-primary">
              Live Preview
              </a>
            </div>
           
          </article>
         
        </div>
          )
        })
      }
      </div>
     </div>
   </div>
   </>
)
}
export default Project