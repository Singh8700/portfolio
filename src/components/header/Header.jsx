import {useState, useEffect} from "react"
//import style from "./Header.module.css";
import CV from "./CV";
import pic01 from "../../img/bg.png";
import pic00 from "../../img/logo.png";
import HeroSection from "../heroSection/HeroSection"
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
    textHighlight:`Hi, I am Rohit.
   I am currently doing my internship as a tutor for the DCA course. Before this,I have also worked as a computer operator in Covid-19 at the Vaccination Center. `,
   btn:<CV />,
   width:"10%"
  }
  return(
   <>
   <HeroSection myData={datas}/>
  </>
    )
}
export default Header