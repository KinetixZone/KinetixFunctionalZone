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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.023307898555!2d-99.0655446!3d19.497633000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fbf55e87ec9d%3A0x565f75f43bd707f9!2sCentro%20Cultural%20Comunitario%20%E2%80%9CLa%20Escuelita%E2%80%9D!5e0!3m2!1ses!2smx!4v1753757020222!5m2!1ses!2smx"
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
            <span className="text-[#4688ff] dark:text-red-500">
              Kinetix Functional Zone
            </span>
          </h2>

          <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Ahora nos encuentras en{" "}
            <strong className="text-black dark:text-white">
              Genovevo Rivas 3-81, San Felipe de Jesús Nte, Gustavo A. Madero, CDMX
            </strong>
            . Entrena en instalaciones diseñadas para desafiar tus límites.
          </p>

          <motion.a
            href="https://www.google.com/maps/place/Centro+Cultural+Comunitario+%E2%80%9CLa+Escuelita%E2%80%9D/@19.497633,-99.0655446,17z"
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
