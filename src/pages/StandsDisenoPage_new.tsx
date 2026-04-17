import { motion, AnimatePresence, useInView } from 'motion/react';
import { ArrowLeft, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Boxes, Palette, ShoppingBag, Building2, Lightbulb, Grid3x3 } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { sendToWhatsApp } from '../config/constants';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ExperienceSection } from '../components/ExperienceSection';
import { ContactSection } from '../components/ContactSection';
import { HeroSlider } from '../components/HeroSlider';
import { useState, useRef, useEffect } from 'react';
import { ChatAssistant } from '../components/ChatAssistant';
import { Toaster } from '../components/ui/sonner';
import { Link, useNavigate } from 'react-router-dom';
import { Lightbox } from '../components/Lightbox';
import { useDragCarousel } from '../hooks/useDragCarousel';
import pantallasLedImg from '../assets/pantallas-led-curva.jpg';

// Data structures
const sistemasConstructivos = [
  {
    id: 1,
    name: 'MÁXIMA CUSTOMIZADO',
    image: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MAXIMA-CUSTOMIZADO.webp'
  },
  {
    id: 2,
    name: 'SISTEMA DE EXHIBICIÓN',
    image: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/SISTEMA-DE-EXHIBICION.webp'
  },
  {
    id: 3,
    name: 'SISTEMA HÍBRIDO',
    image: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/HIBIRIDO.webp'
  },
  {
    id: 4,
    name: 'CUSTOM',
    image: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/CUSTOM.webp'
  },
  {
    id: 5,
    name: 'EXPO CUBO',
    image: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/EXPOCUBO.webp'
  },
  {
    id: 6,
    name: 'STAND INSTITUCIONAL',
    image: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STAND-INSTITUCIONAL.webp'
  }
];

const galeriaStands = [
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/1.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/2.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/3.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/4.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/5.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/6.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/7.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/8.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/9.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/10.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/11.webp?v=20260105',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/12.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/13.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/14.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/15.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/16.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/17.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/18.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/19.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/20.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/21.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/22.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/23.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/24.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/25.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/26.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/27.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/28.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/29.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/30.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/31.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/32.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/33.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/34.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/35.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/36.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/37.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/38.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/39.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/40.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/41.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/GALERIA/42.webp'
];

