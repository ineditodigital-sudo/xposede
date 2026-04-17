import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { ArrowLeft, CheckCircle, MessageCircle, ChevronLeft, ChevronRight, Palette, ShoppingBag, Lightbulb, Grid3x3 } from 'lucide-react';
import { Boxes, Building2, Presentation, Factory, Sparkles, Package, Users, Store, SignpostBig, UserCheck, ShieldAlert } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactSection } from '../components/ContactSection';
import { useState, useRef, useEffect, useMemo } from 'react';
import { ChatAssistant } from '../components/ChatAssistant';
import { Toaster } from '../components/ui/sonner';
import { AnimatePresence } from 'motion/react';
import { Lightbox } from '../components/Lightbox';

// Galería de proyectos de Espacios Industriales
const industrialGalleryImages = [
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESPACIOS-INDUSTRIALES/1.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESPACIOS-INDUSTRIALES/12.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESPACIOS-INDUSTRIALES/5.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESPACIOS-INDUSTRIALES/16.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESPACIOS-INDUSTRIALES/9.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESPACIOS-INDUSTRIALES/3.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESPACIOS-INDUSTRIALES/14.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESPACIOS-INDUSTRIALES/7.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESPACIOS-INDUSTRIALES/18.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESPACIOS-INDUSTRIALES/11.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESPACIOS-INDUSTRIALES/2.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESPACIOS-INDUSTRIALES/15.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESPACIOS-INDUSTRIALES/6.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESPACIOS-INDUSTRIALES/19.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESPACIOS-INDUSTRIALES/10.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESPACIOS-INDUSTRIALES/4.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESPACIOS-INDUSTRIALES/13.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESPACIOS-INDUSTRIALES/8.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESPACIOS-INDUSTRIALES/17.webp',
  'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESPACIOS-INDUSTRIALES/20.webp'
];

