import {useState, useEffect} from "react"
//import style from "./Header.module.css";
import CV from "./CV";
import pic01 from "../../img/bg.png";
import pic00 from "../../img/logo.png";
import HeroSection from "../heroSection/HeroSection"
import Project from "../portfolio/Project"
import Contact from "../contact/Contact"
const Header=()=>{
 const [imgs,setImgs] = useState();
 useEffect(()=>{
    if(window.innerWidth <= "768"){
      return setImgs(pic00)
    }else{
      return setImgs(pic01)
    }
 },[])
  const datas = {
    img:imgs,
    title:"Rohit........................",
    textHighlight:`Hi, I am Rohit.`,
    texts:`I am a Web-Designer & DCA Tutor.
    Presently I am working as DCA Tutor in RIIT Infotech Pvt Ltd Company. This job is not full time only part time. 
  `,
   btn:<CV />,
   width:"20%"
  }
  return(
   <>
   <div className="theme">
     <a href="https://singh8700.github.io/portfolio2">
                Next Theme &nbsp;
     </a>
   </div>
   <HeroSection myData={datas}/>
   <Project/>
   <Contact/>
  </>
    )
}
export default Header