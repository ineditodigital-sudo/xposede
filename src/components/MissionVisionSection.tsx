import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Target, Eye, Lightbulb } from 'lucide-react';

export function MissionVisionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const values = [
    {
      icon: Target,
      title: 'MISIÓN',
      description: 'Somos un grupo de profesionales enfocados en crear altos estándares de calidad, confianza, compromiso e innovación, aplicados a soluciones de exhibición. Proyectamos la grandeza de las marcas de nuestros clientes mediante nuestro sistema de 8 pasos, que generan presencia y rentabilidad aplicando tendencias y tecnologías para ofrecer soluciones creativas y vanguardistas',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Eye,
      title: 'VISIÓN',
      description: 'Proyectar la grandeza de cada empresa que representamos con creatividad e innovación sorprendentes',
      color: 'from-gray-700 to-gray-800'
    },
    {
      icon: Lightbulb,
      title: 'PROPÓSITO',
      description: 'Proyectar la grandeza de las empresas y las marcas para multiplicar los buenos negocios.',
      color: 'from-red-600 to-red-700'
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-br from-gray-50 to-white p-[0px]" ref={ref}>
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
            NUESTRA FILOSOFÍA
          </h2>
          <div className="w-24 h-1 bg-xposedde-red mx-auto"></div>
        </motion.div>

        {/* Values Grid */}
        <div className="space-y-8">
          {/* MISIÓN - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0 }}
            className="group"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-xposedde-red/20 flex flex-row md:flex-row gap-6 items-start">
              {/* Icon */}
              <div className="w-14 h-14 flex-shrink-0 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Target className="w-7 h-7 text-white" />
              </div>

              <div className="flex-1">
                {/* Title */}
                <h3 
                  className="font-subtitle text-gray-900 mb-3"
                  style={{ 
                    fontSize: '20px',
                    letterSpacing: '-0.5px'
                  }}
                >
                  MISIÓN
                </h3>

                {/* Description */}
                <p className="font-body text-gray-600 leading-relaxed">
                  Somos un grupo de profesionales enfocados en crear altos estándares de calidad, confianza, compromiso e innovación, aplicados a soluciones de exhibición. Proyectamos la grandeza de las marcas de nuestros clientes mediante nuestro sistema de 8 pasos, que generan presencia y rentabilidad aplicando tendencias y tecnologías para ofrecer soluciones creativas y vanguardistas
                </p>

                {/* Decorative Line */}
                <div className="mt-4 w-0 h-0.5 bg-xposedde-red group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          </motion.div>

          {/* VISIÓN and PROPÓSITO - 50% each on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* VISIÓN */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-xposedde-red/20 h-full flex flex-col">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 
                  className="font-subtitle text-gray-900 mb-4"
                  style={{ 
                    fontSize: '20px',
                    letterSpacing: '-0.5px'
                  }}
                >
                  VISIÓN
                </h3>

                {/* Description */}
                <p className="font-body text-gray-600 leading-relaxed flex-grow">
                  Proyectar la grandeza de cada empresa que representamos con creatividad e innovación sorprendentes
                </p>

                {/* Decorative Line */}
                <div className="mt-6 w-0 h-0.5 bg-xposedde-red group-hover:w-full transition-all duration-500"></div>
              </div>
            </motion.div>

            {/* PROPÓSITO */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-xposedde-red/20 h-full flex flex-col">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 
                  className="font-subtitle text-gray-900 mb-4"
                  style={{ 
                    fontSize: '20px',
                    letterSpacing: '-0.5px'
                  }}
                >
                  PROPÓSITO
                </h3>

                {/* Description */}
                <p className="font-body text-gray-600 leading-relaxed flex-grow">
                  Proyectar la grandeza de las empresas y las marcas para multiplicar los buenos negocios.
                </p>

                {/* Decorative Line */}
                <div className="mt-6 w-0 h-0.5 bg-xposedde-red group-hover:w-full transition-all duration-500"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}