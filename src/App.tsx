"use client";


import { SeccionFooter } from "./components/Footer";
import KinetixHero from "./components/KinetixHero";
import KinetixNavbar from "./components/Navbar";
import { SeccionEntrenamiento } from "./components/SeccionEntrenamiento";
import { SeccionPrecios } from "./components/SeccionPrecios";


import { SeccionServicios } from "./components/SeccionServicios";
import { SeccionUbicacion } from "./components/SeccionUbicacion";


function App() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-black text-black dark:text-white antialiased">
      <KinetixNavbar />

      <main className="pt-[4rem] "> {/* espacio para no cubrir hero con navbar */}
        <section id="inicio">
          <KinetixHero />
        </section>
        <section id="servicios">
          {/* Aquí puedes incluir la sección de servicios */}
          <SeccionServicios />
        </section>

        <section id="entrenamiento">
          {/* Aquí puedes incluir la sección de entrenamiento */}
          <SeccionEntrenamiento/>
        </section>

        <section id="precios">
          {/* Aquí puedes incluir la sección de precios */}
          <SeccionPrecios />
        </section>

        <section id="Ubicación">
          <SeccionUbicacion />
        </section>

        {/* Secciones futuras */}
        {/* <section id="servicios">...</section> */}
        {/* <section id="entrenamiento">...</section> */}
        {/* <section id="ubicacion">...</section> */}
        {/* <section id="contacto">...</section> */}
      </main>
      <SeccionFooter />

    </div>
  );
}

export default App;
