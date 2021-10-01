import { useState } from "react";
import { 
  Contacts, 
  Intro, 
  Portfolio, 
  Testimonials, 
  Topbar, 
  Works,
  Menu
  } from "./components/index.js"
import './app.scss';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      {<Menu
        items={[
          { name: "home", link: "intro"},
          { name: "portfolio", link: "portfolio"},
          { name: "works", link: "works"},
          { name: "testimonials", link: "testimonials"},
          { name: "contacts", link: "contacts"},
        ]}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      /> }
      <div className="app__sections">
        <Intro />
        <Portfolio />
        <Works />  
        <Testimonials />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
