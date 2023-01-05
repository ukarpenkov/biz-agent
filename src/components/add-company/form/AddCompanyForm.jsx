import './style.css'


const AddCompanyForm = () => {
    return <form>
        <div className="form-group">
            <label htmlFor="formGroupExampleInput">Название компании</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Название компании" />
        </div>
        <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Адрес</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Адрес" />
        </div>
        <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Телефон</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Телефон" />
        </div>
        <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Генеральный директор</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Генеральный директор" />
        </div>
        <button type="button" className="btn btn-danger add-company-btn">Добавить</button>
    </form>
}


export default AddCompanyForm