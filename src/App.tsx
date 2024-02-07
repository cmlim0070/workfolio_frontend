import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";

import Calander from './pages/Calander';
import Community from './pages/Community';
import Interview from './pages/Interview';
import Login from './pages/Login';
import Main from './pages/Main';
import Mypage from './pages/Mypage';
import Portfolio from './pages/Portfolio';
import PostDetail from './pages/PostDetail';
import PreLogin from './pages/PreLogin';
import Resume from './pages/Resume';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
