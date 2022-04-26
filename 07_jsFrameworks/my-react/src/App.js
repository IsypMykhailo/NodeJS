//import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

//import MyContactForm from "./components/MyContactForm";
//import MyReactive from "./components/MyReactive";
//import MyArray from "./components/MyArray";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import PageHome from "./pages/Home";
import PageAbout from "./pages/About";
import PageContact from "./pages/Contact";
import PageError404 from "./pages/Error404";

function App() {
  return (
    <div className="App">
        <Header></Header>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="about" element={<PageAbout />} />
            <Route path="contact" element={<PageContact />} />
            <Route path="*" element={<PageError404 />} />
        </Routes>
        </BrowserRouter>
        <Footer></Footer>
    </div>
  );
}

export default App;
