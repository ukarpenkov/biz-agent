import { useState } from "react"
import AddCompanyForm from "../form/AddCompanyForm"

const AddCompanyButton = () => {
    const [visible, setVisible] = useState(false)
    function handleVisibleForm() {
        !visible ? setVisible(true) : setVisible(false)
    }


    return <>
        <button className="btn btn-warning" onClick={handleVisibleForm}>Новая компания</button>
        {visible ? <AddCompanyForm /> : null}
    </>
}


export default AddCompanyButton