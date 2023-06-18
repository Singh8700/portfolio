import Animation from "../../Animation"
import { NavLink} from "react-router-dom";
import style from"./Portfolio.module.css";
import Project from "./Project"
import Posters from "./Posters"
import LogoProjects from "./LogoProjecta"
import WebProjects from "./WebProjects"
const Portfolio=()=>{
  
  return(
    <>
    <Animation/>
    <section id="services" className="transformX">
    <h4 className={`scales h5`}>Let See</h4>
     <h2 className={`scales h2`}>Projects</h2>

        <Project/>
        <Posters/>
        <LogoProjects/>
        <WebProjects/>
        
    </section>
   </>
    )
}
export default Portfolio
