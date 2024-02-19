import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Dashboard from "./components/Dashboard";
import User from "./components/User";
import Category from "./components/Category";
import Subcategory from "./components/Subcategory";
import Product from "./components/Product";
import ProductForm from "./components/ProductForm";
import UserForm from "./components/UserForm";

function App() {
  return (
    <Layout>
      {/* You can put your page content component here */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/user" element={<User />} />
        <Route path="/new-user" element={<UserForm />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/:catId" element={<Category />} />
        <Route path="/sub-category" element={<Subcategory />} />
        <Route path="/sub-category/:subcatId" element={<Subcategory />} />
        <Route path="/product" element={<Product />} />
        <Route path="/edit-product/:prodId" element={<ProductForm />} />
        <Route path="/new-product" element={<ProductForm />} />
      </Routes>
    </Layout>
  );
}

export default App;
