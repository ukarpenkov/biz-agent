import { Link } from "react-router-dom"
import CommentBlock from "./CommentBlock"
import { useState } from "react"


const CurrentCompany = (props) => {

    const [currentName] = useState(props.name)
    const [currentAddress] = useState(props.address)
    const [currentPhone] = useState(props.phone)
    const [currentCeo] = useState(props.ceo)

    const [isCompanyCommnetsVisible, setIsCompanyCommnetsVisible] = useState(false)
    const [isAddressCommnetsVisible, setIsAddressCommnetsVisible] = useState(false)
    const [isPhoneCommnetsVisible, setIsPhoneCommnetsVisible] = useState(false)
    const [isCeoCommnetsVisible, setIsCeoCommnetsVisible] = useState(false)
    const [isCommonCommnetsVisible, setIsCommonCommnetsVisible] = useState(false)

    const toggleCompanyComments = () => {
        !isCompanyCommnetsVisible ? setIsCompanyCommnetsVisible(true) : setIsCompanyCommnetsVisible(false)
    }
    const toggleAddressComments = () => {
        !isAddressCommnetsVisible ? setIsAddressCommnetsVisible(true) : setIsAddressCommnetsVisible(false)
    }
    const togglePhoneComments = () => {
        !isPhoneCommnetsVisible ? setIsPhoneCommnetsVisible(true) : setIsPhoneCommnetsVisible(false)
    }
    const toggleCeoComments = () => {
        !isCeoCommnetsVisible ? setIsCeoCommnetsVisible(true) : setIsCeoCommnetsVisible(false)
    }
    const toggleCommonComments = () => {
        !isCommonCommnetsVisible ? setIsCommonCommnetsVisible(true) : setIsCommonCommnetsVisible(false)
    }



    return <div className="card text-center current-company_card">
        <Link to='/companies' className="btn btn-dark">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"></path>
            </svg>
            &nbsp; К СПИСКУ КОМПАНИЙ
        </Link>
        <div className="card-header">
            Информация о компании
        </div>
        <div className="card-body">
            <h5 className="card-title">{currentName}</h5>
            <button
                to='company-comments'
                className="btn btn-secondary"
                onClick={toggleCompanyComments}
            >Показать/скрыть комментарии о компании ⮃</button>
            {isCompanyCommnetsVisible ? <CommentBlock props={props} categoryComments='companyNameCommnets' /> : null}
            <p className="card-text">{currentAddress}</p>
            <button
                to='company-comments'
                className="btn btn-secondary"
                onClick={toggleAddressComments}
            >Показать/скрыть комментарии об адресе ⮃</button>
            {isAddressCommnetsVisible ? <CommentBlock props={props} categoryComments='companyAddressCommnets' /> : null}
            <p className="card-text">{currentPhone}</p>
            <button
                to='company-comments'
                className="btn btn-secondary"
                onClick={togglePhoneComments}
            >Показать/скрыть комментарии о телефоне ⮃</button>
            {isPhoneCommnetsVisible ? <CommentBlock props={props} categoryComments='companyPhoneCommnets' /> : null}
            <p className="card-text">{currentCeo}</p>
            <button
                to='company-comments'
                className="btn btn-secondary"
                onClick={toggleCeoComments}
            >Показать/скрыть комментарии о директоре ⮃</button>
            {isCeoCommnetsVisible ? <CommentBlock props={props} categoryComments='companyCeoCommnets' /> : null}

            <div>--------------------------------------------------------------------------------------------------------</div>

            <button
                to='company-comments'
                className="btn btn-info"
                onClick={toggleCommonComments}
            >Показать/скрыть отзывы о компании ⮃</button>
            {isCommonCommnetsVisible ? <CommentBlock props={props} categoryComments='companyCommonCommnets' /> : null}
        </div>
    </div>
}


export default CurrentCompany