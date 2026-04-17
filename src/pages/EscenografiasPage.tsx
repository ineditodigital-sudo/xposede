import { MessageCircle, ChevronLeft, ChevronRight, ArrowLeft, Building2, Boxes, Palette, ShoppingBag, Lightbulb, Grid3x3 } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactSection } from '../components/ContactSection';
import { ChatAssistant } from '../components/ChatAssistant';
import { Toaster } from '../components/ui/sonner';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { HeroSlider } from '../components/HeroSlider';
import { Lightbox } from '../components/Lightbox';

// Renders de Escenografías
const renderImages = [
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESCENOGRAFIAS/RENDERS/1.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESCENOGRAFIAS/RENDERS/2.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESCENOGRAFIAS/RENDERS/3.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESCENOGRAFIAS/RENDERS/4.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESCENOGRAFIAS/RENDERS/5.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESCENOGRAFIAS/RENDERS/6.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESCENOGRAFIAS/RENDERS/7.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESCENOGRAFIAS/RENDERS/8.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESCENOGRAFIAS/RENDERS/9.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESCENOGRAFIAS/RENDERS/10.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESCENOGRAFIAS/RENDERS/11.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESCENOGRAFIAS/RENDERS/12.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESCENOGRAFIAS/RENDERS/13.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESCENOGRAFIAS/RENDERS/14.webp'
];

// Galería de proyectos
const galleryImages = [
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESCENOGRAFIAS/GALERIA/1.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESCENOGRAFIAS/GALERIA/2.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESCENOGRAFIAS/GALERIA/3.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESCENOGRAFIAS/GALERIA/5.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESCENOGRAFIAS/GALERIA/6.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESCENOGRAFIAS/GALERIA/7.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESCENOGRAFIAS/GALERIA/8.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESCENOGRAFIAS/GALERIA/9.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESCENOGRAFIAS/GALERIA/10.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESCENOGRAFIAS/GALERIA/11.webp?v=20260105',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESCENOGRAFIAS/GALERIA/12.webp?v=20260105',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESCENOGRAFIAS/GALERIA/13.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESCENOGRAFIAS/GALERIA/14.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESCENOGRAFIAS/GALERIA/15.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESCENOGRAFIAS/GALERIA/16.webp'
];

