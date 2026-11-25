import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage"; 
import CartPage from "./pages/Cart/CartPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />  
      <Route path="/cart" element={<CartPage />} />

    </Routes>
  );
}

export default App;