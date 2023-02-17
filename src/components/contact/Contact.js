import React, { useState } from "react";
import "./contact.css";
import { GoLocation } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { BiWorld } from "react-icons/bi";
import { API } from "../../service/api";
import { ToastContainer, toast } from "react-toastify";

export default function Contact() {
  const initialMessage = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  }

  const [msg, setMsg] = useState(initialMessage);
  const handleChange = (e) => {
    setMsg({...msg, [e.target.name]: e.target.value})
    console.log(msg)
  }

  const sendMessage = async (e) => {
    e.preventDefault();
    const res = await API.sendMessage(msg);
    if(res.isSuccess){
      setMsg(initialMessage);
      toast("send");
    }
    else{
      toast("not send")
    }
  }
  return (
    <>
      <div className="contact_container">
        <div className="contact_left">
          <h2>Write us</h2>
          <form>
            <div className="names">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                autoComplete="off"
                onChange={(e) => handleChange(e)}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                autoComplete="off"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              autoComplete="off"
              onChange={(e) => handleChange(e)}
            />
            <textarea
              name="message"
              cols="60"
              rows="6"
              required
              autoComplete="off"
              placeholder="Message"
              onChange={(e) => handleChange(e)}
            ></textarea>
            <div className="con_btn">
              <button onClick={(e) => sendMessage(e)}>Send msg</button>
            </div>
          </form>
        </div>
        <div className="contact_right">
          <h3>Contact information</h3>
          <p>We're open for any suggestion or just to have a chat</p>
          <div className="contact_location">
            <span>
              <GoLocation />
            </span>
            <p>
              <b>Address</b>: 198 West 21th Street,Suite 721 New York NY 10016
            </p>
          </div>
          <div className="contact_phone">
            <span>
              <FaPhoneAlt />
            </span>
            <p>
              <b>Phone</b>: <a href="tel:+918135082381">+ 1235 2355 98</a>
            </p>
          </div>
          <div className="contact_mail">
            <span>
              <RiSendPlaneFill />
            </span>
            <p>
              <b>Email</b>: <a href="mailto:ranirava52@gmail.com"> mail Us</a>
            </p>
          </div>
          <div className="contact_website">
          <span>
              <BiWorld />
            </span>
            <p>
              <b>Email</b>: <a href="https://www.rahulray.ml" target="_blank">Rahul ray</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