export function EscenografiasPage() {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [currentIndexGallery, setCurrentIndexGallery] = useState(0);
  const [currentIndexRenders, setCurrentIndexRenders] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header onOpenAssistant={() => setIsAssistantOpen(true)} />

      {/* Hero Section */}
      <HeroSlider
        images={[
          'https://xposedde.com.mx/wp-content/uploads/2025/03/IMG-20211026-WA0142.webp',
          'https://xposedde.com.mx/wp-content/uploads/2025/03/DSC_0160.webp',
          'https://xposedde.com.mx/wp-content/uploads/2025/03/IMG_20221103_201453872.webp',
          'https://xposedde.com.mx/wp-content/uploads/2025/03/IMG_20231013_123501333.webp',
        ]}
        overlay="red"
        showNavigation={false}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 group transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Volver a servicios
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <h1
              className="text-[24px] sm:text-[30px] md:text-[38px] lg:text-[42px] text-white leading-tight"
              style={{
                fontFamily: "'Helvetica83HeavyExtended', sans-serif",
                fontWeight: 800,
                letterSpacing: '-1.5px',
              }}
            >
              ESCENOGRAFÍAS
            </h1>
          </div>

          <div className="w-20 h-1 bg-white mb-6"></div>

          <p className="font-body text-base md:text-lg text-white/90 max-w-3xl">
            Con nuestro servicio de diseño y montaje de escenografías, nos aseguramos de que tu espacio se convierta en un reflejo fiel de tu visión, logrando un impacto visual que hará que tu evento sea único.
          </p>
        </motion.div>
      </HeroSlider>

      {/* Descubre Más Section */}
      <section className="py-12 bg-white">
        <div className="container-xposedde">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2
              className="text-[26px] sm:text-[32px] md:text-[38px] text-gray-900 mb-4 font-[Helvetica_Neue_LT_Std]"
              style={{
                fontWeight: 800,
                letterSpacing: '-1px',
              }}
            >
              DESCUBRE MÁS
            </h2>
            <div className="w-20 h-1 bg-xposedde-red mx-auto mb-6"></div>
            <p className="font-body text-base md:text-lg text-xposedde-gray max-w-4xl mx-auto leading-relaxed">
              Nos especializamos en la creación de escenografías personalizadas y proyectos a medida. Perfectas para lanzamientos, aniversarios, informes de logros, kickoffs, cumbres empresariales, summits de Innovación, workshops, bootcamps, rebranding, juntas estratégicas, ceremonias de certificación, evento de Networking, entre otros.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Renders de Escenografías */}
      <RendersSection 
        currentIndex={currentIndexRenders}
        setCurrentIndex={setCurrentIndexRenders}
        onOpenLightbox={openLightbox}
      />

      {/* Galería de Proyectos */}
      <GallerySection 
        currentIndex={currentIndexGallery}
        setCurrentIndex={setCurrentIndexGallery}
        onOpenLightbox={openLightbox}
      />

      {/* Más Servicios Section */}
      <MasServiciosSection />

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

      <ChatAssistant isOpen={isAssistantOpen} onClose={() => setIsAssistantOpen(false)} />

      <Lightbox
        isOpen={lightboxOpen}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
      />

      <Toaster />
    </div>
  );
}

