import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ChatAssistant } from '../components/ChatAssistant';
import { Toaster } from '../components/ui/sonner';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { toast } from 'sonner';
import { WHATSAPP_NUMBER } from '../config/constants';

export function ContactoPage() {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    experiencia: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Crear el mensaje para WhatsApp
    const experienciaText = formData.experiencia === 'si' 
      ? '✅ Sí, ha participado anteriormente' 
      : '🆕 No, es su primera vez';

    const message = `📝 *CONTACTO DESDE EL SITIO WEB*

👤 *INFORMACIÓN DE CONTACTO:*
• Nombre: ${formData.nombre}
• Empresa: ${formData.empresa}
• Email: ${formData.email}

📋 *EXPERIENCIA EN EXPOSICIONES:*
${experienciaText}

💬 *MENSAJE:*
${formData.mensaje}

_Formulario enviado desde la página de Contacto - ${new Date().toLocaleString('es-MX')}_`;

    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Abrir WhatsApp
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Simular pequeño delay para mejor UX
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Abrir WhatsApp en nueva pestaña
    window.open(whatsappURL, '_blank');
    
    toast.success('¡Redirigiendo a WhatsApp! Tu mensaje está listo para enviar.');
    
    // Limpiar el formulario
    setFormData({
      nombre: '',
      empresa: '',
      email: '',
      experiencia: '',
      mensaje: ''
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header onOpenAssistant={() => setIsAssistantOpen(true)} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gray-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1599048961640-3dcd9ee60d72"
            alt="Exhibition background"
            className="w-full h-full object-cover"
          />
          {/* Red Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-xposedde-red/90 via-red-800/85 to-gray-900/90"></div>
        </div>

        <div className="container-xposedde relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 
              className="text-[42px] sm:text-[56px] md:text-[70px] text-white mb-6"
              style={{ 
                fontFamily: "'Helvetica83HeavyExtended', sans-serif",
                fontWeight: 800,
                letterSpacing: '-1px'
              }}
            >
              CONTACTO
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="font-body text-xl text-white/90">
              Estamos listos para ayudarte a crear experiencias extraordinarias. Contáctanos hoy.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="container-xposedde">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 
                className="text-[26px] sm:text-[32px] md:text-[38px] text-gray-900 mb-8"
                style={{ 
                  fontFamily: "'Helvetica83HeavyExtended', sans-serif",
                  fontWeight: 800,
                  letterSpacing: '-0.5px'
                }}
              >
                CONTÁCTANOS
              </h2>
              <p className="font-body text-xposedde-gray mb-8">
                Con gusto te atenderemos
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre y Empresa */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block font-body text-gray-900 mb-2">
                      Nombre <span className="text-xposedde-red">*</span>
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-xposedde-red focus:border-transparent transition-all font-body"
                    />
                  </div>
                  <div>
                    <label htmlFor="empresa" className="block font-body text-gray-900 mb-2">
                      Empresa / Negocio <span className="text-xposedde-red">*</span>
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-xposedde-red focus:border-transparent transition-all font-body"
                    />
                  </div>
                </div>

                {/* Correo electrónico */}
                <div>
                  <label htmlFor="email" className="block font-body text-gray-900 mb-2">
                    Correo electrónico <span className="text-xposedde-red">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-xposedde-red focus:border-transparent transition-all font-body"
                  />
                </div>

                {/* Experiencia */}
                <div>
                  <label htmlFor="experiencia" className="block font-body text-gray-900 mb-2">
                    ¿Has participado en una expo anteriormente? <span className="text-xposedde-red">*</span>
                  </label>
                  <select
                    id="experiencia"
                    name="experiencia"
                    value={formData.experiencia}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-xposedde-red focus:border-transparent transition-all font-body appearance-none bg-white cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23707277' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      paddingRight: '2.5rem'
                    }}
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="si">Sí</option>
                    <option value="no">No, es mi primera vez</option>
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="mensaje" className="block font-body text-gray-900 mb-2">
                    Mensaje <span className="text-xposedde-red">*</span>
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-xposedde-red focus:border-transparent transition-all font-body resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-800 hover:bg-xposedde-red text-white py-4 rounded-lg transition-all duration-300 font-body disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar'}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:pl-12"
            >
              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-xposedde-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-xposedde-red" />
                  </div>
                  <div>
                    <h3 className="font-subtitle text-gray-900 mb-2">Teléfono</h3>
                    <a href="tel:+524499932223" className="font-body text-xposedde-gray hover:text-xposedde-red transition-colors">
                      +52 (449) 9932-223
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-xposedde-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-xposedde-red" />
                  </div>
                  <div>
                    <h3 className="font-subtitle text-gray-900 mb-2">Email</h3>
                    <a href="mailto:contacto@xposedde.com.mx" className="font-body text-xposedde-gray hover:text-xposedde-red transition-colors">
                      contacto@xposedde.com.mx
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-xposedde-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-xposedde-red" />
                  </div>
                  <div>
                    <h3 className="font-subtitle text-gray-900 mb-2">Ubicación</h3>
                    <p className="font-body text-xposedde-gray">
                      Aguascalientes, México
                    </p>
                  </div>
                </div>

                {/* Map or Image */}
                <div className="mt-12 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1599048961640-3dcd9ee60d72?w=800&h=500&fit=crop"
                    alt="Oficinas Xposedde"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
      
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