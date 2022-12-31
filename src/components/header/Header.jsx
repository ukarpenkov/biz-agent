import React from 'react'

const Header = () => {
    return <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
            BIZ AGENT
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-item nav-link" href="#">Комании</a>
                <a className="nav-item nav-link" href="#">Войти</a>
                <a className="nav-item nav-link" href="#">Регистрация</a>
            </div>
        </div>
    </nav>

}

export default Header