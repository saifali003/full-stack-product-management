import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import ShowProducts from "./Pages/ShowProducts";
import AddProducts from "./Pages/AddProducts";
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<AddProducts />} />
        <Route path="/show" element={<ShowProducts />} />
      </Routes>
    </div>
  );
}