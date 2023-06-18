import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { contacts, forms} from "./ContactsApi";
import style from "./Contact.module.css";
import Animation from "../../Animation";
const Contact=(props)=>{
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v22pzoc', 'template_2b73e9a', form.current, 'HT2YqEHnPdCgJdEwM')
      .then((result) => {
          //console.log(result.text);
      }, (error) => {
         // console.log(error.text);
      });
      props.showAlert("Successfully Send Your Qurey :) ");
      e.target.reset();
      
  };
  
  
  return(
    <section id="contact" className="transformX">
      <Animation/>
      <h4 className={`scales h5`}>Get In Touch</h4>
      <h2 className={`scales h2`}>Contact Me</h2>
      
      <div className={`scales ${style.container}`}>
        <div className={style.options}>
    {contacts.map((element)=>{
      return(
      <div key={element.id} className={element.cl}>
       <article className={style.option} key={element.id}>
         <span className={style.icon}>
            
         </span>
         <h3>{element.title}</h3>
         <h5>{element.add}</h5>
         <a href={element.link} traget="__blank" className="btn btn-primary">Send Me</a>
       </article>
     </div>
      )
    })
    }
        </div>
        <div className={style.contactRight}>
        <form ref={form} onSubmit={sendEmail} className="transY">
        <h2>Query Area</h2>
        {forms.map((element)=>{
          return(
           <input key={element.id} type={element.text} placeholder={element.ph} name={element.name} required/>
          )
        })
        }
        <textarea name="message" rows="7" placeholder="Your Query" required>
        </textarea>
        <button type="submit" className="btn btn-primary">
        Send Massage
       </button>
        </form>
        </div>
      </div>
    </section>
    )
}
export default Contact