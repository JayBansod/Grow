import { Route, Routes } from "react-router-dom";
import About from "./Component/About";
import "./App.css";
import Home from "./Component/Home";
import Services from "./Component/Services";
import Navbar from "./Component/Navbar";
import Contact from "./Component/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes className="Routes">
        <Route path="/live/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>

      {/* <Mydrawer /> */}
    </>
  );
}

export default App;
