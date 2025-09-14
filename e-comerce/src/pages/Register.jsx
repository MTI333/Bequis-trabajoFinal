import React from 'react';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
  return (
    <div className="form-page">
      <div className="container">
        <h1>Crear Cuenta</h1>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;