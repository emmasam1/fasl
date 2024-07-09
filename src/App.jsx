import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import ScrollToTop from "./components/top/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
