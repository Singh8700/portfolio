import{FaAward} from "react-icons/fa";
import{FiUsers} from "react-icons/fi" ;
import{VscFolderLibrary}from "react-icons/vsc";

const list =[{
    id:1,
    icon:FaAward,
    cl:"transX",
    text:"Experience",
    result:"1+ years",
  },{
   id:2,
    icon:FiUsers,
    text:"Client",
    cl:"transY",
    result:"30+ students" 
  },{
    id:3,
    icon:VscFolderLibrary,
    text:"Completed",
    cl:"transX",
    result:"25+ students"
  }
  ]
const Qualification=[
    {
    id:1,
    text:"10th Metric Examination",
    cl:"transY",
    result:"Passed in 2015 from CBSE Board"
  },{
    id:2,
    text:"12th intermediate Examination",
    cl:"transX",
    result:"Passed in 2017 from CBSE Board"
  },{
    id:3,
    text:"Diploma in Computer Applications  (DCA)",
    cl:"transY",
    result:"Completed in 2018 from RIIT INFOTECH PVT LTD"
  },{
    id:4,
    text:"B.A Programme",
    cl:"transX",
    result:"Completed in 2021 from SOL University OF Delhi"
  }
  ]
  export {
    list,
    Qualification
  }