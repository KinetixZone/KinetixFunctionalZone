"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FaWhatsapp } from "react-icons/fa";

const precios = [
  {
    titulo: "Primer mes",
    precio: 249,
    color: "text-red-600",
    bg: "bg-[#fff5f5] dark:bg-red-950",
    descripcion: "Promoción única para nuevos ingresos. ¡Aprovecha y comienza ahora!",
  },
  {
    titulo: "Mensualidad",
    precio: 499,
    color: "text-blue-600",
    bg: "bg-[#eaf0ff] dark:bg-blue-950",
    descripcion: "Acceso completo durante todo el mes.",
  },
  {
    titulo: "Semana",
    precio: 150,
    color: "text-red-600",
    bg: "bg-[#fff5f5] dark:bg-red-950",
    descripcion: "Ideal para quienes desean entrenar unos días o están de visita.",
  },
  {
    titulo: "Visita",
    precio: 50,
    color: "text-blue-600",
    bg: "bg-[#eaf0ff] dark:bg-blue-950",
    descripcion: "Perfecto para entrenamientos únicos o sesiones de prueba.",
  },
];

export const SeccionPrecios = () => {
  return (
    <section
      id="precios"
      className="py-28 px-4 bg-white dark:bg-black text-black dark:text-white transition-colors"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-16"
        >
          <span className="text-red-600 dark:text-red-500">Precios</span>{" "}
          <span className="text-black dark:text-white">de membresía</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          {precios.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex justify-center"
            >
              <div
                className={cn(
                  "flex flex-col items-center justify-center p-8 rounded-3xl border hover:shadow-xl transition-all duration-300 ease-out hover:scale-[1.02]",
                  "border-zinc-200 dark:border-zinc-800",
                  item.bg
                )}
              >
                <div className={`font-bold text-sm uppercase tracking-wide mb-2 ${item.color}`}>
                  {item.titulo}
                </div>
                <div className={`text-3xl font-extrabold mb-3 ${item.color}`}>
                  $ <span className="text-4xl tracking-tight">{item.precio} MXN</span>
                </div>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 text-center leading-relaxed max-w-xs">
                  {item.descripcion}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botón de WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 flex justify-center"
        >
          <a
            href="https://wa.me/525627303189?text=Hola%2C%20me%20gustaría%20agendar%20una%20visita%20o%20recibir%20más%20información%20sobre%20Kinetix"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
          >
            <FaWhatsapp className="text-xl" />
            Quiero agendar una visita
          </a>
        </motion.div>
      </div>
    </section>
  );
};
