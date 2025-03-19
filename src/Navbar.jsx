const Navbar = () => {
    return (
        
        <header>
            <a href="#" className="logo">
        <img src="./icon.png" alt="logo institución"/>

        <h2 className="inicio">Institución Educativa</h2>
            </a>

         <nav>
    
          <a href='/inicio'>Institución Educativa</a>
          <a href='/registro' className="nav-link">Registrarse</a>
          <a href='/Opiniones' className="nav-link">Opiniones</a>
          <a href='/Materias' className="nav-link">Materias</a>
          <a href='Matriculas' className="nav-link">Matrículas</a>
          <a href='/Seguimiento' className="nav-link">Seguimiento del Estudiante</a>

      </nav>
        </header>
        
      
    );
  };

  export default Navbar;