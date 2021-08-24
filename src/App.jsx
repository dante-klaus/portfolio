import React, { useState } from 'react';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Topbar from './components/topbar/Topbar';
import Contact from './components/contact/Contact';
import Menu from './components/menu/Menu';
import "./app.scss";

function App() {
  const [openMenu,setOpenMenu] = useState(false) // menu starts as false, closed
  return (
    <div className="app">
      <Topbar openMenu={openMenu} setOpenMenu={setOpenMenu}/> 
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
