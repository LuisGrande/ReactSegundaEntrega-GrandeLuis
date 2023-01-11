import "./style.css";
import NavBar from "./componentes/header/NavBar";
// import CardItem from "./componentes/items/CardItem";
import ItemListContainer from "./componentes/Main/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartWidget from "./componentes/header/CartWidget";
import ItemDetailContainer from "./componentes/Main/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/home' element={
          <ItemListContainer saludo="Productos"/>

        }/>
        <Route path="/detalle" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<CartWidget/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
