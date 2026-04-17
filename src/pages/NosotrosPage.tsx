import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ExperienceSection } from '../components/ExperienceSection';
import { AssociationsSection } from '../components/AssociationsSection';
import { MissionVisionSection } from '../components/MissionVisionSection';
import { ContactSection } from '../components/ContactSection';
import { ChatAssistant } from '../components/ChatAssistant';
import { Toaster } from '../components/ui/sonner';
import { MessageCircle, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef } from 'react';
import { useInView } from 'motion/react';

export function NosotrosPage() {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const videoRef = useRef(null);
  const isVideoInView = useInView(videoRef, { once: true, amount: 0.2 });

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header onOpenAssistant={() => setIsAssistantOpen(true)} />
      
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-gray-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://xposedde.com.mx/wp-content/uploads/2025/01/ESCENOGRAFIAS-scaled.webp"
            alt="Exhibition background"
            className="w-full h-full object-cover"
          />
          {/* Red Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-xposedde-red/90 via-red-800/85 to-gray-900/90"></div>
        </div>

        <div className="container-xposedde relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 
              className="text-[42px] sm:text-[56px] md:text-[70px] text-white mb-6"
              style={{ 
                fontFamily: "'Helvetica83HeavyExtended', sans-serif",
                fontWeight: 800,
                letterSpacing: '-1px'
              }}
            >
              NOSOTROS
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="font-body text-xl text-white/90">
              Somos expertos en diseño, montaje de stands y creación de experiencias memorables para exposiciones y eventos corporativos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tu Aliado con Experiencia - Video Section */}
      <section className="section-spacing bg-white" ref={videoRef}>
        <div className="container-xposedde">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVideoInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 
                className="text-[32px] sm:text-[42px] md:text-[52px] text-gray-900 mb-6"
                style={{ 
                  fontFamily: "'Helvetica83HeavyExtended', sans-serif",
                  fontWeight: 800,
                  letterSpacing: '-1px'
                }}
              >
                TU ALIADO CON EXPERIENCIA
              </h2>
              <div className="w-24 h-1 bg-xposedde-red mb-8"></div>
              <p className="font-body text-gray-600 text-lg leading-relaxed">
                Nuestra base de trabajo es la comunicación entre todas las áreas porque cuidamos los proyectos de nuestros clientes como si fueran propios
              </p>
            </motion.div>

            {/* Video Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVideoInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/cgh3C12nHyw"
                  title="Xposedde Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
                {/* Decorative Frame */}
                <div className="absolute inset-0 border-2 border-xposedde-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
              </div>

              {/* Shadow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-xposedde-red/20 to-red-700/20 rounded-2xl blur-2xl -z-10 opacity-40"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Numeralia */}
      <ExperienceSection />

      {/* Asociaciones */}
      <AssociationsSection />

      {/* Misión, Visión y Propósito */}
      <MissionVisionSection />

      {/* CTA Banner */}
      <ContactSection onOpenAssistant={() => setIsAssistantOpen(true)} />
      
      <Footer />
      
      {/* Floating Assistant Button */}
      <AnimatePresence>
        {!isAssistantOpen && (
          <motion.button
            onClick={() => setIsAssistantOpen(true)}
            className="fixed bottom-8 right-8 w-16 h-16 bg-xposedde-red hover:bg-xposedde-red-hover text-white rounded-full shadow-xl flex items-center justify-center z-40 group"
            aria-label="Abrir asistente virtual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <MessageCircle className="w-7 h-7" />
            <span className="absolute inset-0 rounded-full bg-xposedde-red animate-ping opacity-20"></span>
            
            <motion.div
              className="absolute right-full mr-4 bg-gray-900 text-white px-4 py-2 rounded font-body text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"
              initial={{ x: 10, opacity: 0 }}
              whileHover={{ x: 0, opacity: 1 }}
            >
              Asistente Virtual
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                <div className="border-[6px] border-transparent border-l-gray-900"></div>
              </div>
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      <ChatAssistant 
        isOpen={isAssistantOpen} 
        onClose={() => setIsAssistantOpen(false)} 
      />
      
      <Toaster />
    </div>
  );
}