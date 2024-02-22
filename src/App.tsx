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
import TodoDetail from './pages/TodoDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Calander" element={<Calander />} />
      <Route path="/Interview" element={<Interview />} />
      <Route path="/Community" element={<Community />} />
      <Route path="/Mypage" element={<Mypage />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/PostDetail" element={<PostDetail />} />
      <Route path="/PreLogin" element={<PreLogin />} />
      <Route path="/Resume" element={<Resume />} />
      <Route path="/TodoDetail" element={<TodoDetail />} />
    </Routes>
  );
}

export default App;
