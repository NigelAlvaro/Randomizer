import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  useEffect(() => {
    // Remove empty useEffect since showButton is removed
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Wabalubadubdub <i className="fab fa-typo3" />
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/yunsheng" className="nav-links">
                Yunsheng
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tommy" className="nav-links">
                Tommy
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/nigel" className="nav-links">
                Nigel
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
