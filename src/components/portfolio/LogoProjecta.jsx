import Animation from "../../Animation"
import { NavLink} from "react-router-dom";
import style from"./Portfolio.module.css";
import { Logos } from "./portfolioApi.jsx"

const LogoPosters=()=>{
  return(
    <>
    <Animation/>
  <div className={`container scales ${style.containers}`}>
   <div className={`${style.cards}`}>
         <h2 className="tit"> Logos Demo </h2>
     <div className="cols">
      {
        Logos.map((element)=>{
          return(
         <div key={element.id} className={`${style.cl} ${element.cl}`}>
            <article className={style.card}>
            <div className={style.imgs}>
              <img src={element.imgs} alt={element.title} className={element.cll}/>
            </div>
            <div className={style.title}>
              <h2>{element.title}</h2>
              <h3>{element.small}</h3>
              <a href={element.link} className="btn btn-primary">View Demo</a>
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
export default LogoPosters