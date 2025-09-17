import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';
import Home from './pages/Home';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router> {}
      <div className="App">
        <Header user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;