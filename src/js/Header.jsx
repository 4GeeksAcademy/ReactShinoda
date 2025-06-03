import React from 'react';

function Header() {
  return (
    <header className="py-5 bg-light">
      <div className="container text-center">
        <h1 className="display-4">League of legends o Warzone</h1>
        <p className="lead">
          Jugar League of Legends (LoL) puede ayudar a desarrollar habilidades estratégicas, de comunicación y resolución de problemas, así como mejorar la capacidad de adaptación y la gestión del tiempo. También puede fomentar el trabajo en equipo y la cooperación.
        </p>
        <a href="#" className="btn btn-primary btn-lg">Juguemos unas</a>
      </div>
    </header>
  );
}

export default Header;