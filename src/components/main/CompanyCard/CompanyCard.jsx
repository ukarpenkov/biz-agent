import React from 'react'
import './style.css'
import { Link, Route, Router, Routes, useRoutes } from 'react-router-dom'
import CurrentCompany from './CurrentCompany'






const CompanyCard = ({ company_id, name, address, phone, ceo }) => {



    return <ul className="list-group" onClick={() => console.log('fff')}>
        <Link to={company_id} className='company-card__item' >
            <li className="list-group-item"><h6>{name}</h6></li>
            <li className="list-group-item"> Адрес: {address}</li>
            <li className="list-group-item">Телефон: {phone}</li>
            <li className="list-group-item">Генеральный директор: {ceo}</li>
        </Link>

        <Routes>
            <Route exact path={company_id} element={<CurrentCompany />} />
        </Routes>
    </ul>

}

export default CompanyCard