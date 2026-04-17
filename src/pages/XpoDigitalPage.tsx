import { motion, AnimatePresence, useInView } from 'motion/react';
import { ArrowLeft, MessageCircle, Monitor, Smartphone, Tv, Zap } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactSection } from '../components/ContactSection';
import { HeroSlider } from '../components/HeroSlider';
import { useState, useRef, useEffect } from 'react';
import { ChatAssistant } from '../components/ChatAssistant';
import { Toaster } from '../components/ui/sonner';
import { Link, useLocation } from 'react-router-dom';
import pantallasLedImg from '../assets/pantallas-led-curva.jpg';

// Data structures
const solucionesDigitales = [
  {
    id: 1,
    name: "TOTEM iPHONE 42'' USB",
    description: "Proyecta 3 imágenes al mismo tiempo sean videos, logotipos o fotografías. El cliente proporciona el material y nosotros hacemos la configuración correspondiente. La entrada es USB",
    image: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/TOTEM-IPHONE.webp',
    buttonText: "VENTA Y RENTA",
    whatsappLink: "https://api.whatsapp.com/send/?phone=4499932223&text=Hola%2C+me+interesa+el+TOTEM+iPHONE+42+pulgadas+que+ofrecen.+Vi+su+web+y+quisiera+informaci%C3%B3n+detallada+sobre+venta+y+renta.&type=phone_number&app_absent=0",
    specs: [
      'Pantalla de 42 pulgadas',
      'Triple proyección simultánea',
      'Entrada USB',
      'Configuración incluida'
    ]
  },
  {
    id: 2,
    name: "TOTEM iPHONE TOUCH 55''",
    description: "Crea conexiones reales con tus clientes mediante interacción con sitios web, aplicaciones o recorridos personalizados diseñados para expos, ferias, supermercados, plazas comerciales y más.\n\n¡Es lo que tu marca necesita para destacar, diferenciarse y aumentar tus ventas! No pierdas la oportunidad de transformar tu comunicación y cautivar a tu audiencia.",
    image: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/TOTEM-IPHONE.webp',
    buttonText: "VENTA Y RENTA",
    whatsappLink: "https://api.whatsapp.com/send/?phone=4499932223&text=Hola%2C+me+interesa+el+TOTEM+iPHONE+TOUCH+55+pulgadas+que+ofrecen.+Vi+su+web+y+quisiera+informaci%C3%B3n+detallada+sobre+venta+y+renta.&type=phone_number&app_absent=0",
    specs: [
      'Pantalla táctil de 55 pulgadas',
      'Interacción con sitios web y apps',
      'Recorridos personalizados',
      'Ideal para expos y ferias'
    ]
  },
  {
    id: 3,
    name: "PANTALLAS LED",
    description: "Con un brillo y claridad excepcionales, garantizan atraer todas las miradas y dejar una marca memorable. Además, son una solución rentable que te permitirá maximizar el impacto visual y captar la atención de tu audiencia como nunca antes.\n\n¡Da el paso con nosotros, te acompañamos siempre!",
    image: pantallasLedImg,
    buttonText: "VENTA Y RENTA",
    whatsappLink: "https://api.whatsapp.com/send/?phone=4499932223&text=Hola%2C+me+interesan+las+pantallas+LED+para+exposiciones+que+ofrecen.+Vi+su+web+y+quisiera+informaci%C3%B3n+detallada+sobre+venta+y+renta.&type=phone_number&app_absent=0",
    specs: [
      'Brillo y claridad excepcionales',
      'Impacto visual maximizado',
      'Solución rentable',
      'Marca memorable garantizada'
    ]
  },
  {
    id: 4,
    name: "ARCOS DE BIENVENIDA",
    description: "Crea una entrada impactante con nuestros arcos de bienvenida personalizados. Perfectos para generar la primera impresión en eventos, exposiciones y ferias. Diseño moderno que refleja la identidad de tu marca desde el primer momento.\n\n¡Destaca desde la entrada y marca la diferencia!",
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    buttonText: "VENTA Y RENTA",
    whatsappLink: "https://api.whatsapp.com/send/?phone=4499932223&text=Hola%2C+me+interesan+los+arcos+de+bienvenida+que+ofrecen.+Vi+su+web+y+quisiera+informaci%C3%B3n+detallada+sobre+venta+y+renta.&type=phone_number&app_absent=0",
    specs: [
      'Diseño personalizado',
      'Instalación profesional',
      'Impacto visual garantizado',
      'Disponible en varios tamaños'
    ]
  },
  {
    id: 5,
    name: "ACTIVACIONES DIGITALES",
    description: "Genera experiencias interactivas y memorables con activaciones digitales que integran pantallas, sensores, juegos o dinámicas participativas. Perfectas para captar atención y vitalizar tu marca en expos y eventos.\n\n¡Haz que tu stand sea el más visitado y recordado del evento!",
    image: 'https://cdn.xposedde.com.mx/repositorio/hombre-con-casco-de-realidad-virtual-tocando-una-pantalla-holografica-1-2048x1107.webp',
    buttonText: "VENTA Y RENTA",
    whatsappLink: "https://api.whatsapp.com/send/?phone=4499932223&text=Hola%2C+me+interesan+las+activaciones+digitales+para+exposiciones+que+ofrecen.+Vi+su+web+y+quisiera+informaci%C3%B3n+detallada.&type=phone_number&app_absent=0",
    specs: [
      'Experiencias interactivas',
      'Integración de sensores',
      'Juegos y dinámicas',
      'Máxima recordación'
    ]
  },
  {
    id: 6,
    name: "LAYOUT DIGITALES PARA EXPOS",
    description: "Optimiza tus espacios con presentaciones digitales que permiten visualizar el diseño de tu stand antes del montaje. Sorprende a tus clientes con un recorrido previo que muestra profesionalismo, orden y visión.\n\n¡Una herramienta clave para planear, convencer y cerrar más tratos antes de pisar la expo!",
    image: 'https://cdn.xposedde.com.mx/repositorio/imagen_2025-07-30_115513162%201.webp',
    buttonText: "VER DEMO",
    whatsappLink: "https://sistema.grupomaen.mx/maen-invitados?ID=5",
    specs: [
      'Visualización previa del diseño',
      'Presentaciones profesionales',
      'Optimización de espacios',
      'Cierre de tratos anticipado'
    ]
  },
  {
    id: 7,
    name: "APLICACIONES QR PARA EXPOS",
    description: "Facilita la interacción con tus visitantes mediante códigos QR que enlazan a catálogos digitales, encuestas, juegos, formularios o contenido exclusivo. Rápido, moderno y sin contacto.\n\n¡Convierte cada escaneo en una oportunidad de venta o conexión directa con tu marca!",
    image: 'https://cdn.xposedde.com.mx/repositorio/cerrar-amigos-escaneando-menu-qr-1-2048x1081.webp',
    buttonText: "Solicita una Asesoría",
    whatsappLink: "https://api.whatsapp.com/send/?phone=4499932223&text=Hola%2C+me+interesan+las+aplicaciones+QR+para+exposiciones+que+ofrecen.+Vi+su+web+y+quisiera+informaci%C3%B3n+detallada.&type=phone_number&app_absent=0",
    specs: [
      'Catálogos digitales',
      'Encuestas y formularios',
      'Contenido exclusivo',
      'Interacción sin contacto'
    ]
  },
  {
    id: 8,
    name: "TARJETA DIGITAL DE PRESENTACIÓN",
    description: "Di adiós a las tarjetas impresas. Con nuestras tarjetas digitales podrás compartir todos tus datos de contacto, redes sociales y catálogo desde tu celular con solo un toque.\n\n¡Impresiona desde el primer contacto y facilita la conexión con tus prospectos!",
    image: 'https://cdn.xposedde.com.mx/repositorio/manos-sosteniendo-una-tarjeta-de-credito-y-un-telefono-simulacro-1-2048x1082.webp',
    buttonText: "Solicita una Asesoría",
    whatsappLink: "https://api.whatsapp.com/send/?phone=4499932223&text=Hola%2C+me+interesa+la+tarjeta+digital+de+presentaci%C3%B3n+que+ofrecen.+Vi+su+web+y+quisiera+informaci%C3%B3n+detallada.&type=phone_number&app_absent=0",
    specs: [
      'Compartir con un toque',
      'Datos y redes sociales',
      'Catálogo incluido',
      'Impresión profesional'
    ]
  }
];

