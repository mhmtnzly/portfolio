import "./contact.css";
import {FaRegUser,FaMailBulk,FaLinkedinIn,FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="top">
      <div className="first">
        <div className="itemContainer">
          <FaRegUser  className='icon'/>
            <span>+31 685330508</span>
          </div>
          <div className="itemContainer">
           <FaMailBulk   className='icon'/>
            <span>mhmtnzly@gmail.com</span>
          </div>
          </div>
          <div className="second">
            <div className="itemContainer">
           <a href="https://www.linkedin.com/in/mhmtnzly/" className='logo'><FaLinkedinIn   className='icon'/>mhmtnzly</a>
          </div>
          <div className="itemContainer">
           <a href="https://www.linkedin.com/in/mhmtnzly/" className='logo'><FaGithub   className='icon'/>mhmtnzly</a>
          </div></div>
      </div>
        <div className="left">
                
          <img src="assests/writing.png" alt="" />
        </div>
        <div className="right">
          <h2>Contact</h2>
          <form>
            <input type="text" placeholder="Email"/>
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
    </div>
  );
}