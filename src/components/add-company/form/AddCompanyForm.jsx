import { useState } from 'react'
import './style.css'


const AddCompanyForm = () => {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [ceo, setCeo] = useState('')


    const handleSubmit = () => {
        if (name.length === 0) {
            alert('Введите название')
        }
        else if (address.length === 0) {
            alert('Введите адрес')
        }
        else if (phone.length === 0) {
            alert('Введите телефон')
        }
        else if (ceo.length === 0) {
            alert('Введите имя генерального директора')
        }
        else {
            const url = "http://localhost/addcompany.php"
            let fData = new FormData()

            fData.append('name', name)
            fData.append('address', address)
            fData.append('phone', phone)
            fData.append('ceo', ceo)

            fetch(url, {
                method: 'POST',
                header: {
                    'Content-Type': 'text/html; charset=utf-8'
                },
                body: fData
            })
                .then(response => console.log(response))
                .catch(error => alert(error))

            alert('Компания добавлена!')
        }

    }

    return <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="name">Название компании</label>
            <input type="text" className="form-control" name='name' id="name" placeholder="Название компании" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
            <label htmlFor="address">Адрес</label>
            <input type="text" className="form-control" name='address' id="address" placeholder="Адрес" onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div className="form-group">
            <label htmlFor="phone">Телефон</label>
            <input type="text" className="form-control" name='phone' id="phone" placeholder="Телефон" onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="form-group">
            <label htmlFor="ceo">Генеральный директор</label>
            <input type="text" className="form-control" name='ceo' id="ceo" placeholder="Генеральный директор" onChange={(e) => setCeo(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-danger add-company-btn">Добавить</button>
    </form>
}


export default AddCompanyForm