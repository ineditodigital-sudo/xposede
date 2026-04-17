import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { ArrowRight, Boxes, Building2, Presentation, Factory, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

interface ServicesSectionProps {
  onOpenAssistant: () => void;
}

export function ServicesSection({ onOpenAssistant }: ServicesSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const services = [
    {
      id: 'stands-diseno',
      icon: Boxes,
      title: 'STANDS DE DISEÑO',
      description: 'Diseños personalizados que reflejan la identidad de tu marca. Stands modulares, portátiles o de construcción personalizada.',
      image: 'https://xposedde.com.mx/wp-content/uploads/2025/02/S10-1.webp',
      features: ['Diseño 3D previo', 'Materiales premium', 'Instalación express', 'Almacenamiento']
    },
    {
      icon: Building2,
      title: 'MONTAJE DE EXPOSICIONES',
      description: 'Gestión integral de exposiciones comerciales y artísticas. Desde la planificación hasta el desmontaje.',
      image: 'https://xposedde.com.mx/wp-content/uploads/2025/01/MONTAJE-DE-EXPOSICIONES--e1738273404718.webp',
      features: ['Coordinación logística', 'Montaje profesional', 'Iluminación especializada', 'Mantenimiento']
    },
    {
      icon: Presentation,
      title: 'ESCENOGRAFÍAS',
      description: 'Creamos ambientes inmersivos para eventos, presentaciones de productos, congresos y espectáculos.',
      image: 'https://xposedde.com.mx/wp-content/uploads/2025/01/ESCENOGRAFIAS-scaled.webp',
      features: ['Diseño conceptual', 'Elementos personalizados', 'Audiovisuales integrados', 'Montaje escénico']
    },
    {
      icon: Factory,
      title: 'ESPACIOS INDUSTRIALES Y COMERCIALES',
      description: 'Diseño y acondicionamiento de showrooms, salas de exhibición y espacios corporativos permanentes.',
      image: 'https://xposedde.com.mx/wp-content/uploads/2025/01/ESPACIOS-INDUSTRIALES-Y-COMERCIALES-scaled.webp',
      features: ['Diseño arquitectónico', 'Mobiliario a medida', 'Branding corporativo', 'Soluciones sostenibles']
    }
  ];

  return (
    <section id="servicios" className="section-spacing bg-gray-50" ref={ref}>
      <div className="container-xposedde">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="badge-xposedde">Nuestros Servicios</span>
          </motion.div>
          
          <motion.h2 
            className="font-title text-[28px] sm:text-[33.6px] md:text-[42px] text-gray-900 mb-4 font-[Helvetica] font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            SOLUCIONES INTEGRALES PARA TU MARCA
          </motion.h2>

          <motion.div 
            className="divider-xposedde mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 100 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>

          <motion.p 
            className="font-body text-lg text-xposedde-gray max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Ofrecemos una amplia gama de servicios especializados para hacer que tu presencia en eventos y exposiciones sea memorable.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="space-y-20">
          {services.map((service, index) => {
            const serviceRef = useRef(null);
            const serviceInView = useInView(serviceRef, { once: true, amount: 0.3 });
            
            return (
              <motion.div 
                key={index}
                ref={serviceRef}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? '' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={serviceInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                {/* Image */}
                <motion.div 
                  className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={serviceInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="relative rounded overflow-hidden shadow-lg group">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="w-16 h-16 bg-xposedde-red rounded flex items-center justify-center mb-4">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div 
                  className={index % 2 === 1 ? 'lg:order-1' : ''}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  animate={serviceInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="font-title text-3xl md:text-4xl text-gray-900 mb-4">
                    {service.title}
                  </h3>

                  <div className="divider-xposedde mb-6"></div>

                  <p className="font-body text-lg text-xposedde-gray mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <motion.div 
                        key={idx}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={serviceInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                      >
                        <div className="w-5 h-5 bg-xposedde-red rounded-sm flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="font-body text-sm text-gray-900">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Button 
                    onClick={onOpenAssistant}
                    className="btn-xposedde-secondary inline-flex items-center gap-2"
                  >
                    Solicitar Información
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-white p-10 md:p-16 rounded shadow-lg border border-gray-200">
            <h3 className="font-title text-3xl md:text-4xl text-gray-900 mb-4">
              ¿LISTO PARA COMENZAR TU PROYECTO?
            </h3>
            <div className="divider-xposedde mx-auto mb-6"></div>
            <p className="font-body text-lg text-xposedde-gray mb-8 max-w-2xl mx-auto">
              Nuestro asistente virtual te guiará paso a paso para crear el stand perfecto para tu próxima exposición.
            </p>
            <Button 
              onClick={onOpenAssistant}
              className="btn-xposedde-primary inline-flex items-center gap-2"
            >
              Iniciar Asistente Virtual
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}