// Productos de Displays POP (solo los 3 principales)
const displayPopProducts = [
  {
    id: 1,
    name: 'X Mini Banner 20x42cm',
    image: 'https://cdn.xposedde.com.mx/DISPLAYS-POP/0%20XMINIBANNER%2020x42cm.webp'
  },
  {
    id: 2,
    name: 'X Banner 60x160cm',
    image: 'https://cdn.xposedde.com.mx/DISPLAYS-POP/1%20XBANNER%2060x160cm.webp'
  },
  {
    id: 3,
    name: 'X Banner 70x170cm',
    image: 'https://cdn.xposedde.com.mx/DISPLAYS-POP/2%20XBANNER%2070x170cm.webp'
  },
  {
    id: 4,
    name: 'X Banner 80x180cm',
    image: 'https://cdn.xposedde.com.mx/DISPLAYS-POP/3%20XBANNER%2080x180cm.webp'
  },
  {
    id: 5,
    name: 'X Banner Ext 250x100cm',
    image: 'https://cdn.xposedde.com.mx/DISPLAYS-POP/4%20XBANNER%20EXT%20250x100cm.webp'
  },
  {
    id: 6,
    name: 'X Big Banner Ext 300x200cm',
    image: 'https://cdn.xposedde.com.mx/DISPLAYS-POP/5%20XBIG%20BANNER%20EXT%20300x200cm.webp'
  },
  {
    id: 7,
    name: 'Roll Up Std 85x200cm',
    image: 'https://cdn.xposedde.com.mx/DISPLAYS-POP/6%20ROLL%20UP%20STD%2085x200cm.webp'
  },
  {
    id: 8,
    name: 'Info Stand 70x110cm',
    image: 'https://cdn.xposedde.com.mx/DISPLAYS-POP/7%20INFO%20STAND%2070x110cm.webp'
  },
  {
    id: 9,
    name: 'Flag Banner 240cm y 350cm',
    image: 'https://cdn.xposedde.com.mx/DISPLAYS-POP/8%20FLAG%20BANNER%20240cm%20y%20350cm.webp'
  },
  {
    id: 10,
    name: 'Flag Banner Tanque 160x500cm',
    image: 'https://cdn.xposedde.com.mx/DISPLAYS-POP/9%20FLAG%20BANNER%20TANQUE%20160x500cm.webp'
  },
  {
    id: 11,
    name: 'Demo Display Inglés 83x210cm',
    image: 'https://cdn.xposedde.com.mx/DISPLAYS-POP/10%20DEMODISPLAY%20INGLS%2083x210cm.webp'
  },
  {
    id: 12,
    name: 'Expoflex Ling Tela 300x225cm',
    image: 'https://cdn.xposedde.com.mx/DISPLAYS-POP/11%20EXPOFLEX%20LING%20TELA%20300x225cm.webp'
  },
  {
    id: 13,
    name: 'Mesa Ling Tela 1610x850cm',
    image: 'https://cdn.xposedde.com.mx/DISPLAYS-POP/12%20MESA%20LING%20TELA%201610x850cm.webp'
  },
  {
    id: 14,
    name: 'Expoflex Curvo 320x227cm',
    image: 'https://cdn.xposedde.com.mx/DISPLAYS-POP/13%20EXPOFLEX%20CURVO%20320x227cm.webp'
  },
  {
    id: 15,
    name: 'Backtela Curvo 305x244cm',
    image: 'https://cdn.xposedde.com.mx/DISPLAYS-POP/17%20BACKTELA%20CURVO%20305x244cm.webp'
  },
  {
    id: 16,
    name: 'Backtela Recto 295x221cm',
    image: 'https://cdn.xposedde.com.mx/DISPLAYS-POP/18%20BACKTELA%20RECTO%20295x221cm.webp'
  },
  {
    id: 17,
    name: 'Backtela Recto 610x244cm',
    image: 'https://cdn.xposedde.com.mx/DISPLAYS-POP/19%20BACKTELA%20RECTO%20610x244cm.webp'
  },
  {
    id: 18,
    name: 'Folletero Plegable Acero 30x144cm',
    image: 'https://cdn.xposedde.com.mx/DISPLAYS-POP/20%20FOLLETERO%20PLEGABLE%20ACERO%2030x144cm.webp'
  },
  {
    id: 19,
    name: 'Folletero Plegable Acrílico 27x146cm',
    image: 'https://cdn.xposedde.com.mx/DISPLAYS-POP/21%20FOLLETERO%20PLEGABLE%20ACRILICO%2027x146cm.webp'
  },
  {
    id: 20,
    name: 'Folletero Plegable Madera 30x146cm',
    image: 'https://cdn.xposedde.com.mx/DISPLAYS-POP/22%20FOLLETERO%20PLEGABLE%20MADERA%2030x146cm.webp'
  },
  {
    id: 21,
    name: 'Pop Atril Alu 30x42cm',
    image: 'https://cdn.xposedde.com.mx/DISPLAYS-POP/23%20POP%20ATRIL%20ALU%2030x42cm.webp'
  },
  {
    id: 22,
    name: 'Pop Atril Alu 42x60cm',
    image: 'https://cdn.xposedde.com.mx/DISPLAYS-POP/24%20POP%20ATRIL%20ALU%2042x60cm.webp'
  },
  {
    id: 23,
    name: 'Carpa 300x300x200cm',
    image: 'https://cdn.xposedde.com.mx/DISPLAYS-POP/25%20CARPA%20300x300x200cm.webp'
  },
  {
    id: 24,
    name: 'Colgante Tela Circular 961x95cm',
    image: 'https://cdn.xposedde.com.mx/DISPLAYS-POP/26%20COLGANTE%20TELA%20CIRCULAR%20961x95cm.webp'
  },
  {
    id: 25,
    name: 'Colgante Tela Cuadrado 305x92cm',
    image: 'https://cdn.xposedde.com.mx/DISPLAYS-POP/27%20COLGANTE%20TELA%20CUADRADO%20305x92cm.webp'
  },
  {
    id: 26,
    name: 'Colgante Tela Rectangular 600x122cm',
    image: 'https://cdn.xposedde.com.mx/DISPLAYS-POP/28%20COLGANTE%20TELA%20RECTANGULAR%20600x122cm.webp'
  }
];

