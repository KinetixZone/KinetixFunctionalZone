"use client";

import { motion } from "framer-motion";

const servicios = [
  {
    icon: "🧠",
    title: "Bases científicas",
    text: "Cada sesión está estructurada con fundamentos reales del entrenamiento deportivo.",
  },
  {
    icon: "🏋️",
    title: "Entrenamiento sobre capacidades físicas",
    text: "Fuerza, resistencia, velocidad y flexo elasticidad.",
  },
  {
    icon: "📅",
    title: "Horarios accesibles",
    text: "Lunes a viernes de 1 p.m. a 4 p.m., ideal para mantener una rutina constante.",
  },
  {
    icon: "🧪",
    title: "Entrenamiento progresivo",
    text: "Seguimiento y evolución de tu nivel con entrenamientos ajustados a ti.",
  },
];

export const SeccionServicios = () => {
  return (
    <section
      id="servicios"
      className="relative py-10 md:py-14 px-4 bg-white text-black dark:bg-black dark:text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto text-center"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-16 md:mb-20"
        >
          Servicios <span className="text-blue-500 dark:text-red-500">Principales</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
          {servicios.map((servicio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="group bg-gradient-to-br from-zinc-100 via-white to-zinc-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-red-500/60 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-gradient-to-tr from-red-100 via-red-200 to-red-300 dark:from-red-900 dark:to-red-700 text-4xl mb-6 group-hover:scale-110 transition-transform">
                {servicio.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{servicio.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
                {servicio.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
