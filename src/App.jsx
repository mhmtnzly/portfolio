import Topbar from "./components/topbar/topbar";
import Intro from "./components/intro/intro"
import Portfolio from "./components/portfolio/portfolio"
import Work from "./components/works/works"
import Testimonials from "./components/testimonials/testimonials"
import Contact from "./components/contact/contact"
import "./app.css"
import { useState } from "react";
import Menu from "./components/menu/menu";
import Chart from "./components/chart/chart"


function App() {
  const[menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Chart/>
        <Portfolio/>
        <Work/> 
        <Testimonials/> 
        <Contact/>
      </div>
    </div>
  );
}

export default App;
