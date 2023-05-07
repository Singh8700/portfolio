import {useState,useEffect} from "react";

const Onload=()=>{
  const [items,setItmes]=useState([]);
  useEffect(() => {
    const elements = document.querySelectorAll('.load');
    // Do something with the elements
    setItmes(elements);
  }, []);
 // console.log("Animation is runing",items);
  window.addEventListener("load",()=>{
    items.forEach((item)=>{
      item.style.transform=`translateX(0%)`;
      item.style.opacity=1;
    })
    
  })
}

export default Onload
