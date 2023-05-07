import {useState,useEffect} from "react";

const Scale=()=>{
  const [items,setItmes]=useState([]);
  useEffect(() => {
    const elements = document.querySelectorAll('.scale');
    // Do something with the elements
    setItmes(elements);
  }, []);
  items.forEach((items)=>{
    window.addEventListener("scroll",()=>{
      let revealTop = items.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;
    let revealPoint = 101;
    if(revealTop < windowHeight - revealPoint){
      items.style.transform=`scale(1)`;
      items.style.opacity=1;
      items.style.transition="0.5s";
    }else{
      items.style.transform=`scale(0)`;
      items.style.transition = "0.5s";
      items.style.opacity=0;
    //  console.log("not work");
    }
    })
  })
}
export default Scale