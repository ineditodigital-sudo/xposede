import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onOpenAssistant: () => void;
}

export function HeroSection({ onOpenAssistant }: HeroSectionProps) {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://xposedde.com.mx/wp-content/uploads/2025/02/S10-1.webp"
          alt="Diseño de Stands"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-xposedde w-full py-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="badge-xposedde">
              Especialistas en Diseño de Stands
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            className="font-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            DISEÑO Y MONTAJE DE STANDS Y EXPOSICIONES
          </motion.h1>

          {/* Divider */}
          <motion.div 
            className="divider-xposedde bg-xposedde-red mb-6"
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>

          {/* Description */}
          <motion.p 
            className="font-body text-lg sm:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Transformamos tus ideas en experiencias memorables. Creamos stands únicos que destacan tu marca en cada exposición.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button 
              onClick={onOpenAssistant}
              className="btn-xposedde-primary inline-flex items-center justify-center gap-2"
            >
              Iniciar Asistente Virtual
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              onClick={scrollToContact}
              className="btn-xposedde-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-xposedde-red inline-flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              Ver Portafolio
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-white/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {[
              { value: '+500', label: 'Stands Diseñados' },
              { value: '+15', label: 'Años de Experiencia' },
              { value: '100%', label: 'Satisfacción' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="text-center sm:text-left"
              >
                <div className="font-title text-3xl sm:text-4xl text-xposedde-red mb-2">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <motion.div 
            className="w-1.5 h-2.5 bg-white/70 rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}