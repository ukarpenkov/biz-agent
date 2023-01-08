import React from 'react'
import CompanyList from '../CompanyList/CompanyList'
import AddCompanyButton from '../../add-company/buttons/AddCompanyButton'
import './style.css'



const Main = ({ state }) => {
    console.log('ьфшт', state)
    return <div className='main-page'>
        <CompanyList />
        <AddCompanyButton {...state} />
    </div>
}

export default Main