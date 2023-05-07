//import {useState} from "react"
import style from "./Alert.module.css"
const Alert=(props)=>{
  
  return(
    <>
    {props.msg && <div
      className={style.success}>
      <h3>{props.msg}</h3>
      <div
      className={style.bar}>
      </div>
      </div>}
    </>
    )
}
export default
Alert