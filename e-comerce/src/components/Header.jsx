import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ user, setUser }) => {
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">MiTienda</Link>
        <nav className="nav">
          <Link to="/">Inicio</Link>
          {user ? (
            <>
              <span>Hola, {user.name}</span>
              <button onClick={handleLogout} className="logout-btn">Cerrar Sesión</button>
            </>
          ) : (
            <>
              <Link to="/login">Iniciar Sesión</Link>
              <Link to="/register">Registrarse</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;