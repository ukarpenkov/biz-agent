import { Link } from "react-router-dom"
import CommentBlock from "./CommentBlock"
import { useState } from "react"


const CurrentCompany = (props) => {

    const [currentName] = useState(props.name)
    const [currentAddress] = useState(props.address)
    const [currentPhone] = useState(props.phone)
    const [currentCeo] = useState(props.ceo)

    const [isCompanyCommnetsVisible, setIsCompanyCommnetsVisible] = useState(false)
    // const [isAddressCommnetsVisible, setIsAddressCommnetsVisible] = useState(false)
    // const [isPhoneCommnetsVisible, setIsPhoneCommnetsVisible] = useState(false)
    // const [isCeoCommnetsVisible, setIsCeoCommnetsVisible] = useState(false)

    const toggleCompanyComments = () => {
        !isCompanyCommnetsVisible ? setIsCompanyCommnetsVisible(true) : setIsCompanyCommnetsVisible(false)
    }
    // const toggleAddressComments = () => {
    //     !isAddressCommnetsVisible ? setIsAddressCommnetsVisible(true) : setIsAddressCommnetsVisible(false)
    // }
    // const togglePhoneComments = () => {
    //     !isPhoneCommnetsVisible ? setIsPhoneCommnetsVisible(true) : setIsPhoneCommnetsVisible(false)
    // }
    // const toggleCeoComments = () => {
    //     !isCeoCommnetsVisible ? setIsCeoCommnetsVisible(true) : setIsCeoCommnetsVisible(false)
    // }



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
            {isCompanyCommnetsVisible ? <CommentBlock props={props} categoryComments='aaa' /> : null}
            <p className="card-text">{currentAddress}</p>
            <p className="card-text">{currentPhone}</p>
            <p className="card-text">{currentCeo}</p>


        </div>
    </div>
}


export default CurrentCompany