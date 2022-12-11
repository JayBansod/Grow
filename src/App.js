import { Route, Routes } from "react-router-dom";
import About from "./Component/About";
import "./App.css";
import Home from "./Component/Home";
import Services from "./Component/Services";
import Navbar from "./Component/Navbar";
import Contact from "./Component/Contact";
// import Mydrawer from "./Component/Mydrawer";

function App() {
  const showIcon = "false";
  return (
    <>
      <Navbar />
      <Routes className="Routes">
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} show={showIcon} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* <Mydrawer /> */}
    </>
  );
}

export default App;
