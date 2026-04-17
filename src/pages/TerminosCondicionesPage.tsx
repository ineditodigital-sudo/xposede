import { useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { FileText, Scale } from 'lucide-react';

export function TerminosCondicionesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Términos y Condiciones | Xposedde';
  }, []);

  const sections = [
    {
      title: 'Aceptación de los Términos',
      content: 'Al acceder y utilizar este sitio web, el usuario acepta cumplir con los presentes Términos y Condiciones. Si no está de acuerdo con ellos, le recomendamos no utilizar este sitio.'
    },
    {
      title: 'Información General',
      content: 'Este sitio web es operado por XPO SEDDE, una empresa especializada en el diseño y fabricación de stands personalizados y soluciones integrales para exposiciones, ubicada en Aguascalientes, México.'
    },
    {
      title: 'Uso del Sitio',
      content: 'El usuario se compromete a utilizar el sitio web de manera lícita y respetuosa, absteniéndose de realizar cualquier actividad que pueda dañar, sobrecargar o deteriorar el funcionamiento del mismo.'
    },
    {
      title: 'Propiedad Intelectual',
      content: 'Todos los contenidos presentes en este sitio, incluyendo textos, imágenes, logotipos y diseños, son propiedad de XPO SEDDE o se utilizan con la debida autorización. Queda prohibida su reproducción, distribución o modificación sin el consentimiento previo y por escrito de XPO SEDDE.'
    },
    {
      title: 'Enlaces a Terceros',
      content: 'Este sitio puede contener enlaces a sitios web de terceros. XPO SEDDE no se responsabiliza por el contenido, políticas o prácticas de dichos sitios externos.'
    },
    {
      title: 'Limitación de Responsabilidad',
      content: 'XPO SEDDE no garantiza la disponibilidad continua del sitio ni la ausencia de errores en el contenido. En ningún caso será responsable por daños directos o indirectos derivados del uso o imposibilidad de uso del sitio.'
    },
    {
      title: 'Modificaciones',
      content: 'XPO SEDDE se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigor desde el momento de su publicación en el sitio web.'
    },
    {
      title: 'Legislación Aplicable',
      content: 'Estos Términos y Condiciones se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier controversia será resuelta por los tribunales competentes de Aguascalientes, México.'
    },
    {
      title: 'Contacto',
      content: 'Para cualquier consulta relacionada con estos Términos y Condiciones, puede contactarnos a través del correo electrónico: contacto@xposedde.com.mx.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-xposedde-red rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-xposedde-red rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-xposedde relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-xposedde-red/20 rounded-full mb-6">
              <Scale className="w-10 h-10 text-xposedde-red" />
            </div>
            
            <h1 className="font-title text-[32px] sm:text-[42px] md:text-[52px] text-white mb-6">
              Términos y Condiciones
            </h1>
            
            <div className="w-24 h-1 bg-xposedde-red mx-auto mb-6"></div>
            
            <p className="font-body text-lg text-white/80 leading-relaxed">
              Información legal importante sobre el uso de nuestro sitio web
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container-xposedde">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12 p-8 bg-gray-50 rounded-2xl border border-gray-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-xposedde-red rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-subtitle text-xl text-gray-900 mb-3">
                    Términos y Condiciones
                  </h2>
                  <p className="font-body text-gray-700 leading-relaxed">
                    A continuación se presentan los términos y condiciones que rigen el uso de este sitio web. Le recomendamos leer detenidamente este documento.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Terms Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-xposedde-red hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-xposedde-red/10 rounded-lg flex items-center justify-center">
                      <span className="font-subtitle text-xposedde-red">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-subtitle text-xl text-gray-900 mb-4">
                        {section.title}
                      </h3>
                      <p className="font-body text-gray-700 leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Last Updated */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200 text-center"
            >
              <p className="font-body text-sm text-xposedde-gray">
                Última actualización: Diciembre 2024
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
