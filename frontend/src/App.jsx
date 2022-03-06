import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductsList from "./comps/ProductsList";
import AddProduct from "./comps/AddProduct";
import EditProduct from "./comps/EditProduct";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={ <ProductsList /> } />
          <Route path="add" element={ <AddProduct /> } />
          <Route path="edit/:id" element={ <EditProduct /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
