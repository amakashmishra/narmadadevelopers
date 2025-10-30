import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import img from "../images/pricing.jpg";
import "./contact.css";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs
      .sendForm(
        "service_s15837b",
        "template_pv4z6ol",
        formRef.current,
        "SatBaPZeCwbKDoFp6"
      )
      .then(
        (result) => {
          toast.success("Email sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error("Email sending error:", error);
          toast.error("❌ Failed to send message.");
        }
      ).finally(
        () => {
          setLoading(false)
        }
      )
  };

  return (
    <>
      <section className='contact mb'>
        <div className='back'>
          <img src={img} alt='Contact Us' />
          <div className='container back-text'>
            <span>Contact Us</span>
            <h1>Get Help & Friendly Support</h1>
          </div>
        </div>

        <div className='container form-map-wrap'>
          <form
            ref={formRef}
            onSubmit={sendEmail}
            method='post'
            encType='multipart/form-data'
            className='shadow'
          >
            <h4>Fill Up The Form</h4>

            <div className='input-row'>
              <input
                type='text'
                name='user_name'
                placeholder='Name'
                required
              />
              <input
                type='email'
                name='user_email'
                placeholder='Email'
                required
              />
            </div>
            <input
              type='text'
              name='user_mobile'
              placeholder='Mobile Number'
              required
            />
            <input
              type='text'
              name='subject'
              placeholder='Subject'
              required
            />
            <textarea
              name='message'
              placeholder='Message'
              rows='6'
              required
            ></textarea>
            <button type='submit' disabled={loading}>
              {loading ? (
                <>
                  <span className="spinner" /> Sending...
                </>
              ) : (
                "Submit Request"
              )}
            </button>
          </form>
          <div className="map" style={{ width: '100%', height: '450px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3774.239385082852!2d73.32574847520159!3d18.920795382252077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDU1JzE0LjkiTiA3M8KwMTknNDIuMCJF!5e0!3m2!1sen!2sin!4v1744426158913!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </section>
      <ToastContainer position='top-right' autoClose={3000} />
    </>
  );
};

export default Contact;
