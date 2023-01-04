import React from 'react'
import './style.css'




const CompanyCard = ({ company_id, name, address, phone, ceo }) => {

    return <ul className="list-group">
        <li className="list-group-item"><h6>{name}</h6></li>
        <li className="list-group-item"> Адрес: {address}</li>
        <li className="list-group-item">Телефон: {phone}</li>
        <li className="list-group-item">Генеральный директор: {ceo}</li>
    </ul>
}

export default CompanyCard