//import logo from './logo.svg';
import './assets/css/App.css';
// eslint-disable-next-line
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

//import MyContactForm from "./components/MyContactForm";
//import MyReactive from "./components/MyReactive";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import PageHome from "./pages/Home";
import PageAbout from "./pages/About";
import PageContact from "./pages/Contact";
import PageError404 from "./pages/Error404";
import React from "react";
import PagePortfolios from "./pages/Portfolios";

function App() {
  return (

      <BrowserRouter>
        <div className="App">
            <Header></Header>
                <Routes>
                    <Route path="/" element={<PageHome />} />
                    <Route path="about" element={<PageAbout />} />
                    <Route path="contact" element={<PageContact />} />
                    <Route path="portfolios" element={<PagePortfolios />} />
                    <Route path="*" element={<PageError404 />} />
                </Routes>
            <Footer></Footer>
        </div>
      </BrowserRouter>
  );
}

export default App;
