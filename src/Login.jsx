const LoginForm = () => {
    return (
      <div className='form-container'>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type='text' placeholder='Nombre' required />
          <input type='password' placeholder='Contraseña' required />
          <button type='submit'>Iniciar Sesión</button>
        </form>
        <br />
        <a className="Reg" href='/registro'>¿No tienes cuenta? Regístrate</a>
      </div>
    );
  };

  export default LoginForm;