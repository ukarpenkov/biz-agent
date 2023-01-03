import React, { useEffect, useState } from 'react'
import CompanyCard from './CompanyCard'



const CompanyList = () => {
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetch("http://localhost", {
            method: 'POST',
            header: {
                'Content-Type': 'text/html; charset=utf-8'
            },
            body: JSON.stringify({ action: 1 })
        })
            .then(response => response.text())
            .then(response => {
                setInfo(JSON.parse(response))
            })
    }, [])

    return <div>
        {info.map(item => <CompanyCard {...item} key={item.company_id} />)}
    </div>
}

export default CompanyList