const standsCategories = [
  {
    id: '3x3m',
    name: '3x3m',
    images: [
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/3x3m/1.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/3x3m/2.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/3x3m/3.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/3x3m/4.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/3x3m/5.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/3x3m/6.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/3x3m/7.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/3x3m/8.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/3x3m/9.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/3x3m/10.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/3x3m/11.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/3x3m/12.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/3x3m/13.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/3x3m/14.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/3x3m/15.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/3x3m/16.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/3x3m/17.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/3x3m/18.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/3x3m/19.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/3x3m/20.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/3x3m/21.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/3x3m/22.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/3x3m/23.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/3x3m/24.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/3x3m/25.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/3x3m/26.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/3x3m/27.webp'
    ]
  },
  {
    id: '6x3m',
    name: '6x3m',
    images: [
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x3m/1.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x3m/2.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x3m/3.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x3m/4.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x3m/5.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x3m/6.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x3m/7.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x3m/8.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x3m/9.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x3m/10.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x3m/11.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x3m/12.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x3m/13.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x3m/14.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x3m/15.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x3m/16.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x3m/17.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x3m/18.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x3m/19.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x3m/20.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x3m/21.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x3m/22.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x3m/23.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x3m/24.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x3m/25.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x3m/26.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x3m/27.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x3m/28.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x3m/29.webp',
      'https://imagenes.inedito.digital/INEDITO%20DIGITAL/PORTAFOLIO/20260114_145925_04d779a1830a.webp'
    ]
  },
  {
    id: '6x6m',
    name: '6x6m',
    images: [
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x6m/1.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x6m/2.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x6m/3.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x6m/4.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x6m/5.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x6m/6.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x6m/7.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x6m/8.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x6m/9.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x6m/10.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x6m/11.webp'
    ]
  },
  {
    id: '9x3m',
    name: '9x3m',
    images: [
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/9x3m/1.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/9x3m/2.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/9x3m/3.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/9x3m/4.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/9x3m/5.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/9x3m/6.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/9x3m/7.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/9x3m/8.webp'
    ]
  },
  {
    id: '9x6m',
    name: '9x6m',
    images: [
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/9x6m/1.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/9x6m/2.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/9x6m/3.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/9x6m/4.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/9x6m/5.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/9x6m/6.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/9x6m/7.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/9x6m/8.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/9x3m/B901.webp'
    ]
  },
  {
    id: '9x9m',
    name: '9x9m',
    images: [
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/9x9m/1.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/9x9m/2.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/9x9m/3.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/9x9m/4.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/9x9m/5.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/9x9m/6.webp'
    ]
  },
  {
    id: 'otras-medidas',
    name: 'OTRAS MEDIDAS',
    images: [
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/OTRAS-MEDIDAS/1.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/OTRAS-MEDIDAS/2.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/OTRAS-MEDIDAS/3.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/OTRAS-MEDIDAS/4.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/OTRAS-MEDIDAS/5.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/OTRAS-MEDIDAS/6.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/OTRAS-MEDIDAS/7.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/OTRAS-MEDIDAS/8.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/OTRAS-MEDIDAS/9.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/OTRAS-MEDIDAS/10.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/OTRAS-MEDIDAS/11.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/OTRAS-MEDIDAS/12.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/OTRAS-MEDIDAS/13.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/OTRAS-MEDIDAS/14.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/OTRAS-MEDIDAS/15.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/OTRAS-MEDIDAS/16.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/OTRAS-MEDIDAS/17.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/OTRAS-MEDIDAS/18.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/OTRAS-MEDIDAS/19.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/OTRAS-MEDIDAS/20.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/OTRAS-MEDIDAS/21.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/OTRAS-MEDIDAS/22.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/OTRAS-MEDIDAS/23.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/OTRAS-MEDIDAS/24.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/OTRAS-MEDIDAS/25.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/OTRAS-MEDIDAS/26.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/OTRAS-MEDIDAS/27.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/OTRAS-MEDIDAS/28.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/OTRAS-MEDIDAS/29.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/OTRAS-MEDIDAS/30.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/OTRAS-MEDIDAS/31.webp',
      'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/OTRAS-MEDIDAS/32.webp',
      'https://imagenes.inedito.digital/XPOSEDDE/10x10m-ESQ.webp',
      'https://imagenes.inedito.digital/XPOSEDDE/12x3m-ESQ.webp',
      'https://imagenes.inedito.digital/XPOSEDDE/12x12m-ISLA.webp',
      'https://imagenes.inedito.digital/XPOSEDDE/15x10m-ISLA.webp'
    ]
  }
];

const productosRecomendados = [
  {
    id: 1,
    name: 'Pantallas LED',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&q=80',
    link: '/servicios/xpo-digital'
  },
  {
    id: 2,
    name: 'Activaciones Digitales',
    image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=400&q=80',
    link: '/servicios/xpo-digital'
  },
  {
    id: 3,
    name: 'Displays POP',
    image: 'https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?w=400&q=80',
    link: '/servicios/displays-pop'
  },
  {
    id: 4,
    name: 'Escenografías',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80',
    link: '/servicios/escenografias-personalizadas'
  },
  {
    id: 5,
    name: 'Espacios Comerciales',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80',
    link: '/servicios/espacios-industriales'
  }
];

const otrosServicios = [
  { id: 'montaje-exposiciones', name: 'Montaje de Exposiciones' },
  { id: 'escenografias-personalizadas', name: 'Escenografías' },
  { id: 'displays-pop', name: 'Displays POP' },
  { id: 'espacios-industriales', name: 'Espacios Industriales y Comerciales' },
  { id: 'asesoria-expos', name: 'Asesoría en Organización de Expos' }
];

