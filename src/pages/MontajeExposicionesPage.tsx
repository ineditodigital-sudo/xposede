import { MessageCircle, ChevronLeft, ChevronRight, ArrowLeft, Building2, Boxes, Palette, ShoppingBag, Lightbulb, Grid3x3 } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { useState, useRef, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { HeroSlider } from '../components/HeroSlider';
import { Lightbox } from '../components/Lightbox';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ChatAssistant } from '../components/ChatAssistant';
import { ContactSection } from '../components/ContactSection';
import { Toaster } from '../components/ui/sonner';
import Slider from 'react-slick';

// Tipos de stands
const standsInstitucionales = [
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/STANDS-INSTITUCIONALES/1.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/STANDS-INSTITUCIONALES/2.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/STANDS-INSTITUCIONALES/3.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/STANDS-INSTITUCIONALES/4.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/STANDS-INSTITUCIONALES/5.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/STANDS-INSTITUCIONALES/6.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/STANDS-INSTITUCIONALES/7.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/STANDS-INSTITUCIONALES/8.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/STANDS-INSTITUCIONALES/9.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/STANDS-INSTITUCIONALES/10.webp'
];

const arcosBienvenida = [
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ARCOS-DE-BIENVENIDA/1.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ARCOS-DE-BIENVENIDA/2.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ARCOS-DE-BIENVENIDA/3.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ARCOS-DE-BIENVENIDA/4.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ARCOS-DE-BIENVENIDA/5.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ARCOS-DE-BIENVENIDA/6.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ARCOS-DE-BIENVENIDA/7.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ARCOS-DE-BIENVENIDA/8.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ARCOS-DE-BIENVENIDA/9.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ARCOS-DE-BIENVENIDA/10.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ARCOS-DE-BIENVENIDA/11.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ARCOS-DE-BIENVENIDA/12.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ARCOS-DE-BIENVENIDA/13.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ARCOS-DE-BIENVENIDA/14.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ARCOS-DE-BIENVENIDA/15.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ARCOS-DE-BIENVENIDA/16.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ARCOS-DE-BIENVENIDA/17.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ARCOS-DE-BIENVENIDA/18.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ARCOS-DE-BIENVENIDA/19.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ARCOS-DE-BIENVENIDA/20.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ARCOS-DE-BIENVENIDA/21.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ARCOS-DE-BIENVENIDA/22.webp'
];

const estacionesRegistro = [
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ESTACIONES-DE-REGISTRO/1.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ESTACIONES-DE-REGISTRO/2.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ESTACIONES-DE-REGISTRO/3.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ESTACIONES-DE-REGISTRO/4.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ESTACIONES-DE-REGISTRO/5.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ESTACIONES-DE-REGISTRO/6.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ESTACIONES-DE-REGISTRO/7.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ESTACIONES-DE-REGISTRO/8.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ESTACIONES-DE-REGISTRO/9.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ESTACIONES-DE-REGISTRO/10.webp'
];

const pabellones = [
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/PABELLONES/1.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/PABELLONES/2.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/PABELLONES/3.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/PABELLONES/4.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/PABELLONES/5.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/PABELLONES/6.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/PABELLONES/7.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/PABELLONES/8.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/PABELLONES/9.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/PABELLONES/10.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/PABELLONES/11.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/PABELLONES/12.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/PABELLONES/13.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/PABELLONES/14.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/PABELLONES/15.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/PABELLONES/16.webp'
];

const escenografias = [
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ESCENOGRAFIAS/1.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ESCENOGRAFIAS/2.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ESCENOGRAFIAS/3.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ESCENOGRAFIAS/4.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ESCENOGRAFIAS/5.webp'
];

// Galería de imágenes
const galleryImages = [
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/1.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/2.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/3.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/4.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/5.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/6.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/7.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/8.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/9.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/10.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/11.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/12.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/13.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/14.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/15.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/16.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/17.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/18.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/19.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/20.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/21.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/22.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/30.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/31.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/32.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/33.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/34.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/35.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/36.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/37.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/38.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/39.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/40.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/41.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/42.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/43.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/44.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/45.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/46.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/47.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/GALERIA/48.webp'
];

// Logos de exposiciones
const expoLogosData = [
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ESCENOGRAFIAS/gilsa.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ESCENOGRAFIAS/maen_logo-1%201.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ESCENOGRAFIAS/maraton.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ESCENOGRAFIAS/vacaciones.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/expo%20industrial.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/LOGO%20CEREXPO.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/unipania.webp'
];

