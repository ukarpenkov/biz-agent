import { useState } from 'react'
import './style.css'

const Registration = () => {
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [pass, setPass] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        if (name.length === 0) {
            alert('Введите имя')
        }
        else if (mail.length === 0) {
            alert('Введите email')
        }
        else if (pass.length === 0) {
            alert('Введите пароль')
        }
        else {
            const url = "http://localhost/registration.php"

            let fData = new FormData()
            fData.append('name', name)
            fData.append('mail', mail)
            fData.append('pass', pass)


            fetch(url, {
                method: 'POST',
                header: {
                    'Content-Type': 'text/html; charset=utf-8'
                },
                body: fData
            })
                .then(response => console.log(response))
                .catch(error => alert(error));

            setName('')
            setMail('')
            setPass('')
            alert('Регистрация выполнена!')


        }


    }


    return <div className='login-page'>
        <form onSubmit={(event) => handleSubmit(event)}>
            <div className="form-outline mb-4">
                <input type="text" id="name" name='name' value={name} className="form-control" onChange={(e) => setName(e.target.value)} />
                <label className="form-label" htmlFor="name">Ваше имя</label>
            </div>
            <div className="form-outline mb-4">
                <input type="email" id="mail" name='mail' value={mail} className="form-control" onChange={(e) => setMail(e.target.value)} />
                <label className="form-label" htmlFor="mail">Email адрес</label>
            </div>
            <div className="form-outline mb-4">
                <input type="password" id="pass" name='pass' value={pass} className="form-control" onChange={(e) => setPass(e.target.value)} />
                <label className="form-label" htmlFor="pass">Пароль</label>
            </div>

            <button type="submit" name="send" id="send" value="SEND" className="btn btn-primary btn-block mb-4">Зарегистрироваться</button>
        </form>
    </div>
}

export default Registration