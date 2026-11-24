import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  return (
    <>
    <Navbar />
    <Footer />
  {/* <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/shop" element={<Shop />} />
    </Route>
  </Routes> */}
  </>
  )
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;