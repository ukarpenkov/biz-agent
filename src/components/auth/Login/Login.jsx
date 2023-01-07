import { useContext, useReducer, useState } from 'react'
import './style.css'
import { LoginContext } from './login-context'


const Login = () => {
    const [mail, setMail] = useState('')
    const [pass, setPass] = useState('')
    const { dispatch } = useContext(LoginContext)


    const handleSubmit = () => {
        if (mail.length === 0) {
            alert('Введите email')
        }
        else if (pass.length === 0) {
            alert('Введите пароль')
        }
        else {
            const url = "http://localhost/login.php"

            let fData = new FormData()
            fData.append('mail', mail)
            fData.append('pass', pass)

            fetch(url, {
                method: 'POST',
                header: {
                    'Content-Type': 'text/html; charset=utf-8'
                },
                body: fData
            })
                .then(response => response.text()).then(response => dispatch({
                    type: 'LOGIN',
                    payload: [...response]
                }))
                .catch(error => alert(error))


        }

    }

    return <div className='login-page'>
        <form>
            <div className="form-outline mb-4">
                <input type="email" id="mail" name='mail' className="form-control" onChange={(e) => setMail(e.target.value)} />
                <label className="form-label" htmlFor="mail">Email адрес</label>
            </div>
            <div className="form-outline mb-4">
                <input type="password" id="pass" name='pass' className="form-control" onChange={(e) => setPass(e.target.value)} />
                <label className="form-label" htmlFor="pass">Пароль</label>
            </div>

            <button type="button" name="send" id="send" value="SEND" className="btn btn-primary btn-block mb-4" onClick={handleSubmit}>Войти</button>
        </form>
    </div>
}

export default Login