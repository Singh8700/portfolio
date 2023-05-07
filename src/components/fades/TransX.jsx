import {useState,useEffect} from "react";

const TrnasX=()=>{
  const [items,setItmes]=useState([]);
  useEffect(() => {
    const elements = document.querySelectorAll('.transX');
    // Do something with the elements
    setItmes(elements);
  }, []);
 // console.log("Animation is runing",items);
  items.forEach((items)=>{
    window.addEventListener("scroll",()=>{
      let revealTop = items.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;
    let revealPoint = 101;
    if(revealTop < windowHeight - revealPoint){
      items.style.transform=`translateX(0%) scale(1)`;
      items.style.opacity=1;
      items.style.transition="0.5s";
    }else{
      items.style.transform=`translateX(-100%) scale(1)`;
      items.style.transition = "0.5s";
      items.style.opacity=0;
     // console.log("not work");
    }
    })
  })
}

export default TrnasX
