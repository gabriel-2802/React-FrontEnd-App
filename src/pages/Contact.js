import React from 'react'
import Napoleon from "../assets/napoleon.jpg"
import "../styles/Contact.css"

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide'
            style={{
                backgroundImage: `url(${Napoleon})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
  }}> </div>
        <div className='rightSide'>
            <h1> Contact Gabriel</h1>
            <form id="contact-form" method="POST">
                <label htmlFor='name'> Full Name </label>
                <input name="name" placeholder='enter full name..' type='text'/>

                <label htmlFor='email'> Email Adress </label>
                <input name="email" placeholder='enter email..' type='email'/>

                <label htmlFor='message'> Your Message </label>
                <textarea name="message" rows="6" placeholder='enter message..'  type='text'/>
                <button type="submit">Send Message</button>



            </form>

        </div>
      
    </div>
  )
}

export default Contact
