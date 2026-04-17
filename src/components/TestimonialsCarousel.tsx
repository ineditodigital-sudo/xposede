import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useDragCarousel } from '../hooks/useDragCarousel';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Testimonial {
  quote: string;
  company: string;
  logo: string;
  id: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: 'Buena atención, presentación de propuesta y ajuste a presupuesto',
    company: 'UNIVERSIDAD DE ALTA ESPECIALIDAD EDUCATIVA',
    logo: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/LOGO%20UNADE.webp'
  },
  {
    id: 2,
    quote: 'Súper atención y servicio, ampliamente recomendables',
    company: 'Fusibles Protección',
    logo: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/LOGO%20FUSIBLES%20PROTECCI%C3%93N.webp'
  },
  {
    id: 3,
    quote: 'Hay confianza y muy buena disposición por parte de todo el equipo de XpoSedde y nos dieron mucho valor agregado. Gracias',
    company: 'GIPAN',
    logo: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/LOGO%20GIPAN.webp'
  },
  {
    id: 4,
    quote: 'Muy bueno el seguimiento y la atención de inicio a fin',
    company: 'MOLINO DEUSTO',
    logo: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/LOGO%20DEUSTO.webp'
  },
  {
    id: 5,
    quote: 'Entienden al cliente a la perfección y son muy rápidos',
    company: 'GP ELECTROMECÁNICA',
    logo: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/LOGO%20GP%20ELECTRO%20MECANICA.webp'
  },
  {
    id: 6,
    quote: 'Hubo buena aportación de ideas y resolución. Quedamos satisfechos',
    company: 'CONPLASA',
    logo: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/LOGO%20CONPLASA.webp'
  }
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Determinar cuántos testimonios mostrar según el tamaño de pantalla
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Actualizar slidesToShow basado en el tamaño de ventana
  useState(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  const maxIndex = Math.max(0, testimonials.length - slidesToShow);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const { handleDragStart, handleDragEnd } = useDragCarousel({
    currentIndex,
    maxIndex,
    onNext: handleNext,
    onPrev: handlePrev
  });

  return (
    <section className="relative py-20 bg-white overflow-hidden" ref={sectionRef}>
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-xposedde-red/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-xposedde-red/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container-xposedde relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            className="font-title text-[28px] sm:text-[33.6px] md:text-[42px] text-gray-900 mb-6 font-[Helvetica] font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            ¿Qué dicen los clientes?
          </motion.h2>
          
          <motion.div 
            className="w-24 h-1 bg-xposedde-red mx-auto mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>

          <motion.p 
            className="font-body text-lg text-xposedde-gray max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Algunos de nuestros clientes nos aman y nosotros también.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          {/* Custom Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 bg-white hover:bg-xposedde-red text-xposedde-red hover:text-white w-12 h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 bg-white hover:bg-xposedde-red text-xposedde-red hover:text-white w-12 h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden px-4">
            <motion.div
              className="flex gap-6 cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              animate={{
                x: `calc(-${currentIndex * (100 / slidesToShow)}% - ${currentIndex * 24}px)`
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / slidesToShow}% - ${(slidesToShow - 1) * 24 / slidesToShow}px)` }}
                >
                  <div className="bg-gray-50 rounded-2xl p-8 h-full border border-gray-200 hover:border-xposedde-red hover:shadow-xl transition-all duration-300 group relative">
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Quote className="w-16 h-16 text-xposedde-red" />
                    </div>

                    {/* Testimonial Content */}
                    <div className="relative z-10">
                      <div className="mb-6">
                        <Quote className="w-10 h-10 text-xposedde-red mb-4" />
                      </div>
                      
                      <p className="font-body text-gray-700 leading-relaxed min-h-[120px] flex items-center">
                        {testimonial.quote}
                      </p>

                      {/* Bottom Accent Line */}
                      <div className="mt-6 pt-6 border-t border-gray-300">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-xposedde-red rounded-full"></div>
                            <div className="w-8 h-0.5 bg-xposedde-red"></div>
                          </div>
                          <p className="font-body text-sm text-gray-600 flex-1">
                            {testimonial.company}
                          </p>
                          <ImageWithFallback 
                            src={testimonial.logo}
                            alt={testimonial.company}
                            className="w-20 h-20 object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Navigation */}
        </motion.div>
      </div>
    </section>
  );
}