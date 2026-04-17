import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect } from 'react';

export function PoliticaPrivacidadPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Política de Privacidad | Xpo Sedde';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gray-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1599350686877-382a54114d2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YWN5JTIwc2VjdXJpdHklMjBkb2N1bWVudHxlbnwxfHx8fDE3NjcxNzQ2NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Privacy Security"
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
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 
                className="text-[22px] sm:text-[29px] md:text-[38px] lg:text-[42px] text-white leading-tight"
                style={{ 
                  fontFamily: "'Helvetica83HeavyExtended', sans-serif",
                  fontWeight: 800,
                  letterSpacing: '-1.5px'
                }}
              >
                AVISO DE PRIVACIDAD
              </h1>
            </div>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
              En Xpo Sedde protegemos tu información personal de acuerdo con la legislación vigente
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              {/* Introducción */}
              <div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Xpo Sedde utiliza tus datos personales sólo para generación de cartera de clientes y con la finalidad de ofrecer un mejor servicio. Únicamente utilizaremos tus datos como medio de contacto. Como responsable del tratamiento de sus datos personales, hace de su conocimiento que la información de nuestros clientes es tratada de forma estrictamente confidencial por lo que al proporcionar sus datos personales, tales como:
                </p>
                <ol className="space-y-2 text-gray-700 list-decimal pl-6 mb-6">
                  <li>Nombre Completo</li>
                  <li>Dirección</li>
                  <li>Registro Federal de Contribuyentes</li>
                  <li>Teléfonos de Oficina y Móviles</li>
                  <li>Correo Electrónico</li>
                </ol>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Estos serán utilizados única y exclusivamente para los siguientes fines:
                </p>
                <ul className="space-y-2 text-gray-700 list-disc pl-6 mb-6">
                  <li>Información y prestación de servicios.</li>
                  <li>Actualización de la base de datos.</li>
                  <li>Medio principal de contacto.</li>
                </ul>
              </div>

              {/* Protección de Datos */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-xposedde-red" />
                  <h2 className="text-[24px] sm:text-[28px] text-gray-900 m-0">Protección de Datos</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Para prevenir el acceso no autorizado a sus datos personales y con el fin de asegurar que la información sea utilizada para los fines establecidos en este aviso de privacidad, hemos establecido diversos procedimientos con la finalidad de evitar el uso o divulgación no autorizada de sus datos, permitiéndose tratarlos debidamente. Todos sus datos personales son tratados de acuerdo a la legislación aplicable y vigente en el país, por ello informamos que usted tiene en todo momento los derechos (ARCO) de acceder, rectificar, cancelar u oponerse al tratamiento que le damos a sus datos personales; derecho que podrá hacer valer solicitando directamente en los medios de contacto siguiente:
                </p>
              </div>

              {/* Contacto */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-[24px] sm:text-[28px] text-gray-900 mb-4">Contacto</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Si tienes preguntas sobre este Aviso de Privacidad o deseas ejercer tus derechos (ARCO), contáctanos:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> contacto@xposedde.com.mx</p>
                  <p><strong>Teléfono:</strong> (449) 993.22.23</p>
                  <p><strong>Dirección:</strong> San Marcos #146 Col. San Marcos C.P. 20070 Aguascalientes, Ags.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}