import React, { useRef } from 'react';
import Logo from '../images/Color.png';
import { NavLink } from "react-router-dom";

function Navbar() {
    const navRef = useRef();
    const handleClick = () => {
        navRef.current.classList.remove('show');
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark color-dark-hover">
            <div className='container'>
                <NavLink className="navbar-brand" to="/">
                    <img src={Logo} width="64" alt="Logo" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbar" ref={navRef}>
                    <ul className="navbar-nav text-end">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" onClick={handleClick}>HOME</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/portfolio" onClick={handleClick}>PORTFOLIO</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/resume" onClick={handleClick}>RESUME</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='mailto:contact@anhnbien.com' >CONTACT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;