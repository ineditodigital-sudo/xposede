import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect, useCallback, useState } from 'react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[] | { image: string; name: string; code?: string }[];
  currentIndex: number;
  showInfo?: boolean;
  rotateIndices?: number[];
}

export function Lightbox({ isOpen, onClose, images, currentIndex, showInfo = false, rotateIndices = [] }: LightboxProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(currentIndex);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  // Update active index when currentIndex changes
  useEffect(() => {
    setActiveIndex(currentIndex);
  }, [currentIndex]);
  
  // Ensure activeIndex is within bounds
  const safeIndex = Math.max(0, Math.min(activeIndex, images?.length - 1 || 0));
  const totalImages = images?.length || 0;

  const handlePrevious = useCallback(() => {
    if (totalImages === 0) return;
    setActiveIndex(safeIndex === 0 ? totalImages - 1 : safeIndex - 1);
  }, [safeIndex, totalImages]);

  const handleNext = useCallback(() => {
    if (totalImages === 0) return;
    setActiveIndex(safeIndex === totalImages - 1 ? 0 : safeIndex + 1);
  }, [safeIndex, totalImages]);

  const getCurrentImage = useCallback(() => {
    if (!images || images.length === 0) return '';
    const item = images[safeIndex];
    if (!item) return '';
    return typeof item === 'string' ? item : item.image;
  }, [images, safeIndex]);

  const getCurrentInfo = useCallback(() => {
    if (!images || images.length === 0) return null;
    const item = images[safeIndex];
    if (!item || typeof item === 'string') return null;
    return { name: item.name, code: item.code };
  }, [images, safeIndex]);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handlePrevious, handleNext, onClose]);

  // Touch handlers for swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrevious();
    }

    // Reset
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Don't render if not visible or no images - AFTER all hooks
  if (!isVisible || !images || images.length === 0) return null;

  const info = getCurrentInfo();
  const currentImage = getCurrentImage();

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all z-10"
        aria-label="Cerrar"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Image Counter */}
      <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white font-body text-sm">
        {safeIndex + 1} / {totalImages}
      </div>

      {/* Previous Button */}
      {totalImages > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrevious();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-xposedde-red backdrop-blur-sm rounded-full flex items-center justify-center transition-all hover:scale-110 z-10"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Next Button */}
      {totalImages > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-xposedde-red backdrop-blur-sm rounded-full flex items-center justify-center transition-all hover:scale-110 z-10"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Image Container with Touch Support */}
      <div
        className={`relative max-w-7xl max-h-[90vh] w-full flex flex-col items-center transition-all duration-300 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <ImageWithFallback
            key={`lightbox-${safeIndex}`}
            src={currentImage}
            alt={info?.name || `Imagen ${safeIndex + 1}`}
            className={`max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-lg shadow-2xl transition-opacity duration-300 ${rotateIndices.includes(safeIndex) ? 'rotate-90' : ''}`}
          />
        </div>

        {/* Image Info */}
        {showInfo && info && (
          <div className="mt-4 bg-black/50 backdrop-blur-sm px-6 py-3 rounded-xl">
            <p className="font-body text-white text-center">
              {info.name}
              {info.code && (
                <span className="text-xposedde-red ml-2">• {info.code}</span>
              )}
            </p>
          </div>
        )}
      </div>

      {/* Keyboard Hints */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-6 py-2 rounded-full text-white/60 font-body text-xs flex items-center gap-4">
        <span>← → Navegar</span>
        <span>•</span>
        <span>ESC Cerrar</span>
        <span>•</span>
        <span className="md:hidden">Deslizar</span>
      </div>
    </div>
  );
}