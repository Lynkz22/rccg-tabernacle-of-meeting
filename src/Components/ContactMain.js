import "../Styles/Contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactMain = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_sj61qzr", "template_zgk47yb", form.current, {
        publicKey: "50fKP1VA-C4KuKrrH",
      })
      .then(
        () => {
          alert("Message sent successfully");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message, please try again", error);
        }
      );
  };

  return (
    <>
      <section className="sectionContactForm">
        <div className="divContactForm">
          <form ref={form} onSubmit={sendEmail}>
            <input type="hidden" name="_subject" value="New Email!" />
            <h2 className="divContactFormHeading">Send Us A Message</h2>
            <div className="inputBox">
              <input
                type="text"
                name="user_name"
                required
                className="font"
                placeholder="Full Name"
              />
            </div>
            <div class="inputBox">
              <input
                type="email"
                name="user_email"
                required
                placeholder="Email Address"
              />
            </div>
            <div class="inputBox">
              <input
                type="subject"
                name="subject"
                required
                placeholder="Your Subject"
              />
            </div>
            <div className="inputBox">
              <textarea
                name="message"
                required
                placeholder="Type Your Message"
              ></textarea>
            </div>
            <button type="submit" className="sendit">
              <p className="senditnow">SEND </p>
              {/* <input type="submit" value="Send" className="senditnow" /> */}
            </button>
          </form>
          <div className="message">
            <p className="success" id="successid">
              Your Message Successfully Sent
            </p>
          </div>
        </div>
        <div className="divMaps">
          <iframe
            className="maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63423.556107214754!2d3.2592395042613926!3d6.525187575755753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8fc97ee736a9%3A0x882ef3bdd48e7587!2sJakande%20Estate%2C%20Isolo!5e0!3m2!1sen!2sng!4v1750744985924!5m2!1sen!2sng"
            // width="600"
            // height="450"
            style={{ border: "0" }}
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default ContactMain;
