import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AssociationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const associations = [
    {
      name: 'AMPROFEC',
      logo: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/Recurso-3.webp'
    },
    {
      name: 'MPI',
      logo: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/Recurso-4.png'
    },
    {
      name: 'GRUPO MAEN',
      logo: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/maen_logo-1.webp'
    }
  ];

  return (
    <section className="section-spacing bg-white" ref={ref}>
      <div className="container-xposedde">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-[32px] sm:text-[42px] md:text-[52px] text-gray-900 mb-4"
            style={{ 
              fontFamily: "'Helvetica83HeavyExtended', sans-serif",
              fontWeight: 800,
              letterSpacing: '-1px'
            }}
          >
            ASOCIACIONES
          </h2>
          <div className="w-24 h-1 bg-xposedde-red mx-auto mb-6"></div>
          <p className="font-body text-gray-600 max-w-2xl mx-auto">
            Formamos parte de las principales asociaciones de la industria de exposiciones y eventos
          </p>
        </motion.div>

        {/* Associations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 max-w-4xl mx-auto">
          {associations.map((association, index) => (
            <motion.div
              key={association.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center group"
            >
              <ImageWithFallback
                src={association.logo}
                alt={association.name}
                className="w-full h-16 md:h-24 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}