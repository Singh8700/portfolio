import portpic01 from "../../Assets/port01.webp";
import imgsearch from "../../Assets/imgsearch.webp";
import cardEffect from "../../Assets/cardEffect.webp";
import port00 from "../../Assets/port00.webp";
import redux from "../../Assets/redux.webp";
import portpic03 from "../../Assets/port03.webp";
import portpic04 from "../../Assets/port04.webp";
import portpic05 from "../../Assets/port05.webp";
import poster01 from "../../img/Poster01.webp";
import poster02 from "../../img/Poster02.webp";
import logo01 from "../../img/Logo01.webp";
import logo02 from "../../img/Logo02.webp";
//import logo03 from "../../img/Logo03.webp";
import New from "../../assets/new.png";

const Pic=[
  {
    id:5,
    imgs:imgsearch,
    tit:New,
    news:true,
    cl:"transX",
    cll:"transY",
    title:"Image Search App",
    small:"Now finding photos is even easier with this app (Try Now)",
    link:'https://singh8700.github.io/imgsearch/'
  },
  {
    id:4,
    imgs:redux,
    tit:New,
    news:false,
    cl:"transX",
    cll:"transY",
    title:"Redux Tools Simple used",
    small:"create a simple example for reduxjs/tool in ReactJs",
    link:'https://singh8700.github.io/redux/'
  },
  {
    key:1,
    imgs:port00,
    tit:New,
    news:false,
    cl:"transX",
    cll:"transY",
    title:"Notes Management System",
    small:"Manage your notes securely and efficiently",
    link:'https://singh8700.github.io/userListProject/'
  },
  {
    key:6,
    imgs:cardEffect,
    tit:New,
    news:false,
    cl:"transX",
    cll:"transY",
    title:"Card Effect",
    small:"Amazing Card Effect on mouse moves every angle",
    link:'https://singh8700.github.io/CardsEffects-/'
    
  },
    {
      key:2,
     imgs:portpic04,
     tit:New,
    news:false,
     cl:"transY",
     cll:"transX",
      title:"Education Institute Demo",
      small:"it's a demo for Education institute site only teaching purpose",
      link:'https://singh8700.github.io/demo1/'
    },{
      key:3,
     imgs:portpic05,
      title:"DOB",
      cl:"transX",
      tit:New,
       news:false,
      cll:"transY",
      small:"Lucky Number Finder Web",
      link:'https://singh8700.github.io/DOB/'
    }
    ];
const Poster=[
    {
      key:1,
     imgs:poster01,
      title:"Posters Projects",
      cl:"transY",
      cll:"transX",
      small:"Client Project",
      link:"https://drive.google.com/file/d/1ANWjpI-hjgAr359mQsFs4PGGU4gp4I_2/view?usp=drive_link"
    }
    ,{
      key:2,
     imgs:poster02,
      title:"Poster Projects",
      cl:"transX",
      cll:"transY",
      small:"Client Project",
      link:"https://drive.google.com/file/d/1q6ZgZicakWIhPmiE_JrYaXY3h3Q76z_b/view?usp=drive_link"
    },{
      key:3,
     imgs:poster02,
      title:"Poster Projects",
      cl:"transX",
      cll:"transY",
      small:"Client Project",
    link:"https://drive.google.com/file/d/1bJfgrzG33_BBhBXAGqLkekAJhFpQSCb-/view?usp=drive_link"
    }
    ];
 const Logos=[
   {
      key:1,
     imgs:logo01,
      title:"Logos Projects",
      cl:"transY",
      cll:"transX",
      small:"Client Project",
      link:logo01
    },{
      key:2,
     imgs:logo02,
     cl:"transX",
     cll:"transY",
      title:"Logo Projects",
      small:"Client Project",
      link:logo02
    }
    /*,{
      key:3,
     imgs:logo03,
     cl:"transY",
     cll:"transX",
      title:"Logo Projects",
      small:"Client Project",
      link:logo03
    }*/
  ];
  const Design=[
    {
    key:1,
     imgs:portpic01,
      title:"Portfolio Home Page",
      small:"my First Portfolio Home First",
      cl:"transX",
      cll:"transY",
      link:portpic01
    },{
      key:2,
      imgs:portpic03,
      title:"Footer Section Idea",
      cl:"transX",
      cll:"transY",
      small:"it's a only for design to create a footet section on my web",
      link:portpic03
     }
    ];
 export {
   Pic,
   Poster,
   Logos,
   Design
 }