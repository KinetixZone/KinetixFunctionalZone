"use client";

import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { motion } from "framer-motion";
import logo from "/logo-kinetix-lobo.png";

export const SeccionFooter = () => {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white border-t border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col lg:flex-row justify-between items-center gap-12 text-center lg:text-left">
        {/* Columna 1: Logo y redes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center lg:items-start gap-4"
        >
          <img src={logo} alt="Kinetix Logo" className="w-35 h-auto" />
          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xs">
            Entrenamiento funcional basado en ciencia para mejorar tu rendimiento real y diario.
          </p>
          <div className="flex gap-4 text-lg">
            <a
              href="https://www.instagram.com/kinetix.zone/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 dark:text-zinc-400 hover:text-red-600 dark:hover:text-red-500 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61577641223744"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-500 transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
          </div>
        </motion.div>

        {/* Columna 2: Contacto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-3 items-center lg:items-start"
        >
          <h4 className="text-lg font-semibold">Contacto</h4>
          <a
            href="mailto:kinetix.zone@gmail.com"
            className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-red-500"
          >
            <MdEmail className="text-red-500" />
            kinetix.zone@gmail.com
          </a>
          <a
            href="https://wa.me/525627303189?text=Hola%2C%20me%20gustaría%20pedir%20más%20información%20sobre%20Kinetix"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-green-500"
          >
            <FaWhatsapp className="text-green-500" />
            +52 5627 303 189
          </a>
          <p className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
            <MdLocationOn className="text-blue-500" />
            Calle 25 No. 368, Colonia Euzkadi, CDMX
          </p>
        </motion.div>

        {/* Columna 3: Créditos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm text-zinc-500 dark:text-zinc-400 text-center lg:text-right"
        >
          <p>© {new Date().getFullYear()} Kinetix Functional Zone</p>
          <p>
            Hecho con <span className="text-red-500">♥</span> por{" "}
            <a
              href="https://devtecalli.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-black dark:text-white hover:text-red-600 dark:hover:text-red-500 transition"
            >
              DevTecalli
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
