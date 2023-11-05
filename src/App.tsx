import { useEffect, useState } from "react";
import Preload from "./components/preLoader";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavbarPortfolio from "./components/NavbarPortfolio";
import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./components/scrollToTop";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import About from "./components/About/About";
import Footer from "./components/Footer";
function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <BrowserRouter>
        <Preload load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <NavbarPortfolio />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
