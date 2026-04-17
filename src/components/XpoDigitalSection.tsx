import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Monitor, Smartphone, Sparkles, Zap } from 'lucide-react';

export function XpoDigitalSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const features = [
    {
      icon: Monitor,
      title: 'Tótems Interactivos',
      description: 'Experiencias táctiles que cautivan a tu audiencia'
    },
    {
      icon: Sparkles,
      title: 'Pantallas LED',
      description: 'Tecnología visual de alto impacto'
    },
    {
      icon: Smartphone,
      title: 'Tarjetas Digitales',
      description: 'Comunicación moderna y sostenible'
    },
    {
      icon: Zap,
      title: 'Experiencia Visual',
      description: 'Stands que nadie puede ignorar'
    }
  ];

  return (
    <section id="nosotros" className="h-[85vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #B40D15 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-xposedde-red/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-xposedde-red/20 rounded-full blur-3xl"></div>

      <div className="container-xposedde relative z-10 py-8 max-h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          {/* Logo & Content */}
          <div>
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://cdn.xposedde.com.mx/repositorio/LOGOS/LOGO-XPODIGITAL-blanco-1024x342.png" 
                alt="XpoDigital Logo" 
                className="w-full max-w-[307px] h-auto object-contain"
              />
            </motion.div>

            <motion.div 
              className="divider-xposedde mb-4 bg-white"
              initial={{ width: 0 }}
              animate={isInView ? { width: 100 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            ></motion.div>

            <motion.p 
              className="font-body text-base md:text-lg text-white/90 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Con <span className="text-xposedde-red font-semibold">XPODIGITAL</span>, conviertes tu stand en una experiencia visual y tecnológica que nadie puede ignorar. Desde tótems interactivos hasta pantallas LED y tarjetas digitales, te damos las herramientas para impresionar, comunicar mejor y dejar huella.
            </motion.p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-3 bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-xposedde-red to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-subtitle text-white mb-1 text-sm">{feature.title}</h4>
                    <p className="font-body text-xs text-white/70">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <motion.div 
            className="relative h-full max-h-[500px] flex items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full">
              {/* Gradient Background with Pattern */}
              <div className="w-full h-[400px] bg-gradient-to-br from-xposedde-red via-red-700 to-red-900 relative">
                {/* Tech Pattern Overlay */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="tech-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                        <circle cx="25" cy="25" r="1" fill="white"/>
                        <line x1="0" y1="25" x2="50" y2="25" stroke="white" strokeWidth="0.5"/>
                        <line x1="25" y1="0" x2="25" y2="50" stroke="white" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#tech-grid)"/>
                  </svg>
                </div>

                {/* Central Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="relative"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ duration: 1, delay: 0.5, type: "spring" }}
                  >
                    <div className="w-40 h-40 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center border border-white/20">
                      <Monitor className="w-20 h-20 text-white" strokeWidth={1.5} />
                    </div>
                    
                    {/* Orbiting Icons */}
                    <motion.div
                      className="absolute -top-6 -right-6 w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    >
                      <Sparkles className="w-8 h-8 text-white" />
                    </motion.div>

                    <motion.div
                      className="absolute -bottom-5 -left-5 w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30"
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                    >
                      <Zap className="w-7 h-7 text-white" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <motion.div 
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl -z-10 border border-white/20"
              initial={{ scale: 0, rotate: 45 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}