export function StandsDisenoPage() {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[] | any[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxShowInfo, setLightboxShowInfo] = useState(false);
  const [lightboxRotateIndices, setLightboxRotateIndices] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const openLightbox = (images: string[] | any[], index: number, showInfo: boolean = false, rotateIndices: number[] = []) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxShowInfo(showInfo);
    setLightboxRotateIndices(rotateIndices);
    setLightboxOpen(true);
  };

  // Auto-select first category on mount
  useEffect(() => {
    if (!selectedCategory && standsCategories.length > 0) {
      setSelectedCategory(standsCategories[0].id);
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header onOpenAssistant={() => setIsAssistantOpen(true)} />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Sistemas Constructivos */}
      <SistemasConstructivosSection />

      {/* Stands por Medidas - NUEVO */}
      <StandsMedidasSection 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        onOpenLightbox={openLightbox}
      />

      {/* Galería de Stands */}
      <GaleriaStandsSection 
        currentIndex={currentGalleryIndex}
        setCurrentIndex={setCurrentGalleryIndex}
        onOpenLightbox={openLightbox}
      />

      {/* Xpo Experiencia */}
      <ExperienceSection />

      {/* Más Servicios */}
      <MasServiciosSection />

      {/* Productos Recomendados */}
      <ProductosRecomendadosSection />

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
      
      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onNavigate={setLightboxIndex}
        showInfo={lightboxShowInfo}
        rotateIndices={lightboxRotateIndices}
      />
      
      <Toaster />
    </div>
  );
}

// Hero Section Component
function HeroSection() {
  const heroImages = [
    'https://images.unsplash.com/photo-1761225646548-bc92fea0dc72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGhpYml0aW9uJTIwYm9vdGglMjBkZXNpZ258ZW58MXx8fHwxNzYzNjU3MTIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1720970057390-52a035614be3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGhpYml0aW9uJTIwYm9vdGglMjBjdXN0b218ZW58MXx8fHwxNzYzNjY0MTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1758923529920-b7f823dff130?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBleGhpYml0aW9uJTIwc3RhbmQ8ZW58MXx8fHwxNzYzNjY0MTg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1761195689615-9469b65dac01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBleGhpYml0aW9uJTIwYm9vdGh8ZW58MXx8fHwxNzYzNjY0MTg3fDA&ixlib=rb-4.1.0&q=80&w=1080'
  ];

  return (
    <HeroSlider images={heroImages} overlay="red" showNavigation={false}>
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
            <Boxes className="w-6 h-6 text-white" />
          </div>
          <h1 
            className="text-[24px] sm:text-[30px] md:text-[38px] lg:text-[42px] text-white leading-tight"
            style={{ 
              fontFamily: "'Helvetica83HeavyExtended', sans-serif",
              fontWeight: 800,
              letterSpacing: '-1.5px'
            }}
          >
            STANDS DE DISEÑO
          </h1>
        </div>

        <div className="w-20 h-1 bg-white mb-4"></div>

        <p className="font-body text-base md:text-lg text-white/90 max-w-3xl">
          En XPO SEDDE, somos expertos en la creación de stands de diseño que destacan por su originalidad, exclusividad y funcionalidad. Participar en una exposición con un stand único es trasladar la esencia de tu empresa a un espacio que comunica tus valores y objetivos de manera impactante y efectiva, aunque sea por un corto lapso de tiempo.
        </p>
      </motion.div>
    </HeroSlider>
  );
}

