import React from 'react'
import './contact.css'

const Contact = () => {
    return (
        <div>
            <div className='contact-section'>
                <h1>Contact Us</h1>
                <p>If you have any questions or would like to get in touch, please use the form below.</p>
            </div>
            <div className="contact-form">
                <form action="">
                    <label htmlFor="">Name</label>
                    <input type="text" name="" id="" />
                    <label htmlFor="">Email</label>
                    <input type="text" name="" id="" />
                    <label htmlFor="">message</label>
                    <textarea name="" id=""></textarea>
                    <button>submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact