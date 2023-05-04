import React from 'react'
import './header.css'
import argentBankLogo from '../../Assets/argentBankLogo.png'
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
          <nav className="main-nav">
            <Link className="main-nav-logo" to="/Home">
              <img
                className="main-nav-logo-image"
                src={argentBankLogo}
                alt="Argent Bank Logo"
              />
              <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
              <Link className="main-nav-item" to="/Sign-in">
                <i className="fa fa-user-circle"></i> Sign In
              </Link>
            </div>
          </nav>
      </header>
    )
}
  
export default Header