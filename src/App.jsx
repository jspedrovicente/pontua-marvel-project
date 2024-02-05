import './App.css';
import React  from 'react';
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import EsqueceuSenha from "./pages/EsqueceuSenha"
import SelecionarAgente from "./pages/SelecionarAgente"

function App() {

  return (
    <div className="App">
        <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/esqueceu-senha" element={ <EsqueceuSenha/> } />
        <Route path="/selecionar-agente" element={ <SelecionarAgente/> } />
      </Routes>
    </div>
  );
}

export default App;
