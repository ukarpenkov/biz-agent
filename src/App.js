import AddCompanyButton from "./components/add-company/AddCompanyButton";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import CompanyList from "./components/main/CompanyList.jsx"

function App() {
  return (
    <div>
      <Header />
      <CompanyList />
      <AddCompanyButton />
      <Footer />
    </div>
  );
}

export default App;
