import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main/Main";
import Login from "./components/auth/Login/Login";
import Registration from "./components/auth/Registration/Registration";
import { LoginContext } from "./components/auth/Login/login-context";
import { useReducer } from "react";
import loginReducer from "./components/auth/Login/login-reducer";
import CurrentCompany from "./components/main/CompanyCard/CurrentCompany";
import { CompanyContext } from "./components/main/company-context";
import companyReducer from "./components/main/company-reducer";


function App() {
  const [state, dispatch] = useReducer(loginReducer, [])
  const [company, send] = useReducer(companyReducer, [])

  return (
    <Router>
      <LoginContext.Provider value={{
        dispatch
      }}>
        <CompanyContext.Provider value={{
          send
        }}>
          <Header state={state} />
          <Routes>
            <Route path="companies/*" element={<Main />} />
            <Route exact path="login" element={<Login />} />
            <Route exact path="reg" element={<Registration />} />
            <Route path="companies/:id" element={<CurrentCompany company={company} />} />
          </Routes>
          <Footer />
        </CompanyContext.Provider>
      </LoginContext.Provider>
    </Router>
  )
}

export default App;
