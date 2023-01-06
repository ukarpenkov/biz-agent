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


function App() {
  const [state, dispatch] = useReducer(loginReducer, [])

  return (
    <Router>
      <LoginContext.Provider value={{
        dispatch
      }}>
        <Header state={state} />
        <Routes>
          <Route index element={<Main />} />
          <Route path="login" element={<Login />} />
          <Route path="reg" element={<Registration />} />
        </Routes>
        <Footer />
      </LoginContext.Provider>
    </Router>
  )
}

export default App;
