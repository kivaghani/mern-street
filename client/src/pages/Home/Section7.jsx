import React from 'react'
// import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import { useRef } from 'react'
import emailjs from 'emailjs-com';
import Header from '../../components/Header'

const Section7 = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_50su3ue', 'template_bj56nfc', form.current, 'wwjAQTxRZh1W8FKQ7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

 return (
  <>
  <Header/>
    <section id='contact'>
      {/* <h5>Get In Touch</h5>   */}
      <h6>If you want to put details of your street food on this website then submit your food details then</h6>
      <h2 className='text-center text-white font-bold'>Contact Me</h2>
      
      <div className="container contact__container">
        <div className="contact__options">
        <article className='contact__option'>
          <AiOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>heystreet121@gmail.com</h5>
          <a href="heystreet121@gmail.com" target='blank'> Send a message</a>
        </article>
        <article className='contact__option'>
          <AiOutlineWhatsApp className='contact__option-icon' />
          <h4>WhatsApp</h4>
          <h5>+9727571976</h5>
          <a href="https://api.whatsapp.com/send?phone+9727571976" target='blank'> Send a message</a>
        </article>
        <article className='contact__option'>
          <AiOutlineInstagram className='contact__option-icon'/>
          <h4>Instagram</h4>
          <h5>kartik_vaghani_027</h5>
          <a href="https://www.instagram.com/kartik_vaghani_027/?hl=en" target='blank'> Send a message</a>
        </article>

        </div>
        <div className="ctar">
        <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='your food stall name'  required/>
        <input type="email" name='email' placeholder='your email'  required/>
        <div className="msg">
        <textarea name="message" placeholder='      your message'  required/>
        </div>
        <button type='submit' className='bt'> Send a Message</button>
      </form>
      </div>
      </div>
     
    </section>
    </>
 )
}


export default Section7