const otrosServicios = [
  { id: 'stands-diseno', name: 'Stands de Diseño' },
  { id: 'montaje-exposiciones', name: 'Montaje de Exposiciones' },
  { id: 'escenografias-personalizadas', name: 'Escenografías' },
  { id: 'displays-pop', name: 'Displays POP' },
  { id: 'espacios-industriales', name: 'Espacios Industriales y Comerciales' }
];

export function XpoDigitalPage() {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header onOpenAssistant={() => setIsAssistantOpen(true)} />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Intro Section */}
      <IntroSection />

      {/* Soluciones Digitales */}
      <SolucionesSection />

      {/* Características */}
      <CaracteristicasSection />

      {/* Más Servicios */}
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

      <ChatAssistant 
        isOpen={isAssistantOpen} 
        onClose={() => setIsAssistantOpen(false)} 
      />
      
      <Toaster />
    </div>
  );
}

// Hero Section Component
function HeroSection() {
  const heroImages = [
    'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=1920&q=80',
    'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1920&q=80',
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=80'
  ];

  return (
    <HeroSlider images={heroImages} overlay="red" showNavigation={false}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-8"
      >
        <Link 
          to="/servicios"
          className="inline-flex items-center gap-2 text-white hover:text-white/80 mb-8 group transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Volver a servicios
        </Link>

        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
            <Monitor className="w-8 h-8 text-xposedde-red" />
          </div>
          <h1 
            className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-white leading-none"
            style={{ 
              fontFamily: "'Helvetica83HeavyExtended', sans-serif",
              fontWeight: 800,
              letterSpacing: '-1.5px'
            }}
          >
            XPO DIGITAL
          </h1>
        </div>

        <div className="w-16 h-1 bg-white mb-6"></div>

        <p className="font-body text-base md:text-lg text-white max-w-4xl leading-relaxed">
          En una expo, competir por la atención es el primer gran reto. Nuestras soluciones no solo modernizan tu presencia, sino que generan una experiencia más atractiva, dinámica y profesional.
        </p>
      </motion.div>
    </HeroSlider>
  );
}

