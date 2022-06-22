import { useContext } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MainContext from "./components/MainContext";
import { ThemeContext } from "./components/ThemeContext/ThemeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryDetail from "./components/MainContext/CountryDetail/CountryDetail";
import Footer from "./Footer/Footer";

function App() {
  const themeContext = useContext(ThemeContext);
  return (
    <div className={themeContext.theme} style={{ minHeight: "100vh" }}>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<MainContext />} />
            <Route path="/region/:regionName" element={<MainContext />} />
            <Route path="/country/:countryName" element={<CountryDetail />} />
            <Route path="/search/:valueInput" element={<MainContext />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
