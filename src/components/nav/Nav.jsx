import {useState} from 'react';

import style from './Nav.module.css';

import {Link} from "react-router-dom";
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
//import list from "./NavList.jsx";
const Nav=()=>{
 const [isActive,setIsActive]=useState('/portfolio');
const list = [
   {
     id:3,
     icons:<BiBook/>,
     title:"Experience",
     text:"Experience",
     link:"/portfolio/experience"
   },{
     id:2,
     icons:<AiOutlineUser/>,
     title:"About",
     text:"About",
     link:"/portfolio/about"
   },{
     id:1,
     icons:<AiOutlineHome/>,
     title:"Home",
     link:"/portfolio"
   },{
     id:4,
     icons:<RiServiceLine/>,
     title:"Portfolio",
     text:"Portfolio",
     link:"/portfolio/services"
   },{
     id:5,
     icons:<BiMessageSquareDetail/>,
     title:"Contact",
     text:"Contact",
     link:"/portfolio/contact"
   }
 ]
  return(
    <nav> 
    <ul className={`scales ${style.navigation}`}>
    {
    list.map((ele)=>{
      return(
    <li onClick={()=>setIsActive(ele.link)} className={isActive === ele.link ? style.active : ' '}>
     <Link to={ele.link} relative="path">
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