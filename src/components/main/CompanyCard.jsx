import React from 'react'




const CompanyCard = ({ company_id, name, address, phone, ceo }) => {

    return <ul>
        <li>{name}</li>
        <li>Адрес: {address}</li>
        <li>Телефон: {phone}</li>
        <li>Генеральный директор: {ceo}</li>
    </ul>
}

export default CompanyCard