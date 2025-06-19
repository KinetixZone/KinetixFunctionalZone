"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export const SeccionUbicacion = () => {
  return (
    <section
      id="ubicacion"
      className="relative py-24 px-6 bg-white text-black dark:bg-black dark:text-white transition-colors"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Mapa */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800"
        >
          <iframe
            src="https://www.google.com/maps?q=19.4781804,-99.1590133&z=17&hl=es&output=embed"
            width="100%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Kinetix"
            className="w-full h-[500px]"
          ></iframe>
        </motion.div>

        {/* Información + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Encuentra{" "}
            <span className="text-[#4688ff] dark:text-red-500">Kinetix Functional Zone</span>
          </h2>

          <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Nuestro centro está ubicado estratégicamente en la{" "}
            <strong className="text-black dark:text-white">Colonia Euzkadi</strong>, en un entorno seguro y accesible.
            Vive el entrenamiento de élite con instalaciones diseñadas para desafiar tus límites.
          </p>

          <ul className="text-base text-zinc-600 dark:text-zinc-400 space-y-2">
            <li>🚇 A solo 5 minutos del <strong>Metro La Raza</strong></li>
            <li>🛣 Conectado a vías rápidas: <strong>Insurgentes Norte</strong> y <strong>Circuito Interior</strong></li>
            <li>🚶‍♂️ Acceso cómodo para peatones y ciclistas</li>
            <li>🅿️ Estacionamiento disponible en la zona</li>
          </ul>

          <motion.a
            href="https://www.google.com/maps?q=19.4781804,-99.1590133&z=17&hl=es"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-[#4688ff] dark:bg-red-600 hover:brightness-110 text-white font-semibold py-3 px-6 rounded-full transition-all shadow-md w-fit"
          >
            <MapPin className="w-5 h-5" />
            Cómo llegar
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
