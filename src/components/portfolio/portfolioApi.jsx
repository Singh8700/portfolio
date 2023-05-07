import portpic01 from "../../Assets/port01.jpg";
import port00 from "../../Assets/port00.jpg";
import portpic03 from "../../Assets/port03.jpg";
import portpic04 from "../../Assets/port04.png";
import portpic05 from "../../Assets/port05.png";
import poster01 from "../../img/Poster01.jpg";
import poster02 from "../../img/Poster02.jpg";
import logo01 from "../../img/Logo01.jpg";
import logo02 from "../../img/Logo02.jpg";
import logo03 from "../../img/Logo03.jpg";

const Pic=[
  {
    key:1,
    imgs:port00,
    cl:"transX",
    cll:"transY",
    title:"Notes Management System",
    small:"Manage your notes securely and efficiently",
    link:'https://singh8700.github.io/userListProject/'
  },
    {
      key:2,
     imgs:portpic04,
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
      cll:"transY",
      small:"Lucky Number Finder Web",
      link:'https://singh8700.github.io/DOB/'
    }
    ];
const Posters=[
    {
      key:1,
     imgs:poster01,
      title:"Posters Projects",
      cl:"transY",
      cll:"transX",
      small:"Client Project",
      link:poster01
    }
    ,{
      key:2,
     imgs:poster02,
      title:"Poster Projects",
      cl:"transX",
      cll:"transY",
      small:"Client Project",
      link:poster02
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
    },{
      key:3,
     imgs:logo03,
     cl:"transY",
     cll:"transX",
      title:"Logo Projects",
      small:"Client Project",
      link:logo03
    }
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
   Posters,
   Logos,
   Design
 }