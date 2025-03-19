const RegistrationForm = () => {
    return (
      <div className='form-container'>
        <h2>Registro</h2>
        <form onSubmit={(e) => e.preventDefault()}>
            
          <input type='text' placeholder='Nombre' required />
          <input type='email' placeholder='Correo' required />
          <input type='password' placeholder='Contraseña' required />
          <button type='submit'>Registrarse</button>
        </form>
      </div>
    );
  };

  export default RegistrationForm; 