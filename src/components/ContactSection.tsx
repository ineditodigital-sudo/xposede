import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Button } from './ui/button';
import { MessageCircle, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  onOpenAssistant: () => void;
}

export function ContactSection({ onOpenAssistant }: ContactSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container-xposedde">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl border border-gray-200 relative overflow-hidden">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-xposedde-red/10 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-xposedde-red/10 rounded-tr-full"></div>

            <div className="relative z-10 grid md:grid-cols-[auto_1fr_auto] gap-8 items-center">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6 }}
                className="w-24 h-24 flex-shrink-0 relative"
              >
                <img 
                  src="https://cdn.xposedde.com.mx/repositorio/LOGOS/LOGO%20XPOSSEDE%20COLORES%20GRIS.webp" 
                  alt="Xposedde Logo" 
                  className="w-full h-full object-contain"
                />
                {/* Registered Trademark Icon */}
                <span 
                  className="absolute text-gray-900 text-[8px] font-bold"
                  style={{ 
                    fontFamily: 'Arial, sans-serif',
                    top: 'calc(0.25rem + 20px)',
                    right: '-5px'
                  }}
                >
                  ®
                </span>
              </motion.div>

              {/* Content */}
              <div className="text-center md:text-left">
                <h3 className="font-title text-xl md:text-2xl text-gray-900 mb-2 font-bold">
                  ¿Listo para empezar tu proyecto?
                </h3>
                <p className="font-body text-gray-600">
                  Nuestro asistente inteligente está disponible 24/7 para ayudarte con cotizaciones y asesoría personalizada.
                </p>
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mx-auto md:mx-0"
              >
                <Button
                  onClick={onOpenAssistant}
                  size="lg"
                  className="bg-xposedde-red hover:bg-xposedde-red-hover text-white font-body font-bold px-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <MessageCircle className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Hablar con Asistente
                  <Sparkles className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}