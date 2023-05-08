import React from "react";
import style from "./Header.module.css";
import CV from "./CV";
import pic from "../../img/logo.png";
const Header=()=>{
  return(
    <header>
      <div className={`cotainer scales ${style.header}`}>
     <div className={style.leftSide}>
      <div className={style.texts}>
      <h5 style={{fontSize:'2rem',color:'#888',fontWeight:"bold"}}>Hello I m</h5>
      <h1 data-text="Rohit.." className={style.h1}>Rohit..</h1>
      <h5 className={`text-light ${style.h5}`}>DCA tutor & Web Designer</h5>
      
      <CV/>
      </div>
      </div>
      <div className={style.rightSide}>
      <div className={style.me}>
        <img src={pic} alt={pic}/>
      </div>
      </div>
    </div>
    </header>
    )
}
export default Header