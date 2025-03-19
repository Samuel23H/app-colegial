import React from 'react';
import Navbar from './Navbar';
import RegistrationForm from './Registro';
import LoginForm from './Login';

export const App = () => {
  return (
    <div className='contenido'>
      <Navbar />
      <div className='forms'>
        <RegistrationForm />
        <LoginForm />
      </div>
    </div>
  );
};