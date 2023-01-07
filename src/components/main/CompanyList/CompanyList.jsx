import React, { useEffect, useState } from 'react'
import CompanyCard from '../CompanyCard/CompanyCard'
import './style.css'

const CompanyList = () => {
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetch("http://localhost/index.php", {
            method: 'GET',
            header: {
                'Content-Type': 'text/html; charset=utf-8'
            },
        })
            .then(response => response.text())
            .then(response => {
                setInfo(JSON.parse(response))
            })
    }, [])

    return <div className='company-list'>
        {info.map(item => <CompanyCard {...item} key={item.company_id} />)}

    </div>
}

export default CompanyList