import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ChatAssistant } from '../components/ChatAssistant';
import { Play, Clock, Calendar, Mic, Headphones } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import spotifyIcon from '../assets/spotify-logo.jpg';
import amazonIcon from '../assets/amazon-music-logo.png';
import logoXpoDay from '../assets/logo-xpoday.png';

interface Episode {
  id: number;
  title: string;
  duration: string;
  date: string;
  description: string;
  audioUrl?: string;
}

export function PodcastPage() {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);

  const episodes: Episode[] = [
    {
      id: 1,
      title: "UNIPANIA, la Cumbre Nacional del Pan",
      duration: "48:37",
      date: "Marzo 2024",
      description: "Descubre cómo se organizó uno de los eventos más importantes de la industria panadera en México."
    },
    {
      id: 2,
      title: "Expo MAEN: El logro de un grupo empresarial",
      duration: "29:59",
      date: "Febrero 2024",
      description: "Conoce la historia detrás del éxito de Expo MAEN y su impacto en el sector empresarial."
    },
    {
      id: 3,
      title: "Descubrimos el protocolo en eventos",
      duration: "50:08",
      date: "Febrero 2024",
      description: "Todo lo que necesitas saber sobre protocolo y etiqueta en eventos corporativos y exposiciones."
    },
    {
      id: 4,
      title: "Ideas Poderosas para venderle al segmento del Turismo de Reuniones",
      duration: "46:07",
      date: "Enero 2024",
      description: "Estrategias efectivas para captar clientes en el mercado del turismo de reuniones y eventos."
    },
    {
      id: 5,
      title: "Construyendo un turismo imperdible en Aguascalientes",
      duration: "49:40",
      date: "Enero 2024",
      description: "Exploramos el potencial turístico de Aguascalientes y su industria de eventos."
    }
  ];

  const platforms = [
    {
      name: "iVoox",
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" opacity="0.2"/>
          <path d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/>
        </svg>
      ),
      url: "https://www.ivoox.com/podcast-xpo-day-podcast_sq_f1931888_1.html",
      color: "hover:text-orange-500"
    },
    {
      name: "Spotify",
      icon: (
        <img 
          src={spotifyIcon} 
          alt="Spotify"
          className="w-full h-full object-contain rounded-md"
        />
      ),
      url: "https://open.spotify.com/show/79KXHfdaYQ8dGU3L5L8Q7O",
      color: "hover:text-green-500"
    },
    {
      name: "Amazon Music",
      icon: (
        <img 
          src={amazonIcon} 
          alt="Amazon Music"
          className="w-full h-full object-contain rounded-md"
        />
      ),
      url: "https://www.amazon.in/XPO-DAY-Podcast/dp/B0BK12L2T9",
      color: "hover:text-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header onOpenAssistant={() => setIsAssistantOpen(true)} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-xposedde-red overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container-xposedde relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            {/* Logo del Podcast */}
            <div className="flex items-center justify-center mb-12">
              <div className="relative">
                <div className="absolute -inset-4 bg-xposedde-red/20 rounded-full blur-2xl"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <img 
                    src={logoXpoDay} 
                    alt="XPO DAY Podcast"
                    className="h-24 sm:h-32 w-auto"
                  />
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="font-body text-2xl sm:text-3xl text-white mb-6 max-w-3xl mx-auto leading-relaxed">
                Escucha los nuevos episodios de nuestro podcast oficial y conoce a las personas detrás de ideas exitosas
              </h2>
              
              {/* Platform Icons */}
              <div className="flex items-center justify-center gap-6 mb-8">
                {platforms.map((platform) => (
                  <motion.a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white transition-all duration-300 ${platform.color} hover:bg-white/20 hover:scale-110`}
                    whileHover={{ y: -4 }}
                    title={platform.name}
                  >
                    {platform.icon}
                  </motion.a>
                ))}
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Episodes Section */}
      <section className="py-20 bg-white">
        <div className="container-xposedde">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 
              className="text-[26px] sm:text-[32px] md:text-[38px] text-gray-900 mb-4"
              style={{ 
                fontFamily: "'Helvetica83HeavyExtended', sans-serif",
                fontWeight: 800,
                letterSpacing: '-0.5px'
              }}
            >
              EPISODIOS RECIENTES
            </h2>
            <div className="w-24 h-1 bg-xposedde-red"></div>
          </motion.div>

          {/* iVoox Podcast Player */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.ivoox.com/player_es_podcast_931888_zp_1.html?c1=ba2626" 
                width="100%" 
                height="400" 
                frameBorder="0" 
                allowFullScreen 
                scrolling="no" 
                loading="lazy"
                title="XPO DAY Podcast - Episodios"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subscribe CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container-xposedde">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-xposedde-red rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Headphones className="w-10 h-10 text-white" />
            </div>
            <h2 
              className="text-[26px] sm:text-[32px] md:text-[38px] text-white mb-6"
              style={{ 
                fontFamily: "'Helvetica83HeavyExtended', sans-serif",
                fontWeight: 800,
                letterSpacing: '-0.5px'
              }}
            >
              SUSCRÍBETE Y NO TE PIERDAS NINGÚN EPISODIO
            </h2>
            <p className="font-body text-xl text-white/80 mb-8">
              Disponible en todas tus plataformas favoritas de podcast
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              {platforms.map((platform) => (
                <motion.a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-xl transition-all duration-300 font-body shadow-lg hover:shadow-xl"
                >
                  <div className="w-6 h-6">
                    {platform.icon}
                  </div>
                  <span>Escuchar en {platform.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
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
          </motion.button>
        )}
      </AnimatePresence>

      <ChatAssistant 
        isOpen={isAssistantOpen} 
        onClose={() => setIsAssistantOpen(false)} 
      />
    </div>
  );
}