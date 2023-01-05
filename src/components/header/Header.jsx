import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Header = () => {
    return <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <Link to='/' className="navbar-brand" href="#">
            BIZ AGENT
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link to='/' className="nav-item nav-link" href="#">Комании</Link>
                <Link to='login' className="nav-item nav-link" href="#">Войти</Link>
                <Link to='reg' className="nav-item nav-link" href="#">Регистрация</Link>
            </div>
        </div>
    </nav>

}

export default Header