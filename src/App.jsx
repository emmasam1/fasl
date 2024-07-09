import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
