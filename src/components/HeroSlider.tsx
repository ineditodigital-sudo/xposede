import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroSliderProps {
  images: string[];
  autoPlayInterval?: number;
  overlay?: 'red' | 'dark' | 'light';
  children?: React.ReactNode;
  showNavigation?: boolean;
}

export function HeroSlider({ 
  images, 
  autoPlayInterval = 5000, 
  overlay = 'red',
  children,
  showNavigation = true
}: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [images.length, autoPlayInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const overlayClasses = {
    red: 'bg-gradient-to-br from-xposedde-red/90 via-red-800/85 to-gray-900/90',
    dark: 'bg-gradient-to-br from-gray-900/90 via-gray-800/85 to-gray-900/90',
    light: 'bg-gradient-to-br from-white/20 via-gray-900/60 to-gray-900/80'
  };

  return (
    <section className="relative pt-28 pb-16 bg-gray-900 overflow-hidden">
      {/* Slider de imágenes */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <ImageWithFallback
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className={`absolute inset-0 ${overlayClasses[overlay]}`}></div>
      </div>

      {/* Botones de navegación */}
      {images.length > 1 && showNavigation && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all hover:scale-110 border border-white/30"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all hover:scale-110 border border-white/30"
            aria-label="Imagen siguiente"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </>
      )}

      {/* Indicadores de puntos */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Contenido */}
      <div className="container-xposedde relative z-10">
        {children}
      </div>
    </section>
  );
}