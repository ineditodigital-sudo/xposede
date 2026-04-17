import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Boxes, Building2, Presentation, Factory, Sparkles, Package, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServicesGridProps {
  onOpenAssistant: () => void;
}

const services = [
  {
    id: 'stands-diseno',
    title: 'STANDS DE DISEÑO',
    shortDescription: 'Diseños personalizados que capturan la esencia de tu marca y maximizan el impacto visual.',
    icon: Boxes,
    image: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO.webp'
  },
  {
    id: 'montaje-exposiciones',
    title: 'MONTAJE DE EXPOSICIONES',
    shortDescription: 'Gestión integral del montaje de exposiciones con instalación profesional y cumplimiento de tiempos.',
    icon: Building2,
    image: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MONTAJE-DE-EXPOSICIONES--e1738273404718.webp'
  },
  {
    id: 'escenografias-personalizadas',
    title: 'ESCENOGRAFÍAS',
    shortDescription: 'Conceptos innovadores y diseños únicos que transforman espacios en experiencias memorables.',
    icon: Presentation,
    image: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESCENOGRAFIAS.webp'
  },
  {
    id: 'displays-pop',
    title: 'DISPLAYS POP',
    shortDescription: 'Material de punto de venta que impulsa las ventas y captura la atención del consumidor.',
    icon: Package,
    image: 'https://imagenes.inedito.digital/XPOSEDDE/DISPLAYS-POP-XPO-SEDDE.webp'
  },
  {
    id: 'espacios-industriales',
    title: 'ESPACIOS INDUSTRIALES Y COMERCIALES',
    shortDescription: 'Optimización de instalaciones para mejorar funcionalidad, imagen corporativa y experiencia.',
    icon: Factory,
    image: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ESPACIOS-INDUSTRIALES-Y-COMERCIALES.webp'
  },
  {
    id: 'asesoria-expos',
    title: 'ASESORÍA EN ORGANIZACIÓN DE EXPOS',
    shortDescription: 'Guía completa desde la planeación estratégica hasta la ejecución exitosa de tu evento.',
    icon: Users,
    image: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/ASESORIA_EXPOSICIONES.webp'
  }
];

export function ServicesGrid({ onOpenAssistant }: ServicesGridProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="servicios" className="relative bg-white p-[0px]" ref={ref}>
      <div className="container-xposedde">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="font-title text-[28px] sm:text-[33.6px] md:text-[42px] text-gray-900 mb-6 font-[Helvetica] font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            SERVICIOS
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-xposedde-red mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mx-[0px] my-[50px]">
          {services.map((service, index) => (
            <Link
              key={service.id}
              to={`/servicios/${service.id}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-square">
                  {/* Image */}
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
                    {/* Icon */}
                    <div className="mb-2 sm:mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-xposedde-red rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-subtitle text-white text-sm sm:text-lg leading-tight mb-2 font-[Helvetica_Neue_LT_Std]">
                      {service.title}
                    </h3>

                    {/* Short Description - appears on hover */}
                    <p className="font-body text-white/90 text-xs sm:text-sm leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 border-2 border-xposedde-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}