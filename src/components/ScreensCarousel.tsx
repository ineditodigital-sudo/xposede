import { useState, useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import { useDragCarousel } from '../hooks/useDragCarousel';
import pantallasLedImg from '../assets/pantallas-led-curva.jpg';

interface ScreensCarouselProps {
  onOpenAssistant: () => void;
}

const screens = [
  {
    id: 1,
    title: 'TOTEM iPHONE 42\" USB',
    description: 'Display innovador con diseño de iPhone de 42 pulgadas, perfecto para exhibiciones modernas',
    features: ['Diseño iPhone', 'Alta Resolución', 'Ultra Llamativo'],
    image: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/TOTEM-IPHONE.webp',
    badge: 'NUEVO'
  },
  {
    id: 2,
    title: 'TOTEM iPHONE TOUCH 55\"',
    description: 'Totem interactivo con pantalla táctil de 55 pulgadas y diseño iPhone premium',
    features: ['Pantalla Táctil', '55 Pulgadas', 'Interactivo'],
    image: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/TOTEM-IPHONE.webp',
    badge: 'POPULAR'
  },
  {
    id: 3,
    title: 'PANTALLAS LED',
    description: 'Pantallas LED de última generación para máximo impacto visual en tu stand',
    features: ['Alta Definición', 'Gran Formato', 'Máximo Impacto'],
    image: pantallasLedImg,
    badge: 'PREMIUM'
  },
  {
    id: 4,
    title: 'LAYOUT DIGITALES PARA EXPOS',
    description: 'Diseños digitales profesionales para planificación y visualización de tu exposición',
    features: ['Diseño Digital', 'Visualización 3D', 'Planificación'],
    image: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/imagen_2025-07-30_115513162.png',
    badge: 'EXCLUSIVO'
  },
  {
    id: 5,
    title: 'APLICACIONES QR PARA EXPOS',
    description: 'Tecnología QR interactiva para conectar con tus visitantes de manera innovadora',
    features: ['Código QR', 'Interactivo', 'Contactless'],
    image: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/cerrar-amigos-escaneando-menu-qr-1-1536x811.png',
    badge: 'TENDENCIA'
  },
  {
    id: 6,
    title: 'TARJETA DIGITAL DE PRESENTACIÓN',
    description: 'Tarjetas digitales modernas para networking profesional en eventos',
    features: ['Digital', 'Networking', 'Eco-friendly'],
    image: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/manos-sosteniendo-una-tarjeta-de-credito-y-un-telefono-simulacro-1-1536x811.png',
    badge: 'INNOVACIÓN'
  }
];

export function ScreensCarousel({ onOpenAssistant }: ScreensCarouselProps) {
  const ref = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  
  // Determine items per view based on screen size
  const [itemsPerView, setItemsPerView] = useState(3);
  
  useState(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  });

  const maxIndex = Math.max(0, screens.length - 1);

  const nextSlide = () => {
    setCurrentIndex(Math.min(currentIndex + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(Math.max(currentIndex - 1, 0));
  };

  const { handleDragStart, handleDragEnd } = useDragCarousel({
    currentIndex,
    maxIndex,
    onNext: nextSlide,
    onPrev: prevSlide
  });

  // Handle card click - redirect to XPO Digital page for products 1-6
  const handleCardClick = (screenId: number) => {
    if (screenId >= 1 && screenId <= 6) {
      // Navigate to XPO Digital page with hash to scroll to product
      navigate(`/xpo-digital#producto-${screenId}`);
    } else {
      // Open assistant for other products
      onOpenAssistant();
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #B40D15 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container-xposedde relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
            <h2 className="font-title sm:text-[33.6px] md:text-[42px] text-gray-900 mb-6 font-[Helvetica_Neue_LT_Std] font-bold text-[40px]">
              NOVEDADES
            </h2>
            <div className="w-24 h-1 bg-xposedde-red mx-auto mb-6"></div>
            <p className="font-body text-lg sm:text-xl text-xposedde-gray max-w-3xl mx-auto">
              Descubre nuestros productos más recientes y tecnología de vanguardia para crear experiencias únicas que destacan tu marca
            </p>
        </div>

        {/* Carousel */}
        <div className="relative w-full mx-auto mb-12">
          <div className="overflow-hidden">
            <motion.div
              className="flex cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              animate={{
                x: `-${currentIndex * (100 / itemsPerView)}%`,
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {screens.map((screen, index) => (
                <motion.div
                  key={screen.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 px-2.5"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div 
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer h-full"
                    onClick={() => handleCardClick(screen.id)}
                  >
                    {/* Image */}
                    <div className="relative h-80 overflow-hidden">
                      <ImageWithFallback
                        src={screen.image}
                        alt={screen.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Product Name Label */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="inline-block px-4 py-2 bg-white/95 backdrop-blur-sm rounded-lg">
                          <h3 className="font-subtitle text-sm text-gray-900">
                            {screen.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Controles de navegación */}
          {screens.length > itemsPerView && (
            <>
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-xposedde-red hover:bg-xposedde-red hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed z-10"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentIndex === maxIndex}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-xposedde-red hover:bg-xposedde-red hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed z-10"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button
            onClick={onOpenAssistant}
            className="btn-xposedde-primary inline-flex items-center justify-center gap-2"
            size="lg"
          >
            Consulta con un XPO Asesor
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}