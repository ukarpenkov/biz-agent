import './style.css'

const Login = () => {
    return <div className='login-page'>
        <form>
            <div className="form-outline mb-4">
                <input type="email" id="form2Example1" className="form-control" />
                <label className="form-label" htmlFor="form2Example1">Email адрес</label>
            </div>
            <div className="form-outline mb-4">
                <input type="password" id="form2Example2" className="form-control" />
                <label className="form-label" htmlFor="form2Example2">Пароль</label>
            </div>
            <button type="button" className="btn btn-primary btn-block mb-4">Войти</button>
        </form>
    </div>
}

export default Login