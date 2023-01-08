import { useContext, useEffect, useState } from "react"
import AddCompanyForm from "../form/AddCompanyForm"


const AddCompanyButton = (state) => {

    const [visible, setVisible] = useState(false)
    const [disable, setDisable] = useState(false)

    console.log(state)

    useEffect(() => {
        if (Object.keys(state).length !== 0) {
            setDisable(true)
        }
    }, [])


    function handleVisibleForm() {
        !visible ? setVisible(true) : setVisible(false)
        setTimeout(function () {
            window.scrollTo(0, document.body.scrollHeight);
        }, 500);
    }


    return <>
        <button disabled={!disable} className="btn btn-warning" onClick={handleVisibleForm}>Новая компания</button>
        {visible ? <AddCompanyForm /> : null}
    </>
}


export default AddCompanyButton