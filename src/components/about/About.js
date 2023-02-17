import React from "react";
import team from "../../assets/team.jpg";
import Nav from "../nav/Nav";
import './about.css'

export default function About({isAuthenticated}) {
  return (
    <>
    <Nav isAuthenticated={isAuthenticated}/>
    <div className="about_us">
        <h2>About us</h2>
        <hr/>
      <div className="about_us_img">
        <img src={team} alt="" />
        <span>Best mates, Rahul and Bimal✌️</span>
      </div>
      <div className="about_us_details">
        <p>As self-taught web and mobile app developers, we have a unique perspective on the world of software development. We've learned everything we know through hard work, dedication, and a passion for creating high-quality applications that push the boundaries of what's possible.</p>
        <p>Our experience spans every aspect of the development process, from ideation to production. We specialize in taking raw ideas and turning them into fully-realized software applications that are both efficient and user-friendly.</p>
        <p>At the core of our development philosophy is a focus on the user experience. We understand that software applications are ultimately designed for people, and we take great care to ensure that every feature we create is intuitive, user-friendly, and highly functional.</p>
        <p>To achieve this, we use a combination of cutting-edge technologies, innovative design strategies, and rigorous testing protocols. We're constantly exploring new ways to improve our development process and push the boundaries of what's possible with web and mobile applications.</p>
        <p>Our Full Stack development expertise allows us to create comprehensive, end-to-end solutions that are tailored to the unique needs of our clients. Whether you're looking to develop a complex e-commerce platform, a sleek mobile app, or anything in between, we have the skills and experience necessary to bring your vision to life.</p>
        <p>Above all, we're passionate about using technology to create innovative solutions that make people's lives better. We're committed to delivering the highest-quality software applications possible, and we're always looking for new and exciting challenges to tackle</p>
        <p className="last_line" >Thanks for being part of our community.</p>
        <p className="last_line" >Cheers - Rahul and Bimal</p>
      </div>
    </div>
    </>
  );
}
