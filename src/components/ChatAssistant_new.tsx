import { useState, useEffect } from 'react';
import { X, Send, MessageCircle, ChevronLeft, CheckCircle2, Building2, User, Briefcase, Clock, Phone, Mail, Sparkles, TrendingUp, Zap, Gift, Award, Target, Palette, Hammer, Calendar, DollarSign } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { ScrollArea } from './ui/scroll-area';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { motion, AnimatePresence } from 'motion/react';
import { WHATSAPP_NUMBER } from '../config/constants';

interface ChatAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 'welcome' | 'client-type' | 'experience' | 'needs' | 'budget' | 'timeline' | 'contact' | 'contact-success' | 'chat' | 'expert-calendar';

interface Message {
  type: 'bot' | 'user';
  text: string;
}

export function ChatAssistant({ isOpen, onClose }: ChatAssistantProps) {
  const [step, setStep] = useState<Step>('welcome');
  const [clientType, setClientType] = useState('');
  const [experience, setExperience] = useState('');
  const [needs, setNeeds] = useState('');
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { type: 'bot', text: '¡Hola! 👋 Soy tu asistente virtual de Xposedde. Estoy aquí para ayudarte a crear el stand perfecto para tu próximo evento.' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const progress = {
    'welcome': 0,
    'client-type': 14,
    'experience': 28,
    'expert-calendar': 42,
    'needs': 42,
    'budget': 56,
    'timeline': 70,
    'contact': 85,
    'contact-success': 95,
    'chat': 100
  }[step];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    const userMsg = inputMessage;
    setMessages(prev => [...prev, { type: 'user', text: userMsg }]);
    setInputMessage('');
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, 
        { type: 'bot', text: 'Excelente pregunta 💡 Basado en tu perfil, un asesor especializado revisará tu caso específico. Te contactaremos en menos de 2 horas con una propuesta personalizada y un diseño 3D preliminar sin costo.' }
      ]);
    }, 1500);
  };

  const goBack = () => {
    const stepOrder: Step[] = ['welcome', 'client-type', 'experience', 'expert-calendar', 'needs', 'budget', 'timeline', 'contact', 'contact-success', 'chat'];
    const currentIndex = stepOrder.indexOf(step);
    if (currentIndex > 0) {
      setStep(stepOrder[currentIndex - 1]);
    }
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhone = (phone: string) => {
    return phone.replace(/\D/g, '').length >= 10;
  };

  const isContactFormValid = contactName.trim().length >= 2 && isValidEmail(contactEmail) && isValidPhone(contactPhone);

  // Función para enviar los datos a WhatsApp
  const sendToWhatsApp = () => {
    // Formatear los datos recopilados
    const clientTypeText = clientType === 'nuevo' ? '👤 Cliente Nuevo en Exposiciones' 
      : clientType === 'empresa' ? '🏢 Empresa Establecida' 
      : '💼 Agencia/Organizador';
    
    const experienceText = experience === 'primera-vez' ? 'Primera vez (necesito orientación completa)'
      : experience === 'algo-experiencia' ? 'Experiencia intermedia'
      : 'Muy experimentado';
    
    const needsText = needs === 'stand-diseño' ? '🎨 Stand de Diseño Personalizado'
      : needs === 'montaje-expo' ? '🔨 Montaje de Exposición Completa'
      : needs === 'escenografia' ? '🎭 Escenografía para Evento'
      : needs === 'espacio-comercial' ? '🏗️ Espacio Industrial/Comercial'
      : '💬 Asesoría Personalizada';
    
    const budgetText = budget === 'basico' ? '💡 Básico (Menos de $50,000 MXN)'
      : budget === 'medio' ? '⭐ Medio ($50,000 a $150,000 MXN)'
      : budget === 'premium' ? '💎 Premium ($150,000 a $300,000 MXN)'
      : budget === 'alto' ? '👑 Alto (Más de $300,000 MXN)'
      : '💬 Flexible';
    
    const timelineText = timeline === 'urgente' ? '🚀 Urgente (Menos de 2 semanas)'
      : timeline === '1-mes' ? '📅 En 1 mes'
      : timeline === '2-3-meses' ? '✨ En 2-3 meses (Ideal)'
      : '⏰ Más de 3 meses';

    // Crear el mensaje
    const message = `🎯 *NUEVA SOLICITUD - ASISTENTE VIRTUAL XPOSEDDE*

👤 *INFORMACIÓN DE CONTACTO:*
• Nombre: ${contactName}
• Email: ${contactEmail}
• Teléfono: ${contactPhone}

📋 *PERFIL DEL CLIENTE:*
• Tipo: ${clientTypeText}
• Experiencia: ${experienceText}

🎨 *DETALLES DEL PROYECTO:*
• Servicio: ${needsText}
• Presupuesto: ${budgetText}
• Tiempo: ${timelineText}

🎁 *BENEFICIOS PROMETIDOS:*
✅ Diseño 3D preliminar GRATIS
✅ Consulta con experto sin costo
✅ 15% de descuento exclusivo
✅ Respuesta en menos de 2 horas

_Mensaje generado desde el Asistente Virtual - ${new Date().toLocaleString('es-MX')}_`;

    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Abrir WhatsApp
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  const renderContent = () => {
    switch (step) {
      case 'welcome':
        return (
          <motion.div 
            className="flex flex-col h-full bg-gradient-to-br from-white via-gray-50 to-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key="welcome"
          >
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
              <motion.div 
                className="relative mb-8"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", duration: 0.8 }}
              >
                <div className="w-20 h-20 bg-xposedde-red rounded-2xl flex items-center justify-center shadow-lg">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <motion.div
                  className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-4 h-4 text-white" />
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-gray-900 mb-3">Asistente Virtual Xposedde</h3>
                <p className="text-gray-600 mb-8 max-w-sm">
                  En solo <span className="font-medium text-xposedde-red">5 minutos</span> te ayudaré a diseñar la propuesta perfecta para tu stand ✨
                </p>
                
                <Card className="bg-white border-gray-200 shadow-sm p-5 mb-8 text-left max-w-sm">
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Propuesta personalizada</div>
                        <div className="text-xs text-gray-500">Adaptada a tus necesidades</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-xposedde-red/10 flex items-center justify-center flex-shrink-0">
                        <Palette className="w-4 h-4 text-xposedde-red" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Diseño 3D gratuito</div>
                        <div className="text-xs text-gray-500">Visualiza tu stand antes de construirlo</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-xposedde-gray/10 flex items-center justify-center flex-shrink-0">
                        <Gift className="w-4 h-4 text-xposedde-gray" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">15% de descuento exclusivo</div>
                        <div className="text-xs text-gray-500">Solo por hoy</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="w-full max-w-xs"
              >
                <Button 
                  className="bg-xposedde-red hover:bg-xposedde-red-hover w-full shadow-lg"
                  onClick={() => setStep('client-type')}
                  size="lg"
                >
                  Comenzar ahora
                  <Sparkles className="ml-2 w-4 h-4" />
                </Button>
                <p className="text-xs text-gray-500 mt-3">⏱️ Tiempo estimado: 3-5 minutos</p>
              </motion.div>
            </div>
          </motion.div>
        );

      case 'client-type':
        return (
          <motion.div 
            className="flex flex-col h-full"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            key="client-type"
          >
            <div className="flex-1 p-6 overflow-y-auto">
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mb-6"
              >
                <Badge className="bg-xposedde-red/10 text-xposedde-red hover:bg-xposedde-red/10 mb-3">
                  Paso 1 de 6
                </Badge>
                <h3 className="text-gray-900 mb-2">Cuéntanos sobre ti</h3>
                <p className="text-gray-600 text-sm">Esto nos ayudará a personalizar tu propuesta</p>
              </motion.div>
              
              <RadioGroup value={clientType} onValueChange={setClientType}>
                <div className="space-y-3">
                  {[
                    { 
                      value: 'empresa', 
                      icon: Building2, 
                      title: 'Empresa establecida', 
                      desc: 'Ya participamos en exposiciones',
                      color: 'blue',
                      gradient: 'from-blue-500 to-blue-600'
                    },
                    { 
                      value: 'nuevo', 
                      icon: User, 
                      title: 'Nuevo en exposiciones', 
                      desc: 'Primera vez en este tipo de eventos',
                      color: 'green',
                      gradient: 'from-green-500 to-green-600'
                    },
                    { 
                      value: 'agencia', 
                      icon: Briefcase, 
                      title: 'Agencia / Organizador', 
                      desc: 'Busco soluciones para clientes',
                      color: 'purple',
                      gradient: 'from-purple-500 to-purple-600'
                    }
                  ].map((option, i) => (
                    <motion.div
                      key={option.value}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                    >
                      <Card
                        className={`cursor-pointer transition-all hover:shadow-md ${
                          clientType === option.value 
                            ? 'border-red-600 shadow-lg ring-2 ring-red-100' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setClientType(option.value)}
                      >
                        <label
                          htmlFor={option.value}
                          className="flex items-center space-x-4 p-4 cursor-pointer"
                        >
                          <RadioGroupItem value={option.value} id={option.value} />
                          <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${option.gradient} rounded-xl flex items-center justify-center shadow-sm`}>
                            <option.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-900">{option.title}</div>
                            <div className="text-sm text-gray-500">{option.desc}</div>
                          </div>
                          {clientType === option.value && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center"
                            >
                              <CheckCircle2 className="w-5 h-5 text-white" />
                            </motion.div>
                          )}
                        </label>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </RadioGroup>
            </div>
            
            <div className="flex-shrink-0 p-4 border-t bg-white">
              <Button 
                className="w-full bg-xposedde-red hover:bg-xposedde-red-hover shadow-md"
                disabled={!clientType}
                onClick={() => setStep('experience')}
                size="lg"
              >
                Continuar
                <TrendingUp className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        );

      case 'experience':
        return (
          <motion.div 
            className="flex flex-col h-full"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            key="experience"
          >
            <div className="flex-1 p-6 overflow-y-auto">
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mb-6"
              >
                <Badge className="bg-xposedde-gray/10 text-xposedde-gray hover:bg-xposedde-gray/10 mb-3">
                  Paso 2 de 6
                </Badge>
                <h3 className="text-gray-900 mb-2">Tu nivel de experiencia</h3>
                <p className="text-gray-600 text-sm">Así podremos orientarte mejor</p>
              </motion.div>
              
              <RadioGroup value={experience} onValueChange={setExperience}>
                <div className="space-y-3">
                  {[
                    { 
                      value: 'primera-vez', 
                      title: 'Primera vez', 
                      desc: 'Necesito orientación completa',
                      icon: Sparkles,
                      badge: '👋 Bienvenido'
                    },
                    { 
                      value: 'algo-experiencia', 
                      title: 'Experiencia intermedia', 
                      desc: 'Conozco lo básico',
                      icon: TrendingUp,
                      badge: null
                    },
                    { 
                      value: 'experimentado', 
                      title: 'Muy experimentado', 
                      desc: 'Sé exactamente lo que quiero',
                      icon: Award,
                      badge: '⭐ Pro'
                    }
                  ].map((option, i) => (
                    <motion.div
                      key={option.value}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                    >
                      <Card
                        className={`cursor-pointer transition-all hover:shadow-md relative ${
                          experience === option.value 
                            ? 'border-red-600 shadow-lg ring-2 ring-red-100' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setExperience(option.value)}
                      >
                        {option.badge && (
                          <div className="absolute -top-2 -right-2 bg-white px-2 py-1 rounded-full text-xs shadow-md border border-gray-200">
                            {option.badge}
                          </div>
                        )}
                        <label
                          htmlFor={option.value}
                          className="flex items-center space-x-4 p-4 cursor-pointer"
                        >
                          <RadioGroupItem value={option.value} id={option.value} />
                          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg flex items-center justify-center">
                            <option.icon className="w-5 h-5 text-gray-700" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-900">{option.title}</div>
                            <div className="text-sm text-gray-500">{option.desc}</div>
                          </div>
                          {experience === option.value && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center"
                            >
                              <CheckCircle2 className="w-5 h-5 text-white" />
                            </motion.div>
                          )}
                        </label>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </RadioGroup>
            </div>
            
            <div className="flex-shrink-0 p-4 border-t bg-white">
              <Button 
                className="w-full bg-xposedde-red hover:bg-xposedde-red-hover shadow-md"
                disabled={!experience}
                onClick={() => {
                  if (experience === 'experimentado') {
                    setStep('expert-calendar');
                  } else {
                    setStep('needs');
                  }
                }}
                size="lg"
              >
                Continuar
                <TrendingUp className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        );

      case 'expert-calendar':
        return (
          <motion.div 
            className="flex flex-col h-full max-h-full"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            key="expert-calendar"
          >
            <div className="flex-1 min-h-0 p-4 sm:p-6 overflow-y-auto overscroll-contain">
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mb-6"
              >
                <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 mb-4">
                  ⭐ Cliente Pro
                </Badge>
                <h3 className="text-gray-900 mb-3">¡Perfecto! Te mereces atención especializada</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Como cliente experimentado, sabemos que valoras tu tiempo. Agenda una reunión directa con un Xpo Asesor especializado para discutir tu proyecto.
                </p>
              </motion.div>

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="space-y-4"
              >
                {/* Beneficios */}
                <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
                  <div className="p-5">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-xposedde-red" />
                      Beneficios de agendar ahora:
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Asesoría personalizada con expertos en stands</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Lluvia de ideas y cotización en tiempo real</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Revisión de diseños y especificaciones técnicas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Optimización de presupuesto y tiempos</span>
                      </li>
                    </ul>
                  </div>
                </Card>

                {/* Botón principal de agendar */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button
                    className="w-full bg-gradient-to-r from-xposedde-red to-red-700 hover:from-red-700 hover:to-xposedde-red shadow-lg text-base sm:text-lg h-14 sm:h-16"
                    onClick={() => {
                      window.open('https://calendar.google.com/appointments/schedules/AcZssZ0TeSaoDBRVfU9VnLhqbOnI3cOkVvrWG3Mf_NDlR1FeGCWfVRLrwxO40dlIjNh-5_iRaPRVRFZ1', '_blank');
                    }}
                    size="lg"
                  >
                    <Calendar className="mr-3 w-5 h-5" />
                    Agendar Reunión con Xpo Asesor
                  </Button>
                  <p className="text-xs text-center text-gray-500 mt-2">
                    Se abrirá Google Calendar en una nueva pestaña
                  </p>
                </motion.div>

                {/* Opción alternativa */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="bg-white px-2 text-gray-400">o continúa el formulario</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-gray-300 hover:border-gray-400 hover:bg-gray-50"
                  onClick={() => setStep('needs')}
                >
                  Continuar con el asistente
                  <TrendingUp className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        );

      case 'needs':
        return (
          <motion.div 
            className="flex flex-col h-full"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            key="needs"
          >
            <div className="flex-1 p-6 overflow-y-auto">
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mb-6"
              >
                <Badge className="bg-xposedde-red/10 text-xposedde-red hover:bg-xposedde-red/10 mb-3">
                  Paso 3 de 6
                </Badge>
                <h3 className="text-gray-900 mb-2">¿Qué servicio necesitas?</h3>
                <p className="text-gray-600 text-sm">Selecciona el que mejor se adapte</p>
              </motion.div>
              
              <RadioGroup value={needs} onValueChange={setNeeds}>
                <div className="space-y-3">
                  {[
                    { 
                      value: 'stand-diseño', 
                      title: 'Stand de Diseño', 
                      icon: Palette,
                      badge: '⭐ Más popular',
                      color: 'pink'
                    },
                    { 
                      value: 'montaje-expo', 
                      title: 'Montaje de Exposición',
                      icon: Hammer,
                      badge: null,
                      color: 'blue'
                    },
                    { 
                      value: 'escenografia', 
                      title: 'Escenografía para Evento',
                      icon: Target,
                      badge: null,
                      color: 'purple'
                    },
                    { 
                      value: 'espacio-comercial', 
                      title: 'Espacio Industrial/Comercial',
                      icon: Building2,
                      badge: null,
                      color: 'green'
                    },
                    { 
                      value: 'no-seguro', 
                      title: 'No estoy seguro aún',
                      icon: MessageCircle,
                      badge: null,
                      color: 'gray'
                    }
                  ].map((option, i) => (
                    <motion.div
                      key={option.value}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.05 }}
                    >
                      <Card
                        className={`cursor-pointer transition-all hover:shadow-md relative ${
                          needs === option.value 
                            ? 'border-red-600 shadow-lg ring-2 ring-red-100' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setNeeds(option.value)}
                      >
                        {option.badge && (
                          <div className="absolute -top-2 -right-2 bg-xposedde-red text-white px-3 py-1 rounded-full text-xs shadow-lg">
                            {option.badge}
                          </div>
                        )}
                        <label
                          htmlFor={option.value}
                          className="flex items-center space-x-3 p-3.5 cursor-pointer"
                        >
                          <RadioGroupItem value={option.value} id={option.value} />
                          <div className={`flex-shrink-0 w-9 h-9 bg-${option.color}-100 rounded-lg flex items-center justify-center`}>
                            <option.icon className={`w-5 h-5 text-${option.color}-600`} />
                          </div>
                          <div className="flex-1 font-medium text-gray-900 text-sm">{option.title}</div>
                          {needs === option.value && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-7 h-7 bg-red-600 rounded-full flex items-center justify-center"
                            >
                              <CheckCircle2 className="w-4 h-4 text-white" />
                            </motion.div>
                          )}
                        </label>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </RadioGroup>
            </div>
            
            <div className="flex-shrink-0 p-4 border-t bg-white">
              <Button 
                className="w-full bg-xposedde-red hover:bg-xposedde-red-hover shadow-md"
                disabled={!needs}
                onClick={() => setStep('budget')}
                size="lg"
              >
                Continuar
                <TrendingUp className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        );

      case 'budget':
        return (
          <motion.div 
            className="flex flex-col h-full"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            key="budget"
          >
            <div className="flex-1 p-6 overflow-y-auto">
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mb-6"
              >
                <Badge className="bg-xposedde-gray/10 text-xposedde-gray hover:bg-xposedde-gray/10 mb-3">
                  Paso 4 de 6
                </Badge>
                <h3 className="text-gray-900 mb-2">Presupuesto estimado</h3>
                <p className="text-gray-600 text-sm">¿Cuál es tu rango aproximado?</p>
              </motion.div>
              
              <RadioGroup value={budget} onValueChange={setBudget}>
                <div className="space-y-3">
                  {[
                    { 
                      value: 'basico', 
                      title: 'Básico', 
                      amount: 'Menos de $50,000 MXN',
                      icon: '💡',
                      recommended: false
                    },
                    { 
                      value: 'medio', 
                      title: 'Medio', 
                      amount: '$50,000 a $150,000 MXN',
                      icon: '⭐',
                      recommended: true
                    },
                    { 
                      value: 'premium', 
                      title: 'Premium', 
                      amount: '$150,000 a $300,000 MXN',
                      icon: '💎',
                      recommended: false
                    },
                    { 
                      value: 'alto', 
                      title: 'Alto', 
                      amount: 'Más de $300,000 MXN',
                      icon: '👑',
                      recommended: false
                    },
                    { 
                      value: 'flexible', 
                      title: 'Flexible', 
                      amount: 'Prefiero discutirlo',
                      icon: '💬',
                      recommended: false
                    }
                  ].map((option, i) => (
                    <motion.div
                      key={option.value}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + i * 0.05 }}
                    >
                      <Card
                        className={`cursor-pointer transition-all hover:shadow-md relative ${
                          budget === option.value 
                            ? 'border-red-600 shadow-lg ring-2 ring-red-100' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setBudget(option.value)}
                      >
                        {option.recommended && (
                          <div className="absolute -top-2 -right-2 bg-green-600 text-white px-3 py-1 rounded-full text-xs shadow-lg">
                            ✨ Popular
                          </div>
                        )}
                        <label
                          htmlFor={option.value}
                          className="flex items-center space-x-3 p-3.5 cursor-pointer"
                        >
                          <RadioGroupItem value={option.value} id={option.value} />
                          <div className="text-2xl">{option.icon}</div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-900 text-sm">{option.title}</div>
                            <div className="text-xs text-gray-500">{option.amount}</div>
                          </div>
                          {budget === option.value && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-7 h-7 bg-red-600 rounded-full flex items-center justify-center"
                            >
                              <CheckCircle2 className="w-4 h-4 text-white" />
                            </motion.div>
                          )}
                        </label>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </RadioGroup>
            </div>
            
            <div className="flex-shrink-0 p-4 border-t bg-white">
              <Button 
                className="w-full bg-xposedde-red hover:bg-xposedde-red-hover shadow-md"
                disabled={!budget}
                onClick={() => setStep('timeline')}
                size="lg"
              >
                Continuar
                <TrendingUp className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        );

      case 'timeline':
        return (
          <motion.div 
            className="flex flex-col h-full"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            key="timeline"
          >
            <div className="flex-1 p-6 overflow-y-auto">
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mb-6"
              >
                <Badge className="bg-xposedde-red/10 text-xposedde-red hover:bg-xposedde-red/10 mb-3">
                  Paso 5 de 6
                </Badge>
                <h3 className="text-gray-900 mb-2">¿Cuándo necesitas el servicio?</h3>
                <p className="text-gray-600 text-sm">Tu timeline nos ayuda a organizarnos</p>
              </motion.div>
              
              <RadioGroup value={timeline} onValueChange={setTimeline}>
                <div className="space-y-3">
                  {[
                    { 
                      value: 'urgente', 
                      title: 'Urgente', 
                      desc: 'Menos de 2 semanas',
                      badge: '🚀 Express',
                      color: 'red'
                    },
                    { 
                      value: '1-mes', 
                      title: 'En 1 mes', 
                      desc: 'Tiempo ajustado',
                      badge: null,
                      color: 'orange'
                    },
                    { 
                      value: '2-3-meses', 
                      title: 'En 2-3 meses', 
                      desc: 'Planificación óptima',
                      badge: '✨ Ideal',
                      color: 'green'
                    },
                    { 
                      value: 'flexible-tiempo', 
                      title: 'Más de 3 meses', 
                      desc: 'Tengo tiempo suficiente',
                      badge: null,
                      color: 'blue'
                    }
                  ].map((option, i) => (
                    <motion.div
                      key={option.value}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + i * 0.05 }}
                    >
                      <Card
                        className={`cursor-pointer transition-all hover:shadow-md relative ${
                          timeline === option.value 
                            ? 'border-red-600 shadow-lg ring-2 ring-red-100' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setTimeline(option.value)}
                      >
                        {option.badge && (
                          <div className="absolute -top-2 -right-2 bg-white px-3 py-1 rounded-full text-xs shadow-md border-2 border-gray-200 font-medium">
                            {option.badge}
                          </div>
                        )}
                        <label
                          htmlFor={option.value}
                          className="flex items-center space-x-3 p-3.5 cursor-pointer"
                        >
                          <RadioGroupItem value={option.value} id={option.value} />
                          <div className={`flex-shrink-0 w-10 h-10 bg-${option.color}-100 rounded-lg flex items-center justify-center`}>
                            <Clock className={`w-5 h-5 text-${option.color}-600`} />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-900 text-sm">{option.title}</div>
                            <div className="text-xs text-gray-500">{option.desc}</div>
                          </div>
                          {timeline === option.value && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-7 h-7 bg-red-600 rounded-full flex items-center justify-center"
                            >
                              <CheckCircle2 className="w-4 h-4 text-white" />
                            </motion.div>
                          )}
                        </label>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </RadioGroup>
            </div>
            
            <div className="flex-shrink-0 p-4 border-t bg-gradient-to-r from-gray-50 to-white">
              <Button 
                className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 shadow-md"
                disabled={!timeline}
                onClick={() => setStep('contact')}
                size="lg"
              >
                Casi listo 🎉
                <TrendingUp className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        );

      case 'contact':
        return (
          <motion.div 
            className="flex flex-col h-full"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            key="contact"
          >
            <div className="flex-1 overflow-y-auto bg-gradient-to-b from-orange-50/30 to-white">
              <div className="p-6">
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="mb-6 text-center"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl mb-3"
                  >
                    🎯
                  </motion.div>
                  <Badge className="bg-gradient-to-r from-red-600 to-red-500 text-white hover:from-red-600 mb-3">
                    Paso Final 6 de 6
                  </Badge>
                  <h3 className="text-gray-900 mb-2">¡Ya casi terminamos!</h3>
                  <p className="text-gray-600 text-sm">
                    Déjanos tus datos para enviarte tu propuesta personalizada
                  </p>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200 shadow-sm p-4 mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Gift className="w-5 h-5 text-red-600" />
                      <span className="font-medium text-red-900">Al completar recibirás:</span>
                    </div>
                    <div className="text-sm text-gray-700 space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-red-600" />
                        <span>Diseño 3D preliminar <strong>GRATIS</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-red-600" />
                        <span>Consulta con experto sin costo</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-red-600" />
                        <span><strong>15% de descuento</strong> exclusivo HOY</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-red-600" />
                        <span>Respuesta en menos de 2 horas ⚡</span>
                      </div>
                    </div>
                  </Card>
                </motion.div>

                <div className="space-y-4">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Label htmlFor="contact-name" className="text-gray-700 mb-1.5 block text-sm flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Nombre completo
                    </Label>
                    <Input
                      id="contact-name"
                      type="text"
                      placeholder="Ingresa tu nombre"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="border-gray-300"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Label htmlFor="contact-email" className="text-gray-700 mb-1.5 block text-sm flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Correo electrónico
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="tu@email.com"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className="border-gray-300 pl-10"
                      />
                    </div>
                    {contactEmail && !isValidEmail(contactEmail) && (
                      <p className="text-xs text-red-600 mt-1">Por favor ingresa un email válido</p>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Label htmlFor="contact-phone" className="text-gray-700 mb-1.5 block text-sm flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Teléfono
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        id="contact-phone"
                        type="tel"
                        placeholder="5512345678"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        className="border-gray-300 pl-10"
                      />
                    </div>
                    {contactPhone && !isValidPhone(contactPhone) && (
                      <p className="text-xs text-red-600 mt-1">Mínimo 10 dígitos</p>
                    )}
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-xs text-gray-500 text-center pt-2 flex items-center justify-center gap-1"
                  >
                    🔒 Tus datos están seguros y protegidos
                  </motion.p>
                </div>
              </div>
            </div>
            
            <div className="flex-shrink-0 p-4 border-t bg-gradient-to-r from-gray-50 to-white sticky bottom-0">
              <Button 
                className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 shadow-lg"
                disabled={!isContactFormValid}
                onClick={() => setStep('contact-success')}
                size="lg"
              >
                {isContactFormValid ? (
                  <>
                    Recibir mi Propuesta Gratis
                    <Sparkles className="ml-2 w-5 h-5" />
                  </>
                ) : (
                  'Completa los campos'
                )}
              </Button>
            </div>
          </motion.div>
        );

      case 'contact-success':
        return (
          <motion.div 
            className="flex flex-col h-full bg-gradient-to-br from-green-50 via-white to-blue-50"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            key="contact-success"
          >
            <div className="flex-1 p-6 overflow-y-auto">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center mb-6"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5 }}
                  className="text-6xl mb-4"
                >
                  🎉
                </motion.div>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-gray-900 mb-2">¡Listo, {contactName.split(' ')[0]}! 🎊</h3>
                <p className="text-gray-600 text-sm">
                  Tu propuesta está en camino
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="bg-gradient-to-br from-gray-50 to-white border-gray-200 shadow-sm p-4 mb-6">
                  <div className="text-sm text-gray-700 space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">{contactEmail}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">{contactPhone}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200 shadow-sm p-4 mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Gift className="w-5 h-5 text-red-600" />
                    <span className="font-medium text-red-900">Tus beneficios exclusivos:</span>
                  </div>
                  <div className="text-sm text-gray-700 space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-600" />
                      <span>Diseño 3D preliminar <strong>GRATIS</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-600" />
                      <span>Consulta con experto sin costo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-600" />
                      <span><strong>15% de descuento</strong> en tu primer proyecto</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-600" />
                      <span>Respuesta en menos de 2 horas ⚡</span>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <Card
                className="cursor-pointer border-2 border-green-600 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 transition-all shadow-lg"
                onClick={() => {
                  sendToWhatsApp();
                  setTimeout(() => {
                    onClose();
                  }, 500);
                }}
              >
                <div className="p-4 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      Enviar por WhatsApp
                    </span>
                    <Badge className="bg-white/20 text-white hover:bg-white/20">
                      ⭐ Recomendado
                    </Badge>
                  </div>
                  <div className="text-sm text-green-100">
                    Contacta directamente con un asesor por WhatsApp
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        );

      case 'chat':
        return (
          <motion.div 
            className="flex flex-col h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key="chat"
          >
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-3.5 shadow-sm ${
                        message.type === 'user'
                          ? 'bg-gradient-to-br from-red-600 to-red-500 text-white'
                          : 'bg-gradient-to-br from-gray-100 to-gray-50 text-gray-900 border border-gray-200'
                      }`}
                    >
                      <p className="whitespace-pre-line text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-4 border border-gray-200 shadow-sm">
                      <div className="flex gap-1.5">
                        <motion.div
                          className="w-2.5 h-2.5 bg-gray-400 rounded-full"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="w-2.5 h-2.5 bg-gray-400 rounded-full"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2.5 h-2.5 bg-gray-400 rounded-full"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </ScrollArea>

            <div className="p-4 border-t bg-gradient-to-r from-gray-50 to-white">
              <div className="flex gap-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Escribe tu pregunta..."
                  className="border-gray-300 focus:border-red-500"
                />
                <Button 
                  onClick={handleSendMessage}
                  className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 shadow-md"
                  size="icon"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[95vh] sm:max-h-[90vh] sm:h-[600px] flex flex-col overflow-hidden"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Progress bar */}
            {step !== 'welcome' && (
              <div className="h-1.5 bg-gray-100">
                <motion.div 
                  className="h-full bg-gradient-to-r from-red-600 via-red-500 to-orange-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            )}

            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-white to-gray-50">
              <div className="flex items-center gap-3">
                {step !== 'welcome' && step !== 'chat' && step !== 'contact-success' && (
                  <motion.button
                    onClick={goBack}
                    className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-600" />
                  </motion.button>
                )}
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-gray-900 text-sm font-medium">Asistente Xposedde</h2>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 bg-green-500 rounded-full"
                    />
                  </div>
                  {step !== 'welcome' && step !== 'chat' && step !== 'contact-success' && (
                    <p className="text-xs text-gray-500">
                      Paso {['client-type', 'experience', 'needs', 'budget', 'timeline', 'contact'].indexOf(step) + 1} de 6
                    </p>
                  )}
                </div>
              </div>
              <motion.button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="h-5 w-5 text-gray-600" />
              </motion.button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden">
              <AnimatePresence mode="wait">
                {renderContent()}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
