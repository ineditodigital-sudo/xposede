import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Mail, Briefcase, Users, TrendingUp, Award, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { motion } from 'motion/react';

export function BolsaTrabajoPage() {
  const handleSendCV = () => {
    window.location.href = 'mailto:recursoshumanos@xposedde.com.mx?subject=Solicitud de Empleo - Mi CV';
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1652498196597-6e92b2fec58f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB0ZWFtJTIwd29ya3xlbnwxfHx8fDE3NjY3NjgzODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Team Work"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-xposedde-red/95 via-xposedde-red/85 to-red-700/90"></div>
        
        <div className="container-xposedde relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
            </div>
            <h1 className="text-[32px] sm:text-[38px] md:text-[46px] text-white mb-4">
              Únete al Equipo Xpo Sedde
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Forma parte de una empresa líder en diseño y montaje de stands
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-[26px] sm:text-[32px] md:text-[38px] text-center mb-8 text-gray-900">
                ¿Por qué trabajar en Xpo Sedde?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
                En <strong>Xpo Sedde</strong>, no solo construimos stands excepcionales, sino que también 
                construimos carreras extraordinarias. Somos una empresa innovadora, comprometida con la excelencia 
                y el desarrollo profesional de nuestro equipo. Buscamos personas apasionadas, creativas y dedicadas 
                que quieran formar parte de proyectos que transforman espacios y experiencias.
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: TrendingUp,
                  title: 'Crecimiento Profesional',
                  description: 'Oportunidades de desarrollo y capacitación continua'
                },
                {
                  icon: Users,
                  title: 'Equipo Colaborativo',
                  description: 'Ambiente de trabajo dinámico y profesional'
                },
                {
                  icon: Award,
                  title: 'Proyectos Innovadores',
                  description: 'Trabaja en diseños únicos y desafiantes'
                },
                {
                  icon: Heart,
                  title: 'Buen Ambiente',
                  description: 'Cultura organizacional enfocada en el bienestar'
                },
                {
                  icon: Briefcase,
                  title: 'Experiencia Real',
                  description: 'Proyectos con clientes reconocidos a nivel nacional e internacional'
                },
                {
                  icon: Mail,
                  title: 'Proceso Ágil',
                  description: 'Respuesta rápida a tu solicitud de empleo'
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                    <benefit.icon className="w-10 h-10 text-xposedde-red mb-4" />
                    <h3 className="text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Card className="p-8 bg-gradient-to-br from-gray-50 to-white border-2 border-xposedde-red/20">
                <div className="text-center">
                  <h3 className="text-[24px] sm:text-[28px] text-gray-900 mb-4">
                    ¿Listo para unirte a nuestro equipo?
                  </h3>
                  <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                    Envía tu CV al equipo de Recursos Humanos y un especialista se pondrá en contacto 
                    contigo para conocer más sobre tu perfil y las oportunidades disponibles.
                  </p>
                  <Button
                    onClick={handleSendCV}
                    size="lg"
                    className="bg-xposedde-red hover:bg-xposedde-red-hover text-white shadow-lg h-auto py-4 px-6 whitespace-normal text-center leading-tight"
                  >
                    <Mail className="mr-2 w-5 h-5 flex-shrink-0" />
                    <span>Enviar mi CV o Solicitud de empleo a Recursos Humanos</span>
                  </Button>
                  <p className="text-sm text-gray-500 mt-4">
                    recursoshumanos@xposedde.com.mx
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}