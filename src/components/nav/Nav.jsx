import {useState} from 'react';

import style from './Nav.module.css';

import { useLocation, Link} from "react-router-dom";
//import { useLocation } from 'react-router-dom';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
//import list from "./NavList.jsx";
const Nav=()=>{
  const location = useLocation();
  const path = location.pathname;
 const [isActive,setIsActive]=useState(path);
const list = [
   {
     id:3,
     icons:<BiBook/>,
     title:"Experience",
     text:"Experience",
     link:"/experience"
   },{
     id:2,
     icons:<AiOutlineUser/>,
     title:"About",
     text:"About",
     link:"/about"
   },{
     id:1,
     icons:<AiOutlineHome/>,
     title:"Home",
     link:"/"
   },{
     id:4,
     icons:<RiServiceLine/>,
     title:"Portfolio",
     text:"Portfolio",
     link:"/services"
   },{
     id:5,
     icons:<BiMessageSquareDetail/>,
     title:"Contact",
     text:"Contact",
     link:"/contact"
   }
 ]
  return(
    <nav> 
    <ul className={`scales ${style.navigation}`}>
    {
    list.map((ele)=>{
      return(
     
    <li onClick={()=>setIsActive(ele.link)} className={isActive === ele.link ? style.active : ' '}>
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