interface ServiceDetail {
  id: string;
  title: string;
  icon: any;
  image: string;
  description: string;
  benefits: string[];
  process: { step: string, desc: string }[];
  cta: string;
}

const servicesData: Record<string, ServiceDetail> = {
  'stands-diseno': {
    id: 'stands-diseno',
    title: 'STANDS DE DISEÑO',
    icon: Boxes,
    image: 'https://xposedde.com.mx/wp-content/uploads/2025/02/S10-1.webp',
    description: 'Diseñamos y construimos stands personalizados que capturan la esencia de tu marca y maximizan el impacto en cada exposición. Cada proyecto es único y adaptado a tus necesidades específicas.',
    benefits: [
      'Diseño 100% personalizado según tu marca',
      'Renderizado 3D previo para visualización',
      'Materiales de primera calidad',
      'Instalación profesional express',
      'Servicio de almacenamiento disponible',
      'Asesoría durante todo el proceso'
    ],
    process: [
      { step: 'Consulta Inicial', desc: 'Comprendemos tus objetivos y necesidades' },
      { step: 'Diseño Conceptual', desc: 'Creamos propuestas visuales en 3D' },
      { step: 'Aprobación', desc: 'Refinamos hasta tu completa satisfacción' },
      { step: 'Producción', desc: 'Fabricamos con los mejores materiales' },
      { step: 'Instalación', desc: 'Montaje profesional en tiempo récord' }
    ],
    cta: '¿Listo para destacar en tu próxima exposición? Contáctanos y diseñemos juntos el stand perfecto.'
  },
  'montaje-exposiciones': {
    id: 'montaje-exposiciones',
    title: 'MONTAJE DE EXPOSICIONES',
    icon: Building2,
    image: 'https://xposedde.com.mx/wp-content/uploads/2025/01/MONTAJE-DE-EXPOSICIONES--e1738273404718.webp',
    description: 'Nos encargamos del montaje completo de exposiciones, desde la logística hasta la instalación final. Garantizamos que tu espacio esté listo a tiempo y con la más alta calidad.',
    benefits: [
      'Planificación y coordinación logística',
      'Montaje rápido y eficiente',
      'Equipo técnico especializado',
      'Cumplimiento de normativas de seguridad',
      'Coordinación con proveedores',
      'Servicio de almacenamiento temporal'
    ],
    features: [
      'Montaje en tiempo récord',
      'Supervisión profesional constante',
      'Desmontaje y limpieza incluidos',
      'Documentación fotográfica del proceso'
    ],
    cta: 'Deja el montaje en manos expertas. Contáctanos y olvídate del estrés logístico.'
  },
  'escenografias-personalizadas': {
    id: 'escenografias-personalizadas',
    title: 'ESCENOGRAFÍAS',
    icon: Presentation,
    image: 'https://imagenes.inedito.digital/XPOSEDDE/IMG_20231013_123501333.webp',
    description: 'Creamos escenografías completamente personalizadas para eventos corporativos, presentaciones de producto, congresos y activaciones. Desde conceptos innovadores hasta diseños únicos que transforman espacios en experiencias memorables adaptadas a tu visión.',
    benefits: [
      'Diseños creativos 100% personalizados',
      'Adaptación a cualquier espacio y necesidad',
      'Desarrollo de conceptos innovadores',
      'Iluminación profesional integrada',
      'Elementos audiovisuales de última generación',
      'Ambientación temática exclusiva',
      'Producción de elementos decorativos únicos',
      'Integración de tecnologías emergentes',
      'Materiales premium y especiales',
      'Atención personalizada uno a uno'
    ],
    features: [
      'Propuestas conceptuales exclusivas',
      'Fabricación de elementos especiales a medida',
      'Consultoría estratégica de marca',
      'Prototipado y testeo previo',
      'Montaje técnico especializado',
      'Servicio de operación durante el evento',
      'Soporte técnico dedicado'
    ],
    cta: 'Crea escenarios únicos que cuenten tu historia. Conversemos sobre tu visión y hagámosla realidad.'
  },
  'displays-pop': {
    id: 'displays-pop',
    title: 'DISPLAYS POP',
    icon: Package,
    image: 'https://xposedde.com.mx/wp-content/uploads/2025/01/DISPLAYS-POP-XPO-SEDDE.webp',
    description: 'Los displays de punto de venta son esenciales para captar la atención de los clientes en el momento de la compra, destacando productos y reforzando la identidad de la marca',
    benefits: [
      'Diseños que impulsan la compra',
      'Materiales duraderos y ligeros',
      'Fácil armado y transporte',
      'Producción en serie o unitaria',
      'Branding consistente',
      'Exhibidores de piso y mostrador'
    ],
    features: [
      'Displays portátiles y modulares',
      'Impresión de alta calidad',
      'Diseño estructural optimizado',
      'Opciones sustentables disponibles'
    ],
    cta: 'Aumenta tus ventas en punto de venta. Solicita una cotización de displays POP.'
  },
  'espacios-industriales': {
    id: 'espacios-industriales',
    title: 'ESPACIOS INDUSTRIALES Y COMERCIALES',
    icon: Factory,
    image: 'https://imagenes.inedito.digital/XPOSEDDE/ESPACIOS-INDUSTRIALES-Y-COMERCIALES-scaled.webp',
    description: 'Transformamos espacios industriales y comerciales en experiencias únicas a través de proyectos a la medida. Nos especializamos en maximizar la rentabilidad, funcionalidad y estética de cada metro cuadrado, utilizando materiales sostenibles y un diseño innovador.',
    benefits: [
      'Análisis de flujos y distribución',
      'Diseño de interiores corporativos',
      'Señalética y wayfinding',
      'Mobiliario comercial e industrial',
      'Mejora de imagen corporativa',
      'Optimización de espacios'
    ],
    features: [
      'Planeación integral del espacio',
      'Renders 3D realistas',
      'Gestión de obra y proveedores',
      'Buenas prácticas de seguridad'
    ],
    cta: 'Transforma tus espacios en activos estratégicos. Platícanos de tu proyecto.'
  },
  'asesoria-expos': {
    id: 'asesoria-expos',
    title: 'ASESORÍA EN ORGANIZACIÓN DE EXPOS',
    icon: Users,
    image: 'https://xposedde.com.mx/wp-content/uploads/2025/01/Captura-de-pantalla-2025-01-30-154125.webp',
    description: 'Asesoría completa para organizar exposiciones exitosas. Te guiamos en cada paso, desde la planeación estratégica hasta la ejecución, asegurando el éxito de tu evento.',
    benefits: [
      'Estrategia y planeación de eventos',
      'Selección de proveedores confiables',
      'Gestión de presupuesto',
      'Coordinación logística integral',
      'Marketing y promoción del evento',
      'Anlisis post-evento y ROI'
    ],
    features: [
      'Experiencia en eventos de todo tamaño',
      'Red de proveedores certificados',
      'Gestión de crisis y contingencias',
      'Reportes detallados de resultados'
    ],
    cta: 'Organiza exposiciones exitosas con expertos. Agenda una consultoría gratuita.'
  }
};

