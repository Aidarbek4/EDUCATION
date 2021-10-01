import React from 'react'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__inner">
          <div className="navbar__left">
            <a href="/" className="navbar__logo">
              Blogger
            </a>
          </div>
          <div className="navbar__center">
            <ul className="navbar__menu">
              <li className="navbar__menu-item">Home</li>
              <li className="navbar__menu-item">About</li>
              <li className="navbar__menu-item">Contact</li>
              <li className="navbar__menu-item">Write</li>
              <li className="navbar__menu-item">Logout</li>
            </ul>
          </div>
          <div className="navbar__right">
            <img
              className="navbar__img"
              src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </div>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
