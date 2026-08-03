import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ChatAssistant } from '../components/ChatAssistant';
import { Toaster } from '../components/ui/sonner';
import { MessageCircle, FileText, Download, ExternalLink, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const catalogos = [
  {
    id: 'stands-3x3',
    title: 'Stands Diseño 3×3m',
    description: 'Catálogo completo de stands premium de 3×3 metros. Soluciones de alto impacto optimizadas para espacios estándar.',
    size: '3×3m',
    category: 'Stands de Diseño',
    year: '2026',
    url: '/PDFS/Catalogo_XPO_SEDDE_2026_STANDS DISEÑO_3x3m.pdf',
    thumbnail: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/3x3m/1.webp',
  },
  {
    id: 'stands-6x3',
    title: 'Stands Diseño 6×3m',
    description: 'Diseños rectangulares de 6×3 metros. Diseñados para potenciar la visibilidad y el flujo de visitantes en pabellones.',
    size: '6×3m',
    category: 'Stands de Diseño',
    year: '2026',
    url: '/PDFS/Catálogo_XPO_SEDDE_2026_STANDS_DISEÑO_6x3m.pdf',
    thumbnail: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x3m/1.webp',
  },
  {
    id: 'stands-6x6',
    title: 'Stands Diseño 6×6m',
    description: 'Formatos isla y esquina de 6×6 metros. Espacios espectaculares con gran altura y arquitectura corporativa moderna.',
    size: '6×6m',
    category: 'Stands de Diseño',
    year: '2026',
    url: '/PDFS/Catalogo_XPO_SEDDE_2026_STANDS_DISEÑO_6x6m.pdf',
    thumbnail: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/6x6m/1.webp',
  },
  {
    id: 'stands-9x6-9x9',
    title: 'Stands Diseño 9×6m y 9×9m',
    description: 'Nuestros diseños de mayor escala y espectacularidad. Estructuras imponentes e innovadoras para marcas líderes.',
    size: '9×6m / 9×9m',
    category: 'Stands de Diseño',
    year: '2026',
    url: '/PDFS/Catalogo_XPO_SEDDE_2026_STANDS DISEÑO_9x6m_y_9x9m.pdf',
    thumbnail: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/STANDS-DE-DISENO/9x6m/1.webp',
  },
  {
    id: 'complementos',
    title: 'Complementos',
    description: 'Mobiliario de diseño, iluminación LED avanzada, pantallas de alta definición y accesorios para personalizar tu stand.',
    size: 'Varios',
    category: 'Complementos',
    year: '2026',
    url: '/PDFS/Catalogo_XPO_SEDDE_COMPLEMENTOS_OK.pdf',
    thumbnail: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/MAXIMA-CUSTOMIZADO.webp',
  },
  {
    id: 'counters',
    title: 'Catálogo de Counters',
    description: 'Gran variedad de mostradores, recepciones y counters interactivos. Funcionales, estéticos y listos para tu marca.',
    size: 'Mobiliario',
    category: 'Counters',
    year: '2026',
    url: '/PDFS/CATÁLOGO_DE_COUNTER_XPO_SEDDE.pdf',
    thumbnail: 'https://cdn.xposedde.com.mx/repositorio/SITIO-WEB-2026-IMAGENES/EXPOCUBO.webp',
  },
];

export function CatalogosPage() {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden flex flex-col justify-between">
      <div>
        <Header onOpenAssistant={() => setIsAssistantOpen(true)} />

        {/* Clean, Premium Title Section (No massive hero banner) */}
        <section className="bg-white border-b border-gray-200">
          <div className="container-xposedde">
            <div className="text-center max-w-4xl mx-auto pt-36 pb-14 px-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="inline-flex items-center justify-center w-12 h-12 bg-red-50 rounded-2xl mb-4 text-xposedde-red"
              >
                <BookOpen className="w-6 h-6" />
              </motion.div>
              
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="block text-xposedde-red font-body font-bold tracking-wider text-[11px] uppercase"
              >
                Recursos Internos
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-[32px] sm:text-[42px] md:text-[52px] text-gray-900 mt-3 mb-4 leading-none"
                style={{
                  fontFamily: "'Helvetica83HeavyExtended', sans-serif",
                  fontWeight: 800,
                  letterSpacing: '-1px',
                }}
              >
                CATÁLOGOS
              </motion.h1>
              
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="h-1 bg-xposedde-red mx-auto mb-6"
              ></motion.div>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="font-body text-base text-gray-600 max-w-2xl mx-auto leading-relaxed"
              >
                Acceso directo a nuestros catálogos interactivos en formato PDF. Haz clic en cualquiera de ellos para visualizarlo o descargarlo directamente.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Catalog Grid Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-xposedde px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {catalogos.map((catalogo, index) => (
                <motion.a
                  key={catalogo.id}
                  href={catalogo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group block h-full"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-150/70 hover:border-gray-200 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                    {/* PDF Cover / Thumbnail Container */}
                    <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden flex items-center justify-center p-5 border-b border-gray-100">
                      {/* Book Spine Shadow */}
                      <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/10 via-black/3 to-transparent z-20"></div>
                      
                      {/* Document Spine highlight */}
                      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/20 z-30"></div>
                      
                      {/* Actual Image / Thumbnail */}
                      <div className="w-full h-full relative rounded-lg overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-500 bg-white flex items-center justify-center p-1.5 border border-gray-100">
                        <ImageWithFallback
                          src={catalogo.thumbnail}
                          alt={catalogo.title}
                          className="w-full h-full object-contain"
                        />
                        
                        {/* Subtle gradient overlay on thumbnail */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent z-10"></div>
                      </div>

                      {/* Floating PDF Badge */}
                      <div className="absolute top-4 right-4 z-20 flex gap-1.5">
                        <span className="bg-xposedde-red text-white text-[10px] font-bold px-2 py-1 rounded shadow-md flex items-center gap-1 font-body">
                          <FileText className="w-3 h-3" />
                          PDF
                        </span>
                        <span className="bg-gray-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded shadow-md font-body">
                          {catalogo.year}
                        </span>
                      </div>

                      {/* Hover Action Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                        <motion.div
                          initial={{ scale: 0.8 }}
                          whileHover={{ scale: 1.1 }}
                          className="w-12 h-12 bg-xposedde-red rounded-full flex items-center justify-center shadow-lg"
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Card Details */}
                    <div className="p-6 flex flex-col flex-1 bg-white">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-xposedde-red tracking-wider uppercase font-body bg-red-50 px-2.5 py-0.5 rounded">
                          {catalogo.category}
                        </span>
                        <span className="text-[10px] font-bold text-gray-400 font-body">
                          {catalogo.size}
                        </span>
                      </div>
                      
                      <h3
                        className="text-gray-900 mb-2 group-hover:text-xposedde-red transition-colors"
                        style={{
                          fontFamily: "'Helvetica83HeavyExtended', sans-serif",
                          fontWeight: 800,
                          letterSpacing: '-0.3px',
                          fontSize: '15px',
                          lineHeight: '1.3'
                        }}
                      >
                        {catalogo.title}
                      </h3>
                      
                      <p className="font-body text-xs text-gray-500 leading-relaxed flex-1">
                        {catalogo.description}
                      </p>

                      {/* Bottom Bar */}
                      <div className="mt-5 pt-3.5 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-[11px] font-body text-gray-400">Acceso Directo</span>
                        <div className="flex items-center gap-1.5 text-xs font-bold text-xposedde-red group-hover:translate-x-1 transition-transform">
                          <span className="font-body text-[10px]">VER CATALOGO</span>
                          <Download className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Clean, Simple CTA Section */}
        <section className="py-16 bg-white border-t border-gray-150/70">
          <div className="container-xposedde px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2
                className="text-2xl text-gray-900 mb-3"
                style={{
                  fontFamily: "'Helvetica83HeavyExtended', sans-serif",
                  fontWeight: 800,
                  letterSpacing: '-0.5px',
                }}
              >
                ¿NECESITAS UN DISEÑO A MEDIDA?
              </h2>
              <p className="font-body text-sm text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
                Si buscas una propuesta personalizada para tu marca y evento, nuestro departamento de diseño está listo para crearla.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contacto"
                  className="btn-xposedde-primary inline-flex items-center justify-center gap-2 text-xs py-3 px-8"
                  style={{
                    fontFamily: "'Helvetica83HeavyExtended', sans-serif",
                    fontWeight: 800,
                  }}
                >
                  Solicitar Propuesta
                </a>
                <button
                  onClick={() => setIsAssistantOpen(true)}
                  className="btn-xposedde-secondary inline-flex items-center justify-center gap-2 text-xs py-3 px-8"
                  style={{
                    fontFamily: "'Helvetica83HeavyExtended', sans-serif",
                    fontWeight: 800,
                  }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Hablar con Asesor
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />

      {/* Floating Assistant Button */}
      <AnimatePresence>
        {!isAssistantOpen && (
          <motion.button
            onClick={() => setIsAssistantOpen(true)}
            className="fixed bottom-8 right-8 w-14 h-14 bg-xposedde-red hover:bg-xposedde-red-hover text-white rounded-full shadow-xl flex items-center justify-center z-40 group"
            aria-label="Abrir asistente virtual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
          >
            <MessageCircle className="w-6 h-6" />
            <span className="absolute inset-0 rounded-full bg-xposedde-red animate-ping opacity-20"></span>
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
