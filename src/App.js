import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import NaoEncontrada from './NaoEncontrada';
import Sobre from './Sobre';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
