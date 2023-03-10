import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'


const Header = ({ state }) => {

    let userNameAtHeader = <Link to='/' className="nav-item nav-link">Привет, {state}</Link>
    let loginLink = <Link to='login' className="nav-item nav-link" href="#">Войти</Link>
    let regLink = <Link to='reg' className="nav-item nav-link" href="#">Регистрация</Link>

    return <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <Link to='/companies' className="navbar-brand" href="#">
            BIZ AGENT
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link to='/companies' className="nav-item nav-link" href="#">Компании</Link>
                {state[0] ? null : loginLink}
                {state[0] ? null : regLink}
                {state[0] ? userNameAtHeader : <Link to='/' className="nav-item nav-link">Вы не авторизованы</Link>}
            </div>
        </div>
    </nav >

}

export default Header