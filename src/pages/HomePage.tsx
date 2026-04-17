import { HeroSlider } from '../components/HeroSlider';
import { ScreensCarousel } from '../components/ScreensCarousel';
import { ServicesGrid } from '../components/ServicesGrid';
import { ExperienceSection } from '../components/ExperienceSection';
import { TestimonialsCarousel } from '../components/TestimonialsCarousel';
import { XpoDigitalSection } from '../components/XpoDigitalSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { ChatAssistant } from '../components/ChatAssistant';
import { Toaster } from '../components/ui/sonner';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Header } from '../components/Header';
import { Button } from '../components/ui/button';

export function HomePage() {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  const heroImages = [
    'https://imagenes.inedito.digital/XPOSEDDE/IMG_20231013_123501333.webp',
    'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/IMG_20250508_131022-1-scaled.webp',
    'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/imagen_2025-11-21_100906781.png',
    'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO.webp'
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header onOpenAssistant={() => setIsAssistantOpen(true)} />
      
      {/* Hero Section with Slider */}
      <HeroSlider images={heroImages} overlay="dark" showNavigation={false}>
        <div className="max-w-4xl py-[42px] px-[0px] py-[45px]">
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
            style={{ 
              fontFamily: "'Helvetica83HeavyExtended', sans-serif",
              fontWeight: 800,
              letterSpacing: '-2px'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            DISEÑO Y MONTAJE DE STANDS Y EXPOSICIONES
          </motion.h1>

          {/* Divider */}
          <motion.div 
            className="w-24 h-1 bg-xposedde-red mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          {/* Description */}
          <motion.p 
            className="font-body text-lg md:text-xl text-white/90 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Transformamos tu visión en experiencias inolvidables. Diseñamos, producimos y montamos stands personalizados que capturan la esencia de tu marca.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button 
              onClick={() => setIsAssistantOpen(true)}
              className="btn-xposedde-primary px-8 py-6 text-white shadow-xl hover:shadow-2xl transition-all group"
            >
              <span style={{ fontFamily: "'Helvetica83HeavyExtended', sans-serif", fontWeight: 800 }}>Cotiza tu Stand</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </HeroSlider>
      
      <ScreensCarousel onOpenAssistant={() => setIsAssistantOpen(true)} />
      <ServicesGrid onOpenAssistant={() => setIsAssistantOpen(true)} />
      <XpoDigitalSection />
      <ExperienceSection />
      <TestimonialsCarousel />
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
            
            {/* Pulse Animation */}
            <span className="absolute inset-0 rounded-full bg-xposedde-red animate-ping opacity-20"></span>
            
            {/* Tooltip */}
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