// Intro Section
function IntroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-12 bg-white" ref={ref}>
      <div className="container-xposedde">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="font-body text-lg text-gray-700 leading-relaxed">
            Con XPO DIGITAL, no solo transformas tu imagen, sino también tu impacto. Cada solución está pensada para brindar una experiencia moderna, profesional y memorable a tus clientes y visitantes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Soluciones Section
function SolucionesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-12 bg-gray-50" ref={ref}>
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
            SOLUCIONES DIGITALES
          </h2>
          <div className="w-20 h-1 bg-xposedde-red mx-auto"></div>
        </motion.div>

        <div className="space-y-16">
          {solucionesDigitales.map((solucion, index) => (
            <motion.div
              key={solucion.id}
              id={`producto-${solucion.id}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-xposedde-red">
                  {solucion.id === 1 ? (
                    // Video para TOTEM iPHONE 42"
                    <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingBottom: '56.25%', maxHeight: '500px' }}>
                      <iframe
                        src="https://www.youtube.com/embed/5yPYiEZjVIg"
                        title={solucion.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                      />
                    </div>
                  ) : solucion.id === 2 ? (
                    // Video para TOTEM iPHONE TOUCH 55"
                    <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingBottom: '56.25%', maxHeight: '500px' }}>
                      <iframe
                        src="https://www.youtube.com/embed/t1357AoOByw"
                        title={solucion.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                      />
                    </div>
                  ) : solucion.id === 3 ? (
                    // Video para PANTALLAS LED
                    <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingBottom: '56.25%', maxHeight: '500px' }}>
                      <iframe
                        src="https://www.youtube.com/embed/oTgH9Xj-Pog"
                        title={solucion.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                      />
                    </div>
                  ) : solucion.id === 4 ? (
                    // Video para ARCOS DE BIENVENIDA
                    <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingBottom: '56.25%', maxHeight: '500px' }}>
                      <iframe
                        src="https://www.youtube.com/embed/1fnU5MOCS6E"
                        title={solucion.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                      />
                    </div>
                  ) : (
                    // Imagen para otros productos
                    <ImageWithFallback 
                      src={solucion.image}
                      alt={solucion.name}
                      className="w-full h-auto"
                    />
                  )}
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <h3 
                  className="text-[22px] sm:text-[26px] md:text-[30px] text-gray-900 mb-4"
                  style={{ 
                    fontFamily: "'Helvetica83HeavyExtended', sans-serif",
                    fontWeight: 800,
                    letterSpacing: '-0.5px'
                  }}
                >
                  {solucion.name}
                </h3>
                
                <div className="space-y-4 mb-6">
                  {solucion.description.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="font-body text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Specs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {solucion.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-xposedde-red rounded-full flex-shrink-0"></div>
                      <p className="font-body text-sm text-gray-600">{spec}</p>
                    </div>
                  ))}
                </div>

                <motion.a
                  href={solucion.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-xposedde-red hover:bg-xposedde-red-hover text-white px-8 py-3 rounded-xl font-subtitle transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {solucion.buttonText.toUpperCase()}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Características Section
function CaracteristicasSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const caracteristicas = [
    {
      icon: Monitor,
      title: "Tecnología de Vanguardia",
      description: "Pantallas de alta resolución y sistemas interactivos que capturan la atención de tu audiencia."
    },
    {
      icon: Smartphone,
      title: "Fácil Configuración",
      description: "Entrada USB simple. Tú proporcionas el contenido, nosotros lo configuramos."
    },
    {
      icon: Tv,
      title: "Flexible y Versátil",
      description: "Disponible en venta y renta, adaptándose a las necesidades de tu proyecto."
    },
    {
      icon: Zap,
      title: "Impacto Inmediato",
      description: "Genera una experiencia moderna y profesional que diferencia tu marca."
    }
  ];

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
            ¿POR QUÉ ELEGIR XPO DIGITAL?
          </h2>
          <div className="w-20 h-1 bg-xposedde-red mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caracteristicas.map((caracteristica, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <caracteristica.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-subtitle text-lg text-gray-900 mb-3">
                {caracteristica.title}
              </h3>
              <p className="font-body text-sm text-xposedde-gray leading-relaxed">
                {caracteristica.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Más Servicios Section
function MasServiciosSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-12 bg-gray-50" ref={ref}>
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
            OTROS SERVICIOS
          </h2>
          <div className="w-20 h-1 bg-xposedde-red mx-auto mb-4"></div>
          <p className="font-body text-gray-600 max-w-2xl mx-auto">
            Descubre más soluciones para tu próximo proyecto
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {otrosServicios.map((servicio, index) => (
            <motion.div
              key={servicio.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/servicios/${servicio.id}`}
                className="block bg-white border-2 border-gray-200 hover:border-xposedde-red rounded-xl p-6 transition-all duration-300 hover:shadow-lg group"
              >
                <h3 className="font-subtitle text-base text-gray-900 group-hover:text-xposedde-red transition-colors">
                  {servicio.name}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}