import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main/Main";
import Login from "./components/auth/Login/Login";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