export function MontajeExposicionesPage() {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const sliderRef = useRef<any>(null);
  const [currentIndexInstitucionales, setCurrentIndexInstitucionales] = useState(0);
  const [currentIndexArcos, setCurrentIndexArcos] = useState(0);
  const [currentIndexRegistro, setCurrentIndexRegistro] = useState(0);
  const [currentIndexPabellones, setCurrentIndexPabellones] = useState(0);
  const [currentIndexEscenografias, setCurrentIndexEscenografias] = useState(0);
  const [currentIndexGallery, setCurrentIndexGallery] = useState(0);
  const [currentIndexExpos, setCurrentIndexExpos] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxRotateIndices, setLightboxRotateIndices] = useState<number[]>([]);

  const openLightbox = (images: string[], index: number, rotateIndices: number[] = []) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxRotateIndices(rotateIndices);
    setLightboxOpen(true);
  };

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '20px',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header onOpenAssistant={() => setIsAssistantOpen(true)} />

      {/* Hero Section */}
      <HeroSlider
        images={[
          'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ESCENOGRAFIAS/4.webp',
          'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ESCENOGRAFIAS/5.webp',
          'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ESCENOGRAFIAS/1.webp',
          'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ESCENOGRAFIAS/2.webp',
          'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES/ESCENOGRAFIAS/4.webp',
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
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h1
              className="text-[24px] sm:text-[30px] md:text-[38px] lg:text-[42px] text-white leading-tight"
              style={{
                fontFamily: "'Helvetica83HeavyExtended', sans-serif",
                fontWeight: 800,
                letterSpacing: '-1.5px',
              }}
            >
              MONTAJE DE EXPOSICIONES
            </h1>
          </div>

          <div className="w-20 h-1 bg-white mb-6"></div>

          <p className="font-body text-base md:text-lg text-white/90 max-w-3xl mb-8">
            Tu aliado estratégico en el montaje de exposiciones. Con nuestra experiencia, no solo damos vida a tu evento, sino que también impulsamos su crecimiento y éxito en cada edición.
          </p>

          {/* Asociaciones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <p className="font-body-bold text-sm text-white/80 uppercase tracking-wider">
              Respaldados por:
            </p>
            <div className="flex flex-wrap items-center gap-6">
              {/* AMPROFEC */}
              <a
                href="https://www.amprofec.org/co-expo"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
                  <ImageWithFallback
                    src="https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/logo-amprofec-1536x1536.webp"
                    alt="AMPROFEC"
                    className="h-12 w-auto object-contain brightness-0 invert"
                  />
                </div>
              </a>

              {/* CMS */}
              <a
                href="https://meetingsmexico.com/educacion/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
                  <ImageWithFallback
                    src="https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/logo-cms-1-1536x1177.webp"
                    alt="CMS"
                    className="h-12 w-auto object-contain brightness-0 invert"
                  />
                </div>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </HeroSlider>

      {/* Stands Institucionales */}
      <StandTypeSection
        title="STANDS INSTITUCIONALES"
        stands={standsInstitucionales}
        delay={0}
        currentIndex={currentIndexInstitucionales}
        setCurrentIndex={setCurrentIndexInstitucionales}
        onOpenLightbox={openLightbox}
      />

      {/* Arcos de Bienvenida */}
      <StandTypeSection
        title="ARCOS DE BIENVENIDA"
        stands={arcosBienvenida}
        delay={0.2}
        bgColor="bg-gray-50"
        currentIndex={currentIndexArcos}
        setCurrentIndex={setCurrentIndexArcos}
        onOpenLightbox={openLightbox}
      />

      {/* Estaciones de Registro */}
      <StandTypeSection
        title="ESTACIONES DE REGISTRO"
        stands={estacionesRegistro}
        delay={0.4}
        currentIndex={currentIndexRegistro}
        setCurrentIndex={setCurrentIndexRegistro}
        onOpenLightbox={openLightbox}
      />

      {/* Pabellones */}
      <StandTypeSection
        title="PABELLONES"
        stands={pabellones}
        delay={0.6}
        bgColor="bg-gray-50"
        currentIndex={currentIndexPabellones}
        setCurrentIndex={setCurrentIndexPabellones}
        onOpenLightbox={openLightbox}
      />

      {/* Escenografías */}
      <StandTypeSection
        title="ESCENOGRAFÍAS"
        stands={escenografias}
        delay={0.8}
        currentIndex={currentIndexEscenografias}
        setCurrentIndex={setCurrentIndexEscenografias}
        onOpenLightbox={openLightbox}
      />

      {/* Expos Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-xposedde">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-10"
          >
            <h2
              className="text-[26px] sm:text-[32px] md:text-[38px] text-gray-900 mb-4 font-[Helvetica_Neue_LT_Std]"
              style={{
                fontWeight: 800,
                letterSpacing: '-1px',
              }}
            >
              GRANDES EXPOSICIONES
            </h2>
            <div className="w-20 h-1 bg-xposedde-red mx-auto mb-4"></div>
            <p className="font-body text-base text-xposedde-gray">
              Estas son solo algunas de las expos en las que hemos trabajado en los últimos años. Desde el diseño del layout hasta la logística, montaje, desmontaje y atención al expositor, nos aseguramos de que cada detalle cuente. Siempre estamos a tu lado.
            </p>
          </motion.div>

          {/* Carrusel de Logos de Exposiciones */}
          <ExposCarousel />
        </div>
      </section>

      {/* Galería en Carrusel */}
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
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        rotateIndices={lightboxRotateIndices}
      />

      <Toaster />
    </div>
  );
}

