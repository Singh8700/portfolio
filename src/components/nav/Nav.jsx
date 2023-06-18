import {useState} from 'react';

import style from './Nav.module.css';

import { Link} from "react-router-dom";

import list from "./NavList";
const Nav=(props)=>{
  
 const [isActive,setIsActive]=useState(props.path);

 
  return(
    <nav> 
    <ul className={`scales ${style.navigation}`}>
    {
    list.map((ele)=>{
      return(
     
    <li onClick={()=>setIsActive(ele.link)} className={props.path === ele.link ? style.active : ' '}>
     <Link to={ele.link}>
    <span className={style.icon}>
     {ele.icons} 
    </span>
    <span className={style.title}>
    {ele.title}
    </span>
    </Link>
    </li>
   
        )
      })
 }
  
    </ul>
    </nav>
    )
}
export default Nav