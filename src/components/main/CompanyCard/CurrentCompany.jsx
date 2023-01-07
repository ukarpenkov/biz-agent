import { Link } from "react-router-dom"


const CurrentCompany = ({ company }) => {
    let activeCompany = company[company.length - 1]
    let { name, address, phone, ceo } = activeCompany

    return <div className="card text-center current-company_card">
        <Link to='/companies' className="btn btn-dark">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"></path>
            </svg>
            &nbsp; К СПИСКУ КОМПАНИЙ
        </Link>
        <div className="card-header">
            Информация о компании
        </div>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <button className="btn btn-primary">Оставить комментарий о компании</button>
            <p className="card-text">{address}</p>
            <a className="btn btn-secondary">Прокомментировать</a>
            <p className="card-text">{phone}</p>
            <a className="btn btn-secondary">Прокомментировать</a>
            <p className="card-text">{ceo}</p>
            <a className="btn btn-secondary">Прокомментировать</a>

        </div>
    </div>
}


export default CurrentCompany