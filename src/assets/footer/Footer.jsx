
import style from "./Footer.module.css";
import { Link } from "react-router-dom";
//import list from "./FooterApi.js"
const Footer=()=>{
  
  return(
    <>
    <div className={`scales`}>
    <footer className={style.footers}>
    <section id="footer" >
    <div>
     <Link to="/" className={style.logo}>Rohit</Link>
     <h5 className={style.copyright}>@Rohit8700 © copyright 2023 </h5>
    </div>
    </section>
    </footer>
    </div>
   </>
    )
}
export default Footer