export function ServiceDetailPage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? servicesData[serviceId] : null;
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);
  const navigate = useNavigate();

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-title text-[42px] text-gray-900 mb-4">Servicio no encontrado</h1>
          <Link to="/" className="text-xposedde-red hover:underline">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header onOpenAssistant={() => setIsAssistantOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gray-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          {/* Red Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-xposedde-red/90 via-red-800/85 to-gray-900/90"></div>
        </div>

        {/* Content */}
        <div className="container-xposedde relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Link 
              to="/servicios"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 group transition-colors"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Volver a servicios
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h1 
                className="text-[22px] sm:text-[29px] md:text-[38px] lg:text-[42px] text-white leading-tight"
                style={{ 
                  fontFamily: "'Helvetica83HeavyExtended', sans-serif",
                  fontWeight: 800,
                  letterSpacing: '-1.5px'
                }}
              >
                {service.title}
              </h1>
            </div>

            <div className="w-24 h-1 bg-white mb-6"></div>

            <p className="font-body text-lg md:text-xl text-white/90 max-w-3xl">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Galería de Proyectos - Only for espacios-industriales */}
      {service.id === 'espacios-industriales' && (
        <IndustrialGallerySection 
          currentIndex={currentImageIndex}
          setCurrentIndex={setCurrentImageIndex}
        />
      )}

      {/* Industrial Spaces Categories - Only for espacios-industriales */}
      {service.id === 'espacios-industriales' && (
        <section className="py-16 bg-white">
          <div className="container-xposedde">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 
                className="text-[26px] sm:text-[32px] md:text-[38px] text-gray-900 mb-4"
                style={{ 
                  fontFamily: "'Helvetica83HeavyExtended', sans-serif",
                  fontWeight: 800,
                  letterSpacing: '-1px'
                }}
              >
                Aplica para naves industriales, locales, oficinas y puntos de venta.
              </h2>
              <div className="w-20 h-1 bg-xposedde-red mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {/* Showrooms */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
                className="bg-gray-50 border-2 border-gray-200 hover:border-xposedde-red rounded-xl p-6 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-xposedde-red/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-xposedde-red transition-colors">
                    <Store className="w-8 h-8 text-xposedde-red group-hover:text-white transition-colors" />
                  </div>
                  <h3 
                    className="text-xposedde-red text-lg"
                    style={{ 
                      fontFamily: "'Helvetica83HeavyExtended', sans-serif",
                      fontWeight: 800,
                      letterSpacing: '-0.5px'
                    }}
                  >
                    SHOWROOMS
                  </h3>
                </div>
              </motion.div>

              {/* Señalética */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gray-50 border-2 border-gray-200 hover:border-xposedde-red rounded-xl p-6 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-xposedde-red/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-xposedde-red transition-colors">
                    <SignpostBig className="w-8 h-8 text-xposedde-red group-hover:text-white transition-colors" />
                  </div>
                  <h3 
                    className="text-xposedde-red text-lg"
                    style={{ 
                      fontFamily: "'Helvetica83HeavyExtended', sans-serif",
                      fontWeight: 800,
                      letterSpacing: '-0.5px'
                    }}
                  >
                    SEÑALÉTICA
                  </h3>
                </div>
              </motion.div>

              {/* Muros de RRHH */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-50 border-2 border-gray-200 hover:border-xposedde-red rounded-xl p-6 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-xposedde-red/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-xposedde-red transition-colors">
                    <UserCheck className="w-8 h-8 text-xposedde-red group-hover:text-white transition-colors" />
                  </div>
                  <h3 
                    className="text-xposedde-red text-lg"
                    style={{ 
                      fontFamily: "'Helvetica83HeavyExtended', sans-serif",
                      fontWeight: 800,
                      letterSpacing: '-0.5px'
                    }}
                  >
                    MUROS DE RRHH
                  </h3>
                </div>
              </motion.div>

              {/* Muros de Seguridad Industrial */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gray-50 border-2 border-gray-200 hover:border-xposedde-red rounded-xl p-6 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-xposedde-red/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-xposedde-red transition-colors">
                    <ShieldAlert className="w-8 h-8 text-xposedde-red group-hover:text-white transition-colors" />
                  </div>
                  <h3 
                    className="text-xposedde-red text-lg"
                    style={{ 
                      fontFamily: "'Helvetica83HeavyExtended', sans-serif",
                      fontWeight: 800,
                      letterSpacing: '-0.5px'
                    }}
                  >
                    MUROS DE SEGURIDAD INDUSTRIAL
                  </h3>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Productos Carousel - Only for displays-pop */}
      {service.id === 'displays-pop' && (
        <DisplayPopProductsSection 
          currentIndex={currentProductIndex}
          setCurrentIndex={setCurrentProductIndex}
        />
      )}

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-xposedde">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-title text-[28px] sm:text-[33.6px] text-gray-900 mb-6">
                Beneficios
              </h2>
              <div className="w-16 h-1 bg-xposedde-red mb-8"></div>
              
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-xposedde-red flex-shrink-0 mt-0.5" />
                    <p className="font-body text-xposedde-gray">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-title text-[28px] sm:text-[33.6px] text-gray-900 mb-6">
                Características
              </h2>
              <div className="w-16 h-1 bg-xposedde-red mb-8"></div>
              
              <div className="grid gap-6">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-xposedde-red hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-xposedde-red rounded-full mt-2"></div>
                      <p className="font-body text-gray-700">{feature}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Más Servicios Section */}
      <MasServiciosSection currentServiceId={service.id} />

      {/* CTA Banner */}
      <ContactSection onOpenAssistant={() => setIsAssistantOpen(true)} />

      {/* Footer */}
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

// Componente para la Galería de Proyectos
function IndustrialGallerySection({ currentIndex, setCurrentIndex }: { currentIndex: number, setCurrentIndex: (index: number) => void }) {
  const [itemsPerView, setItemsPerView] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  
  // Crear array infinito duplicando elementos al inicio y al final (orden fijo)
  const infiniteImages = useMemo(() => {
    return [...industrialGalleryImages, ...industrialGalleryImages, ...industrialGalleryImages];
  }, []);
  
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

  // Iniciar en el segundo conjunto
  useEffect(() => {
    setCurrentIndex(industrialGalleryImages.length);
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
    if (currentIndex >= industrialGalleryImages.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(industrialGalleryImages.length);
      }, 500);
    } else if (currentIndex < industrialGalleryImages.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(industrialGalleryImages.length * 2 - 1);
      }, 500);
    }
  }, [currentIndex]);

  const getTranslateX = () => {
    if (!containerRef.current) return 0;
    const container = containerRef.current;
    const firstItem = container.querySelector('.carousel-item') as HTMLElement;
    if (!firstItem) return 0;
    
    const itemWidth = firstItem.offsetWidth;
    const gap = 20;
    return -(currentIndex * (itemWidth + gap));
  };

  const openLightbox = (index: number) => {
    // Calcular el índice real en el array original
    const realIndex = index % industrialGalleryImages.length;
    setLightboxIndex(realIndex);
    setLightboxOpen(true);
  };

  return (
    <>
      <section className="py-12 bg-gray-50">
        <div className="container-xposedde">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
              GALERÍA DE PROYECTOS
            </h2>
            <div className="w-20 h-1 bg-xposedde-red mx-auto mb-6"></div>
            <p className="font-body text-base text-xposedde-gray max-w-2xl mx-auto">
              Cada espacio es una oportunidad para crear ambientes nicos que maximizan funcionalidad y rentabilidad.
            </p>
          </motion.div>

          <div className="w-full mx-auto">
            <div className="overflow-hidden mb-6" ref={containerRef}>
              <motion.div
                className="flex gap-5"
                animate={{
                  x: getTranslateX(),
                }}
                transition={isTransitioning ? { duration: 0.5, ease: 'easeInOut' } : { duration: 0 }}
              >
                {infiniteImages.map((image, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 carousel-item"
                    style={{ width: `calc((100% - ${(itemsPerView - 1) * 20}px) / ${itemsPerView})` }}
                  >
                    <div 
                      className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full cursor-pointer"
                      onClick={() => openLightbox(index)}
                    >
                      <div className="aspect-[4/3] relative overflow-hidden bg-white">
                        <div className="absolute inset-0 p-2 flex items-center justify-center">
                          <ImageWithFallback
                            src={image}
                            alt={`Proyecto ${(index % industrialGalleryImages.length) + 1}`}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-white text-sm font-body bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                            Click para ampliar
                          </div>
                        </div>
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
                className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-xposedde-red hover:bg-xposedde-red hover:text-white transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-xposedde-red hover:bg-xposedde-red hover:text-white transition-colors"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={industrialGalleryImages}
        currentIndex={lightboxIndex}
      />
    </>
  );
}

// Componente para el Carousel de Productos de Displays POP
function DisplayPopProductsSection({ currentIndex, setCurrentIndex }: { currentIndex: number, setCurrentIndex: (index: number) => void }) {
  const [itemsPerView, setItemsPerView] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  
  // Crear array infinito duplicando elementos al inicio y al final
  const infiniteProducts = useMemo(() => {
    return [...displayPopProducts, ...displayPopProducts, ...displayPopProducts];
  }, []);
  
  // Array de solo imágenes para el lightbox
  const productImages = useMemo(() => {
    return displayPopProducts.map(product => product.image);
  }, []);
  
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

  // Iniciar en el segundo conjunto
  useEffect(() => {
    setCurrentIndex(displayPopProducts.length);
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
    if (currentIndex >= displayPopProducts.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(displayPopProducts.length);
      }, 500);
    } else if (currentIndex < displayPopProducts.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(displayPopProducts.length * 2 - 1);
      }, 500);
    }
  }, [currentIndex]);

  const getTranslateX = () => {
    if (!containerRef.current) return 0;
    const container = containerRef.current;
    const firstItem = container.querySelector('.carousel-item') as HTMLElement;
    if (!firstItem) return 0;
    
    const itemWidth = firstItem.offsetWidth;
    const gap = 20;
    return -(currentIndex * (itemWidth + gap));
  };

  const openLightbox = (index: number) => {
    // Calcular el índice real en el array original
    const realIndex = index % displayPopProducts.length;
    setLightboxIndex(realIndex);
    setLightboxOpen(true);
  };

  return (
    <>
      <section className="py-12 bg-gray-50">
        <div className="container-xposedde">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
              PRODUCTOS
            </h2>
            <div className="w-20 h-1 bg-xposedde-red mx-auto mb-6"></div>
            <p className="font-body text-base text-xposedde-gray max-w-2xl mx-auto">
              Explora nuestra selección de displays POP que impulsan las ventas y mejoran la experiencia de compra.
            </p>
          </motion.div>

          <div className="w-full mx-auto">
            <div className="overflow-hidden mb-6" ref={containerRef}>
              <motion.div
                className="flex gap-5"
                animate={{
                  x: getTranslateX(),
                }}
                transition={isTransitioning ? { duration: 0.5, ease: 'easeInOut' } : { duration: 0 }}
              >
                {infiniteProducts.map((product, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 carousel-item"
                    style={{ width: `calc((100% - ${(itemsPerView - 1) * 20}px) / ${itemsPerView})` }}
                  >
                    <div 
                      className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full cursor-pointer bg-white"
                      onClick={() => openLightbox(index)}
                    >
                      <div className="relative overflow-hidden p-4">
                        <ImageWithFallback
                          src={product.image}
                          alt={product.name}
                          className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-white text-sm font-body bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                            Click para ampliar
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-white/90 px-4 py-2 text-center font-body text-sm leading-tight">
                        {product.name}
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
                className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-xposedde-red hover:bg-xposedde-red hover:text-white transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-xposedde-red hover:bg-xposedde-red hover:text-white transition-colors"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={productImages}
        currentIndex={lightboxIndex}
      />
    </>
  );
}

// Componente para la Sección de Más Servicios
function MasServiciosSection({ currentServiceId }: { currentServiceId: string }) {
  const services = Object.values(servicesData).filter(service => service.id !== currentServiceId);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-xposedde">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 
            className="text-[26px] sm:text-[32px] md:text-[38px] text-gray-900 mb-4"
            style={{ 
              fontFamily: "'Helvetica83HeavyExtended', sans-serif",
              fontWeight: 800,
              letterSpacing: '-1px'
            }}
          >
            MÁS SERVICIOS
          </h2>
          <div className="w-20 h-1 bg-xposedde-red mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLastOdd = services.length % 2 !== 0 && index === services.length - 1;
            return (
              <Link
                key={service.id}
                to={`/servicios/${service.id}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ scale: 1.05 }}
                  className={`bg-white border-2 border-gray-200 hover:border-xposedde-red rounded-xl p-4 transition-all duration-300 hover:shadow-lg group cursor-pointer flex flex-col items-center justify-center gap-3 h-32 ${isLastOdd ? 'col-span-2 md:col-span-1' : ''}`}
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 group-hover:bg-xposedde-red/10">
                    <Icon className="w-6 h-6 text-xposedde-red transition-colors" />
                  </div>
                  <h3 className="font-body text-xs text-gray-900 transition-colors leading-tight text-center">
                    {service.title}
                  </h3>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}