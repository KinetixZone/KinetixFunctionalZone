"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";

export default function KinetixHero() {
  const { scrollY } = useScroll();

  // Fondo que se mueve menos al hacer scroll (efecto 3D suave)
  const backgroundY = useTransform(scrollY, [0, 300], [0, -80]);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo con parallax de scroll */}
      <motion.img
        src="/fondo_kinetix.png"
        alt="Fondo Kinetix Hero"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ y: backgroundY }}
      />

      {/* Capa oscura para contraste */}


      {/* Contenido fijo */}
      <div className="relative z-20 text-center px-6 md:px-12 max-w-4xl flex flex-col items-center">
        <img
          src="/LOGO_KINETIX_NUEVO.png"
          alt="Kinetix Logo"
          className="w-64 sm:w-72 md:w-80 lg:w-[22rem] xl:w-[26rem] 2xl:w-[30rem] h-auto mb-4"
        />

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
          Bienvenido a <span className="text-red-500">Kinetix</span>{" "}
          <span className="text-[#4688ff] block">Functional Zone</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-white max-w-xl">
          Entrena en el lugar donde la <span className="font-bold">disciplina</span> se encuentra con la{" "}
          <span className="font-bold">fuerza</span>. Transforma tu cuerpo con entrenamiento funcional.
        </p>

        <div className="mt-8">
          <a href="https://wa.me/525627303189?text=Hola%2C%20me%20gustaría%20agendar%20una%20visita"
            target="_blank"
            rel="noopener noreferrer">
            <Button
              size="lg"
              className="rounded-full bg-red-600 hover:bg-red-700 text-white text-base font-semibold px-8 py-4 shadow-lg transition-transform hover:scale-105 cursor-pointer"
            >

              Agenda tu clase hoy
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