// Sistemas Constructivos Section
function SistemasConstructivosSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-12 bg-white" ref={ref}>
      <div className="container-xposedde">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 
            className="text-[26px] sm:text-[32px] md:text-[38px] text-gray-900 mb-4"
            style={{ 
              fontFamily: "'Helvetica83HeavyExtended', sans-serif",
              fontWeight: 800,
              letterSpacing: '-1px'
            }}
          >
            SISTEMAS CONSTRUCTIVOS
          </h2>
          <div className="w-20 h-1 bg-xposedde-red mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sistemasConstructivos.map((sistema, index) => (
            <motion.div
              key={sistema.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-white">
                <div className="absolute inset-0 p-3 flex items-center justify-center">
                  <ImageWithFallback
                    src={sistema.image}
                    alt={sistema.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 
                  className="text-white text-base md:text-lg"
                  style={{ 
                    fontFamily: "'Helvetica83HeavyExtended', sans-serif",
                    fontWeight: 800,
                    letterSpacing: '-0.5px'
                  }}
                >
                  {sistema.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// NEW: Stands por Medidas Section
function StandsMedidasSection({ 
  selectedCategory, 
  setSelectedCategory, 
  onOpenLightbox 
}: { 
  selectedCategory: string | null, 
  setSelectedCategory: (category: string) => void, 
  onOpenLightbox: (images: string[], index: number, showInfo: boolean, rotateIndices?: number[]) => void 
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const updateItemsPerView = () => {
      setItemsPerView(window.innerWidth < 768 ? 2 : 4);
    };
    
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Reset carousel index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  const activeCategory = standsCategories.find(cat => cat.id === selectedCategory);
  const images = activeCategory?.images || [];
  const maxIndex = Math.max(0, images.length - 1);

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

  return (
    <section className="py-12 bg-gray-50" ref={ref}>
      <div className="container-xposedde px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 
            className="text-[26px] sm:text-[32px] md:text-[38px] text-gray-900 mb-4"
            style={{ 
              fontFamily: "'Helvetica83HeavyExtended', sans-serif",
              fontWeight: 800,
              letterSpacing: '-1px'
            }}
          >
            CONOCE NUESTRO TRABAJO
          </h2>
          <div className="w-20 h-1 bg-xposedde-red mx-auto mb-4"></div>
          <p className="font-body text-gray-600 max-w-2xl mx-auto">
            Selecciona las medidas de tu stand
          </p>
        </motion.div>

        {/* Grid de categorías */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-8 max-w-6xl mx-auto">
          {standsCategories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className={`
                relative rounded-xl p-4 transition-all duration-300 border-2
                ${category.id === 'otras-medidas' ? 'col-span-2 sm:col-span-1' : ''}
                ${selectedCategory === category.id 
                  ? 'bg-xposedde-red border-xposedde-red text-white shadow-lg' 
                  : 'bg-white border-gray-200 hover:border-xposedde-red text-gray-900 hover:shadow-md'
                }
              `}
            >
              <h3 
                className="font-subtitle text-sm transition-colors text-center"
                style={{
                  fontFamily: "'Helvetica83HeavyExtended', sans-serif",
                  fontWeight: 800,
                  letterSpacing: '-0.5px'
                }}
              >
                {category.name}
              </h3>
            </motion.button>
          ))
          }
        </div>

        {/* Carrusel de imágenes */}
        {activeCategory && images.length > 0 && (
          <div className="w-full mx-auto">
            <div className="overflow-hidden mb-6">
              <motion.div
                className="flex cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                animate={{ 
                  x: `-${currentIndex * (100 / itemsPerView)}%`
                }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 px-1 md:px-1.5"
                    style={{ width: `${100 / itemsPerView}%` }}
                  >
                    <div 
                      className="bg-white rounded-xl md:rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer h-[180px] md:h-[240px]"
                      onClick={() => onOpenLightbox(images, index, false)}
                    >
                      <div className="w-full h-full p-2 flex items-center justify-center">
                        <ImageWithFallback
                          src={image}
                          alt={`${activeCategory.name} - Render ${index + 1}`}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="w-10 h-10 bg-gray-900 hover:bg-xposedde-red rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-gray-900"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
                className="w-10 h-10 bg-gray-900 hover:bg-xposedde-red rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-gray-900"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// Galería de Stands Section
function GaleriaStandsSection({ currentIndex, setCurrentIndex, onOpenLightbox }: { currentIndex: number, setCurrentIndex: (index: number) => void, onOpenLightbox: (images: string[] | any[], index: number, showInfo: boolean, rotateIndices?: number[]) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [itemsPerView, setItemsPerView] = useState(4);
  
  useEffect(() => {
    const updateItemsPerView = () => {
      setItemsPerView(window.innerWidth < 768 ? 2 : 4);
    };
    
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, galeriaStands.length - 1);

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

  return (
    <section id="galeria-stands" className="py-12 bg-gray-50" ref={ref}>
      <div className="container-xposedde px-4 md:p-[0px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 
            className="text-[26px] sm:text-[32px] md:text-[38px] text-gray-900 mb-4"
            style={{ 
              fontFamily: "'Helvetica83HeavyExtended', sans-serif",
              fontWeight: 800,
              letterSpacing: '-1px'
            }}
          >
            GALERÍA DE STANDS
          </h2>
          <div className="w-20 h-1 bg-xposedde-red mx-auto mb-4"></div>
          <p className="font-body text-gray-600 max-w-2xl mx-auto">
            Explora nuestros proyectos más destacados
          </p>
        </motion.div>

        <div className="w-full mx-auto">
          <div className="overflow-hidden mb-6">
            <motion.div
              className="flex cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              animate={{ 
                x: `-${currentIndex * (100 / itemsPerView)}%`
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {galeriaStands.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-1 md:px-1.5"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div 
                    className="bg-white rounded-xl md:rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer h-[180px] md:h-[240px]"
                    onClick={() => onOpenLightbox(galeriaStands, index, false, [13])}
                  >
                    <div className="w-full h-full p-2 flex items-center justify-center">
                      <ImageWithFallback
                        src={image}
                        alt={`Stand ${index + 1}`}
                        className={`w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ${index === 13 ? 'rotate-90 scale-150' : ''}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="w-10 h-10 bg-gray-900 hover:bg-xposedde-red rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-gray-900"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="w-10 h-10 bg-gray-900 hover:bg-xposedde-red rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-gray-900"
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

// Más Servicios Section
function MasServiciosSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const navigate = useNavigate();

  const getServiceIcon = (id: string) => {
    switch(id) {
      case 'montaje-exposiciones':
        return Grid3x3;
      case 'escenografias-personalizadas':
        return Palette;
      case 'displays-pop':
        return ShoppingBag;
      case 'espacios-industriales':
        return Building2;
      case 'asesoria-expos':
        return Lightbulb;
      default:
        return Boxes;
    }
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 max-w-6xl mx-auto">
          {otrosServicios.map((servicio, index) => {
            const Icon = getServiceIcon(servicio.id);
            const isLastOdd = index === otrosServicios.length - 1 && otrosServicios.length % 2 !== 0;
            return (
              <motion.button
                key={servicio.id}
                onClick={() => navigate(`/servicios/${servicio.id}`)}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ scale: 1.05 }}
                className={`bg-white border-2 border-gray-200 hover:border-xposedde-red rounded-xl p-4 transition-all duration-300 hover:shadow-lg group text-center flex flex-col items-center gap-3 ${
                  isLastOdd ? 'col-span-2 md:col-span-1 max-w-[calc(50%-6px)] mx-auto md:max-w-none' : ''
                }`}
              >
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center transition-colors">
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

// Productos Recomendados Section
function ProductosRecomendadosSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Stands de diseño para el carrusel
  const standsDestacados = [
    { id: 105, name: 'STAND CUSTOM', image: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/CUSTOM.webp', type: 'stand' }
  ];

  // Productos Display POP con nombres genéricos (solo los 3 principales)
  const displayPopProducts = [
    { id: 1, name: 'Roll Up Std', image: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/DISPLAYS-POP/PRODUCTOS/111-080-Roll-Up-Std-85x200cm.webp', type: 'producto' },
    { id: 3, name: 'Banner Tipo X Estándar', image: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/DISPLAYS-POP/PRODUCTOS/112-080-XBanner-A-80x180cm-70x170cm-x-60x160cm.webp', type: 'producto' },
    { id: 6, name: 'Bandera Publicitaria 220cm', image: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/DISPLAYS-POP/PRODUCTOS/122-220-Flagbanner-220cm-350cm-480cm.webp', type: 'producto' }
  ];

  const novedades = [
    { id: 20, name: 'TOTEM iPHONE 42" USB', image: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/TOTEM-IPHONE.webp', type: 'novedad', badge: 'NUEVO' },
    { id: 21, name: 'TOTEM iPHONE TOUCH 55"', image: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/TOTEM-IPHONE.webp', type: 'novedad', badge: 'POPULAR' },
    { id: 22, name: 'PANTALLAS LED', image: pantallasLedImg, type: 'novedad', badge: 'PREMIUM' },
    { id: 23, name: 'LAYOUT DIGITALES PARA EXPOS', image: 'https://cdn.xposedde.com.mx/repositorio/imagen_2025-07-30_115513162%201.webp', type: 'xpodigital', badge: 'XPO DIGITAL' },
    { id: 24, name: 'APLICACIONES QR PARA EXPOS', image: 'https://cdn.xposedde.com.mx/repositorio/cerrar-amigos-escaneando-menu-qr-1-2048x1081.webp', type: 'xpodigital', badge: 'XPO DIGITAL' },
    { id: 25, name: 'TARJETA DIGITAL DE PRESENTACIÓN', image: 'https://cdn.xposedde.com.mx/repositorio/manos-sosteniendo-una-tarjeta-de-credito-y-un-telefono-simulacro-1-2048x1082.webp', type: 'xpodigital', badge: 'XPO DIGITAL' }
  ];

  const todosLosProductos = [...standsDestacados, ...displayPopProducts, ...novedades];

  // Determinar cuántos items mostrar según el tamaño de pantalla
  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, todosLosProductos.length - slidesToShow);

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
            PRODUCTOS Y NOVEDADES
          </h2>
          <div className="w-16 h-1 bg-xposedde-red mx-auto"></div>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Carousel */}
          <div className="overflow-hidden px-4 mb-6">
            <motion.div
              className="flex gap-3 cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              animate={{
                x: `calc(-${currentIndex * (100 / slidesToShow)}% - ${currentIndex * 12}px)`
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
            >
              {todosLosProductos.map((item) => {
                // Determinar la ruta según el tipo de elemento
                let linkTo = '/contacto';
                const isStand = item.type === 'stand';
                
                if (item.type === 'producto') {
                  linkTo = '/servicios/displays-pop';
                } else if (item.type === 'xpodigital') {
                  linkTo = '/xpo-digital';
                } else if (item.type === 'novedad') {
                  linkTo = '/xpo-digital';
                }

                const handleStandClick = () => {
                  const galeriaSection = document.getElementById('galeria-stands');
                  if (galeriaSection) {
                    galeriaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                };

                const cardContent = (
                  <div className="relative rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl group h-[140px] md:h-[160px] cursor-pointer bg-white">
                    {/* Imagen de fondo */}
                    <div className="absolute inset-0 p-2 flex items-center justify-center">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    {/* Badge para novedades */}
                    {item.type === 'novedad' && item.badge && (
                      <div className="absolute top-2 right-2 bg-xposedde-red text-white px-2 py-1 rounded-md text-[10px] font-subtitle z-10">
                        {item.badge}
                      </div>
                    )}
                    
                    {/* Badge para xpodigital */}
                    {item.type === 'xpodigital' && item.badge && (
                      <div className="absolute top-2 right-2 bg-xposedde-red text-white px-2 py-1 rounded-md text-[10px] font-subtitle z-10">
                        {item.badge}
                      </div>
                    )}
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-xposedde-red/90 group-hover:via-xposedde-red/60 transition-all duration-300"></div>
                    
                    {/* Texto encima */}
                    <div className="absolute inset-0 flex items-end justify-center p-3">
                      <h3 className="font-subtitle text-xs md:text-sm text-white transition-colors leading-tight text-center">
                        {item.name}
                      </h3>
                    </div>
                  </div>
                );

                return (
                  <div
                    key={item.id}
                    className="flex-shrink-0"
                    style={{ width: `calc(${100 / slidesToShow}% - ${(slidesToShow - 1) * 12 / slidesToShow}px)` }}
                  >
                    {isStand ? (
                      <div onClick={handleStandClick} className="block">
                        {cardContent}
                      </div>
                    ) : (
                      <Link to={linkTo} className="block">
                        {cardContent}
                      </Link>
                    )}
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handlePrev}
              className="bg-white hover:bg-xposedde-red text-xposedde-red hover:text-white w-10 h-10 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="bg-white hover:bg-xposedde-red text-xposedde-red hover:text-white w-10 h-10 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