// Componente para cada tipo de stand
interface StandTypeSectionProps {
  title: string;
  stands: Array<string>;
  delay?: number;
  bgColor?: string;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  onOpenLightbox: (images: string[], index: number, rotateIndices?: number[]) => void;
}

function StandTypeSection({ title, stands, delay = 0, bgColor = 'bg-white', currentIndex, setCurrentIndex, onOpenLightbox }: StandTypeSectionProps) {
  const ref = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(true);
  
  // Determine items per view based on screen size
  const [itemsPerView, setItemsPerView] = useState(4);
  
  // Crear array infinito duplicando elementos
  const infiniteStands = useMemo(() => {
    return [...stands, ...stands, ...stands];
  }, [stands]);
  
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(2);
      } else if (window.innerWidth < 768) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };
    
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Iniciar en el segundo conjunto
  useEffect(() => {
    setCurrentIndex(stands.length);
  }, [stands.length, setCurrentIndex]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
  };

  // Detectar cuando llega al final o al inicio y hacer el salto sin animación
  useEffect(() => {
    if (currentIndex >= stands.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(stands.length);
      }, 500);
    } else if (currentIndex < stands.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(stands.length * 2 - 1);
      }, 500);
    }
  }, [currentIndex, stands.length]);

  const getTranslateX = () => {
    if (!containerRef.current) return 0;
    const container = containerRef.current;
    const firstItem = container.querySelector('.carousel-item-stand') as HTMLElement;
    if (!firstItem) return 0;
    
    const itemWidth = firstItem.offsetWidth;
    const gap = window.innerWidth >= 768 ? 10 : 8;
    return -(currentIndex * (itemWidth + gap));
  };

  return (
    <section className={`py-12 ${bgColor}`} ref={ref}>
      <div className="container-xposedde px-4 md:p-[0px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay }}
          className="text-center mb-8"
        >
          <h2
            className="text-[26px] sm:text-[32px] md:text-[38px] text-gray-900 mb-4"
            style={{
              fontFamily: "'Helvetica83HeavyExtended', sans-serif",
              fontWeight: 800,
              letterSpacing: '-1px',
            }}
          >
            {title}
          </h2>
          <div className="w-20 h-1 bg-xposedde-red mx-auto"></div>
        </motion.div>

        <div className="w-full mx-auto">
          <div className="overflow-hidden mb-6" ref={containerRef}>
            <motion.div
              className="flex gap-2 md:gap-2.5"
              animate={{
                x: getTranslateX(),
              }}
              transition={isTransitioning ? { duration: 0.5, ease: 'easeInOut' } : { duration: 0 }}
            >
              {infiniteStands.map((stand, index) => (
                <div
                  key={index}
                  className="min-w-[calc(50%-6px)] md:min-w-[calc(25%-9px)] flex-shrink-0 carousel-item-stand"
                >
                  <div 
                    className="bg-white rounded-xl md:rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group h-[180px] md:h-[240px] cursor-pointer"
                    onClick={() => onOpenLightbox(stands, index % stands.length)}
                  >
                    <div className="w-full h-full p-2 flex items-center justify-center">
                      <ImageWithFallback
                        src={stand}
                        alt={`${title} ${(index % stands.length) + 1}`}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Controles de navegación */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-gray-900 hover:bg-xposedde-red rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-gray-900 hover:bg-xposedde-red rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
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
    { id: 'escenografias-personalizadas', name: 'Escenografías' },
    { id: 'displays-pop', name: 'Displays POP' },
    { id: 'espacios-industriales', name: 'Espacios Industriales y Comerciales' },
  ];

  const getServiceIcon = (id: string) => {
    const iconMap: { [key: string]: typeof Boxes } = {
      'stands-diseno': Palette,
      'escenografias-personalizadas': Grid3x3,
      'displays-pop': ShoppingBag,
      'espacios-industriales': Building2,
    };
    return iconMap[id] || Boxes;
  };

  return (
    <section className="py-10 bg-gray-50" ref={ref}>
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-5xl mx-auto justify-items-center">
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
                className="bg-white border-2 border-gray-200 hover:border-xposedde-red rounded-xl p-4 transition-all duration-300 hover:shadow-lg group text-center flex flex-col items-center justify-center gap-3 h-32 w-full"
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

// Sección de Galería
function GallerySection({ currentIndex, setCurrentIndex, onOpenLightbox }: { currentIndex: number, setCurrentIndex: (index: number) => void, onOpenLightbox: (images: string[], index: number, rotateIndices?: number[]) => void }) {
  const ref = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(true);
  
  // Determine items per view based on screen size
  const [itemsPerView, setItemsPerView] = useState(4);
  
  // Crear array infinito duplicando elementos
  const infiniteGallery = useMemo(() => {
    return [...galleryImages, ...galleryImages, ...galleryImages];
  }, []);
  
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(2);
      } else if (window.innerWidth < 768) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };
    
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Iniciar en el segundo conjunto
  useEffect(() => {
    setCurrentIndex(galleryImages.length);
  }, [setCurrentIndex]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
  };

  // Detectar cuando llega al final o al inicio y hacer el salto sin animación
  useEffect(() => {
    if (currentIndex >= galleryImages.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(galleryImages.length);
      }, 500);
    } else if (currentIndex < galleryImages.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(galleryImages.length * 2 - 1);
      }, 500);
    }
  }, [currentIndex]);

  const getTranslateX = () => {
    if (!containerRef.current) return 0;
    const container = containerRef.current;
    const firstItem = container.querySelector('.carousel-item-stand') as HTMLElement;
    if (!firstItem) return 0;
    
    const itemWidth = firstItem.offsetWidth;
    const gap = window.innerWidth >= 768 ? 10 : 8;
    return -(currentIndex * (itemWidth + gap));
  };

  return (
    <section className="py-12 bg-gray-50" ref={ref}>
      <div className="container-xposedde px-4 md:p-[0px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2
            className="text-[26px] sm:text-[32px] md:text-[38px] text-gray-900 mb-4"
            style={{
              fontFamily: "'Helvetica83HeavyExtended', sans-serif",
              fontWeight: 800,
              letterSpacing: '-1px',
            }}
          >
            GALERÍA DE PROYECTOS
          </h2>
          <div className="w-20 h-1 bg-xposedde-red mx-auto"></div>
        </motion.div>

        <div className="w-full mx-auto">
          <div className="overflow-hidden mb-6" ref={containerRef}>
            <motion.div
              className="flex gap-2 md:gap-2.5"
              animate={{
                x: getTranslateX(),
              }}
              transition={isTransitioning ? { duration: 0.5, ease: 'easeInOut' } : { duration: 0 }}
            >
              {infiniteGallery.map((image, index) => (
                <div
                  key={index}
                  className="min-w-[calc(50%-6px)] md:min-w-[calc(25%-9px)] flex-shrink-0 carousel-item-stand"
                >
                  <div 
                    className="bg-white rounded-xl md:rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group h-[180px] md:h-[240px] cursor-pointer"
                    onClick={() => onOpenLightbox(galleryImages, index % galleryImages.length, [15])}
                  >
                    <div className="w-full h-full p-2 flex items-center justify-center">
                      <ImageWithFallback
                        src={image}
                        alt={`Proyecto ${(index % galleryImages.length) + 1}`}
                        className={`w-full h-full object-contain transition-transform duration-500 ${
                          (index % galleryImages.length) === 15 
                            ? 'rotate-90 scale-150 group-hover:scale-[1.575]' 
                            : 'group-hover:scale-105'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Controles de navegación */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-gray-900 hover:bg-xposedde-red rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-gray-900 hover:bg-xposedde-red rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Carrusel de Logos de Exposiciones
function ExposCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Determine items per view based on screen size
  const [itemsPerView, setItemsPerView] = useState(5);
  
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(3);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(4);
      } else {
        setItemsPerView(5);
      }
    };
    
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, expoLogosData.length - 1);

  const nextSlide = () => {
    setCurrentIndex(Math.min(currentIndex + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(Math.max(currentIndex - 1, 0));
  };

  return (
    <div className="w-full mx-auto">
      <div className="overflow-hidden mb-6">
        <motion.div
          className="flex"
          animate={{
            x: `-${currentIndex * (100 / itemsPerView)}%`,
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {expoLogosData.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex-shrink-0 px-4"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <div className="group relative flex items-center justify-center h-20">
                <ImageWithFallback
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="max-w-full max-h-full object-contain hover:scale-105 transition-all duration-300"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Controles de navegación */}
      {expoLogosData.length > itemsPerView && (
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
  );
}