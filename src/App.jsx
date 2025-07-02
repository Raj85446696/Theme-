import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './components/Main/MainPage';
import Courses from './components/Courses/Courses';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/course' element={<Courses/>} />
    </Routes>
  )
}

export default App