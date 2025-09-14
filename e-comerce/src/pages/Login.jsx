import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = ({ setUser }) => {
  return (
    <div className="form-page">
      <div className="container">
        <h1>Iniciar Sesión</h1>
        <LoginForm setUser={setUser} />
      </div>
    </div>
  );
};

export default Login;