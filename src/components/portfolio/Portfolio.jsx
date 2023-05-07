import Animation from "../../Animation"
import style from"./Portfolio.module.css";
import { Pic,Posters,Logos, Design } from "./portfolioApi.jsx"
const Portfolio=()=>{
  
  return(
    <>
    <Animation/>
    <section id="services" className="transformX">
    <h5 className="scales">Let See</h5>
     <h2 className="scales">Portfolio</h2>
      
      <div className={`container scales ${style.containers}`}>
     <div className={style.cards}>
      <h2 className="tit"> Live Projects </h2>
      {
        Pic.map((element)=>{
          return(
         <div key={element.id} className={`${style.cl} ${element.cl}`}>
            <article className={style.card}>
            <div className={style.imgs}>
          
              <img src={element.imgs} alt={element.title} className={element.cll}/>
            </div>
            <div className={style.title}>
              <h3>{element.title}</h3>
              <h5>{element.small}</h5>
              <a href={element.link} className="btn btn-primary">Live Demo</a>
            </div>
          </article>
        </div>
          )
        })
      }
      <h2 className="tit"> Poster Demos </h2>
      {
        Posters.map((element)=>{
          return(
         <div key={element.id} className={`${style.cl} ${element.cl}`}>
            <article className={style.card}>
            <div className={style.imgs}>
              <img src={element.imgs} alt={element.title} className={element.cll}/>
            </div>
            <div className={style.title}>
              <h3>{element.title}</h3>
              <h5>{element.small}</h5>
              <a href={element.link} className="btn btn-primary">View Demo</a>
            </div>
          </article>
        </div>
          )
        })
      }
      <h2 className="tit"> Logos Demo </h2>
      {
        Logos.map((element)=>{
          return(
         <div key={element.id} className={`${style.cl} ${element.cl}`}>
            <article className={style.card}>
            <div className={style.imgs}>
              <img src={element.imgs} alt={element.title} className={element.cll}/>
            </div>
            <div className={style.title}>
              <h3>{element.title}</h3>
              <h5>{element.small}</h5>
              <a href={element.link} className="btn btn-primary">View Demo</a>
            </div>
          </article>
        </div>
          )
        })
      }
      <h2 className="tit"> Web Design Demo </h2>
       {
        Design.map((element)=>{
          return(
         <div key={element.id} className={`${style.cl} ${element.cl}`}>
            <article className={style.card}>
            <div className={style.imgs}>
              <img src={element.imgs} alt={element.title} className={element.cll}/>
            </div>
            <div className={style.title}>
              <h3>{element.title}</h3>
              <h5>{element.small}</h5>
              <a href={element.link} className="btn btn-primary">View Demo</a>
            </div>
          </article>
        </div>
          )
        })
      }
        </div>
      </div>
    </section>
   </>
    )
}
export default Portfolio
