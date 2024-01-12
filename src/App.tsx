import React from 'react';
import './App.css';
import Catalog from "./pages/Catalog/Catalog";
import {Route, Routes} from "react-router-dom";
import Params from "./pages/Params";
import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div style={{width:"100%", maxWidth:"1440px", margin:"0 auto"}}>

      <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Catalog" element={<Catalog/>}/>
            <Route path="Params/:id" element={<Params/>}/>
        </Routes>
    </div>
  );
}

export default App;
