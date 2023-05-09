import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi';
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
     link:"/portfolio/"
   },{
     id:4,
     icons:<RiServiceLine/>,
     title:"Projects",
     text:"Projects",
     link:"/services"
   },{
     id:5,
     icons:<BiMessageSquareDetail/>,
     title:"Contact",
     text:"Contact",
     link:"/contact"
   }
 ]
 export default list