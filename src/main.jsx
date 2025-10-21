import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import Cadastrar from './Components/Main/Cadastrar.jsx'
import Login from './Components/Main/Perfil.jsx'
import Atualizar_Perfil from './Components/Main/Atualizar_Perfil.jsx'
import Perfil from './Components/Main/Perfil.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route element={<App/>} path='/'/>
    <Route element={<Cadastrar/>} path='/Cadastrar'/>
    <Route element={<Atualizar_Perfil/>} path='/Atualizar_Perfil'/>
    <Route element={<Login/>} path='/Login'/>
    <Route element={<Perfil/>} path='/Perfil'/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)