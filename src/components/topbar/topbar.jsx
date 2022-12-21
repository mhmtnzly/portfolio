import './topbar.css'
// import {Person,Email} from '@material-ui/icons'
import {FaRegUser,FaMailBulk,FaLinkedinIn,FaGithub } from "react-icons/fa";


export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar '+(menuOpen&&'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>mhmt.</a>
          <div className="itemContainer">
            <FaRegUser  className='icon'/>
            <span>+31 685330508</span>
          </div>
          <div className="itemContainer">
           <FaMailBulk   className='icon'/>
            <span>mhmtnzly@gmail.com</span>
          </div>
          <div className="itemContainer">
           <a href="https://www.linkedin.com/in/mhmtnzly/" className='logo'><FaLinkedinIn   className='icon'/></a>
          </div>
          <div className="itemContainer">
           <a href="https://www.linkedin.com/in/mhmtnzly/" className='logo'><FaGithub   className='icon'/></a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}
