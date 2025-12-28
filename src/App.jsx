import { Routes, Route } from "react-router-dom"
import About from "./pages/About";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";

function App() {
  return (
    <>


      <Routes>

        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />

        </Route>
      </Routes>

    </>


  );
}

export default App;
