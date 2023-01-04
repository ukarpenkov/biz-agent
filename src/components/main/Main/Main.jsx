import React from 'react'
import CompanyList from '../CompanyList/CompanyList'
import AddCompanyButton from '../../add-company/buttons/AddCompanyButton'
import './style.css'



const Main = () => {

    return <div className='main-page'>
        <CompanyList />
        <AddCompanyButton />
    </div>
}

export default Main