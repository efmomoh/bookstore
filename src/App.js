import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Books from './components/Books';
import Categories from './components/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <h1 className="h1">ALL TIMES FAVORITE BOOKSTORE APP</h1>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Books title="The Hunger Games" author="Enssah F. Momoh" />}
        />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
