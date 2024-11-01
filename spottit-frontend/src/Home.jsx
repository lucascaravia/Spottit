import React from 'react';
import './index.css';
function Home() {
  return (
    <div className="p-4">
      <header className="bg-blue-500 text-white p-4 mb-4">
        <h1 className="text-3xl font-bold">Bienvenido a Spottit</h1>
      </header>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">¿Quiénes somos?</h2>
        <p>Somos una empresa dedicada a ofrecer soluciones de estacionamiento inteligente en la vía pública.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">¿Qué es Spottit?</h2>
        <p>Spottit es una aplicación que te permite encontrar y gestionar espacios de estacionamiento en tu ciudad.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Nuestra Misión</h2>
        <p>Facilitar el estacionamiento y reducir el tiempo y estrés al encontrar un lugar disponible.</p>
      </section>
      <footer className="bg-gray-800 text-white p-4 mt-4">
        <p>&copy; 2024 Spottit. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
