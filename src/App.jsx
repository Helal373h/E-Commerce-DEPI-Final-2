import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import URBANOVAShoppingCartTouchFlow from "./pages/Shopcart/URBANOVAShoppingCartTouchFlow";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}></Route>
        </Routes>
    );
}

export default App;
