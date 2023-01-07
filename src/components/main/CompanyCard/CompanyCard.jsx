import React, { useContext } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { CompanyContext } from '../company-context'






const CompanyCard = ({ company_id, name, address, phone, ceo }) => {
    const { send } = useContext(CompanyContext)

    return <ul className="list-group" onClick={() => send({
        type: 'TRANSITION',
        payload: { company_id, name, address, phone, ceo }
    })}>
        <Link to={company_id} className='company-card__item' >
            <li className="list-group-item"><h6>{name}</h6></li>
            <li className="list-group-item"> Адрес: {address}</li>
            <li className="list-group-item">Телефон: {phone}</li>
            <li className="list-group-item">Генеральный директор: {ceo}</li>
        </Link>

    </ul>

}

export default CompanyCard