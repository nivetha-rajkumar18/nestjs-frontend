import React from "react";
import { BrowserRouter, Routes, Route,Navigate} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import UserInterface from "./components/User-Interface";
import { ProductCard } from "./components/product/ProductCard";
import { Product } from "./types/product.types";

function App() {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <div>
      <BrowserRouter>
        <UserInterface />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<ProductCard onEdit={function (product: Product): void {
            throw new Error("Function not implemented.");
          } } onDelete={function (id: string): void {
            throw new Error("Function not implemented.");
          } } product={{ id: '', name: '', price: 0, stock: 0, imageUrl: '', _id: '', stockAvailable: 0, createdAt: '', updatedAt: '' }} />} />
          {isAuthenticated ? (
        <>
       

        </>
      ) : (
        <Route path="*" element={<Navigate to="/login" />} />
      )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;




