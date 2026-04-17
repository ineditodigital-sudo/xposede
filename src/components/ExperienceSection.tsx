import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { label: 'Órdenes de trabajo', value: 3500, prefix: '+' },
    { label: 'Empresas apoyadas', value: 2000, prefix: '+' },
    { label: 'Años de experiencia', value: 15, prefix: '+' },
    { label: 'Estados de la República', value: 19, prefix: '' }
  ];

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #B40D15 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container-xposedde relative z-10">
        {/* Header with Video */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-title text-[28px] sm:text-[33.6px] md:text-[42px] text-gray-900 mb-6 font-[Helvetica] font-bold">
              XPO EXPERIENCIA
            </h2>
            
            <div className="w-24 h-1 bg-xposedde-red mb-8"></div>

            <p className="font-body text-lg text-xposedde-gray leading-relaxed">
              Hemos diseñado un proceso de 8 pasos para garantizar que tu experiencia sea impecable, 
              desde el primer contacto hasta la evaluación final. Estos pasos nos permiten transformar 
              tus ideas en realidades concretas y memorables, cuidando cada detalle para superar tus 
              expectativas.
            </p>
          </motion.div>

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-video">
              <iframe
                src="https://www.youtube.com/embed/R8NZYraPwyU"
                title="Experiencia Xposedde"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
            {/* Decorative Border */}
            <div className="absolute -inset-2 border-2 border-xposedde-red/20 rounded-xl -z-10"></div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 group hover:border-xposedde-red">
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[48px] border-r-[48px] border-t-xposedde-red border-r-transparent opacity-10 group-hover:opacity-20 transition-opacity"></div>
                </div>

                {/* Number */}
                <div className="text-center mb-4">
                  <Counter 
                    end={stat.value} 
                    prefix={stat.prefix}
                    isInView={isInView}
                    delay={0.4 + index * 0.1}
                  />
                </div>

                {/* Label */}
                <div className="text-center">
                  <p className="font-subtitle text-gray-700 text-sm uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-1 bg-xposedde-red transition-all duration-300 rounded-t"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface CounterProps {
  end: number;
  prefix: string;
  isInView: boolean;
  delay: number;
}

function Counter({ end, prefix, isInView, delay }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = end / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, end, delay]);

  return (
    <div className="font-title text-4xl md:text-5xl text-xposedde-red font-bold">
      {prefix}{count.toLocaleString('es-MX')}
    </div>
  );
}