// Sección de Renders
function RendersSection({ currentIndex, setCurrentIndex, onOpenLightbox }: { currentIndex: number, setCurrentIndex: (index: number) => void, onOpenLightbox: (images: string[], index: number) => void }) {
  const ref = useRef(null);
  
  // Determine items per view based on screen size
  const [itemsPerView, setItemsPerView] = useState(3);
  
  useEffect(() => {
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
  }, []);

  const maxIndex = Math.max(0, renderImages.length - 1);

  const nextSlide = () => {
    setCurrentIndex(Math.min(currentIndex + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(Math.max(currentIndex - 1, 0));
  };

  return (
    <section className="py-12 bg-white" ref={ref}>
      <div className="container-xposedde">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2
            className="text-[26px] sm:text-[32px] md:text-[38px] text-gray-900 mb-4 font-[Helvetica_Neue_LT_Std]"
            style={{
              fontWeight: 800,
              letterSpacing: '-1px',
            }}
          >
            CONOCE NUESTRO TRABAJO
          </h2>
          <div className="w-20 h-1 bg-xposedde-red mx-auto mb-6"></div>
          <p className="font-body text-base text-xposedde-gray max-w-2xl mx-auto">
            Visualiza tus ideas antes de hacerlas realidad con nuestros renders 3D de alta calidad.
          </p>
        </motion.div>

        <div className="w-full mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: `-${currentIndex * (100 / itemsPerView)}%`,
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {renderImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex-shrink-0 px-2.5"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full">
                    <div className="aspect-[4/3] relative overflow-hidden bg-white">
                      <div className="absolute inset-0 p-2 flex items-center justify-center">
                        <ImageWithFallback
                          src={image}
                          alt={`Proyecto ${index + 1}`}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Controles de navegación */}
          {renderImages.length > itemsPerView && (
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-xposedde-red hover:bg-xposedde-red hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentIndex === maxIndex}
                className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-xposedde-red hover:bg-xposedde-red hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Sección de Galería
function GallerySection({ currentIndex, setCurrentIndex, onOpenLightbox }: { currentIndex: number, setCurrentIndex: (index: number) => void, onOpenLightbox: (images: string[], index: number) => void }) {
  const ref = useRef(null);
  
  // Determine items per view based on screen size
  const [itemsPerView, setItemsPerView] = useState(3);
  
  useEffect(() => {
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
  }, []);

  const maxIndex = Math.max(0, galleryImages.length - 1);

  const nextSlide = () => {
    setCurrentIndex(Math.min(currentIndex + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(Math.max(currentIndex - 1, 0));
  };

  return (
    <section className="py-12 bg-gray-50" ref={ref}>
      <div className="container-xposedde">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2
            className="text-[26px] sm:text-[32px] md:text-[38px] text-gray-900 mb-4 font-[Helvetica_Neue_LT_Std]"
            style={{
              fontWeight: 800,
              letterSpacing: '-1px',
            }}
          >
            GALERÍA DE PROYECTOS
          </h2>
          <div className="w-20 h-1 bg-xposedde-red mx-auto mb-6"></div>
          <p className="font-body text-base text-xposedde-gray max-w-2xl mx-auto">
            Cada escenografía es una oportunidad para crear experiencias visuales únicas que conectan con tu audiencia.
          </p>
        </motion.div>

        <div className="w-full mx-auto">
          <div className="overflow-hidden mb-6">
            <motion.div
              className="flex"
              animate={{
                x: `-${currentIndex * (100 / itemsPerView)}%`,
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex-shrink-0 px-2.5"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div 
                    className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full cursor-pointer"
                    onClick={() => onOpenLightbox(galleryImages, index)}
                  >
                    <div className="aspect-[4/3] relative overflow-hidden bg-white">
                      <div className="absolute inset-0 p-2 flex items-center justify-center">
                        <ImageWithFallback
                          src={image}
                          alt={`Proyecto ${index + 1}`}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Controles de navegación */}
          {galleryImages.length > itemsPerView && (
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-xposedde-red hover:bg-xposedde-red hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentIndex === maxIndex}
                className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-xposedde-red hover:bg-xposedde-red hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Sección de Más Servicios
function MasServiciosSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const navigate = useNavigate();
  
  const otrosServicios = [
    { id: 'stands-diseno', name: 'Stands de Diseño' },
    { id: 'montaje-exposiciones', name: 'Montaje de Exposiciones' },
    { id: 'displays-pop', name: 'Displays POP' },
    { id: 'espacios-industriales', name: 'Espacios Industriales y Comerciales' },
    { id: 'asesoria-expos', name: 'Asesoría' },
  ];

  const getServiceIcon = (id: string) => {
    const iconMap: { [key: string]: typeof Boxes } = {
      'stands-diseno': Palette,
      'montaje-exposiciones': Building2,
      'displays-pop': ShoppingBag,
      'espacios-industriales': Grid3x3,
      'asesoria-expos': Lightbulb,
    };
    return iconMap[id] || Boxes;
  };

  return (
    <section className="py-10 bg-white" ref={ref}>
      <div className="container-xposedde">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h2 
            className="text-[24px] sm:text-[28px] md:text-[32px] text-gray-900 mb-3"
            style={{ 
              fontFamily: "'Helvetica83HeavyExtended', sans-serif",
              fontWeight: 800,
              letterSpacing: '-1px'
            }}
          >
            MÁS SERVICIOS
          </h2>
          <div className="w-16 h-1 bg-xposedde-red mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 max-w-6xl mx-auto">
          {otrosServicios.map((servicio, index) => {
            const Icon = getServiceIcon(servicio.id);
            return (
              <motion.button
                key={servicio.id}
                onClick={() => navigate(`/servicios/${servicio.id}`)}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white border-2 border-gray-200 hover:border-xposedde-red rounded-xl p-4 transition-all duration-300 hover:shadow-lg group text-center flex flex-col items-center justify-center gap-3 h-32"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center transition-colors flex-shrink-0">
                  <Icon className="w-6 h-6 text-xposedde-red transition-colors" />
                </div>
                <h3 className="font-body text-xs text-gray-900 transition-colors leading-tight">
                  {servicio.name}
                </h3>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}