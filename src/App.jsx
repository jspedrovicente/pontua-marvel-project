import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import EsqueceuSenha from "./pages/EsqueceuSenha"
import React  from 'react';
function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/profile" element={ <Profile/> } />
        <Route path="/esqueceu-senha" element={ <EsqueceuSenha/> } />
      </Routes>
    </div>
  );
}

export default App;
