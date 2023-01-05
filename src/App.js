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

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="reg" element={<Registration />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
