"use client";

import { motion } from "framer-motion";

export const SeccionEntrenamiento = () => {
  return (
    <section
      id="entrenamiento"
      className="py-20 px-6 bg-white dark:bg-black text-black dark:text-white transition-colors"
    >
      <div className="max-w-5xl mx-auto text-center space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          Entrenamiento{" "}
          <span className="text-blue-500 dark:text-red-500">Funcional</span>{" "}
          basado en ciencia
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto"
        >
          Diseñado para mejorar tus <strong>capacidades físicas reales</strong> como fuerza, velocidad, resistencia, flexibilidad y coordinación, con base en evidencia científica y aplicada.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h3 className="text-xl font-semibold text-red-600 dark:text-red-400">
              🎯 Objetivos
            </h3>
            <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-2">
              <li>Mejorar fuerza en múltiples planos de movimiento.</li>
              <li>Optimizar estabilidad del core y postura.</li>
              <li>Elevar rendimiento cotidiano y deportivo.</li>
              <li>Prevenir lesiones y mejorar propriocepción.</li>
              <li>Transferencia directa a tu vida real.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
              📘 Fundamento científico
            </h3>
            <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-2">
              <li>Activa cadenas musculares completas y naturales.</li>
              <li>Desarrolla eficiencia neuromuscular funcional.</li>
              <li>Estimula tanto SNC como vías musculares.</li>
              <li>Mejora coordinación inter e intramuscular.</li>
              <li>
                Basado en estudios de <em>Santana</em>, <em>Levine</em>,{" "}
                <em>Myer</em> y <em>Schoenfeld</em>.
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-lg font-medium text-zinc-800 dark:text-zinc-200"
        >
          <span className="text-blue-600 dark:text-blue-400 font-bold">
            Funcionalidad real.
          </span>{" "}
          Resultados reales. Para personas reales.
        </motion.p>
      </div>
    </section>
  );
};
