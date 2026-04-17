import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface HeaderProps {
  onOpenAssistant?: () => void;
}

export function Header({ onOpenAssistant }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { id: 'stands-diseno', label: 'Stands de Diseño' },
    { id: 'montaje-exposiciones', label: 'Montaje de Exposiciones' },
    { id: 'escenografias-personalizadas', label: 'Escenografías' },
    { id: 'espacios-industriales', label: 'Espacios Industriales y Comerciales' },
    { id: 'displays-pop', label: 'Displays POP' }
  ];

  const menuItems = [
    { path: '/', label: 'INICIO' },
    { path: '/nosotros', label: 'NOSOTROS' },
    { path: '/servicios', label: 'SERVICIOS', hasDropdown: true },
    { path: '/xpo-digital', label: 'XPO DIGITAL' },
    { path: '/podcast', label: 'PODCAST' },
    { path: '/contacto', label: 'CONTACTO' },
    { path: '/bolsa-trabajo', label: 'BOLSA DE TRABAJO' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md' 
          : 'bg-white/98 backdrop-blur-sm'
      }`}
    >

      <div className="container-xposedde">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div 
            className="cursor-pointer flex items-center"
            onClick={() => handleNavigation('/')}
          >
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {menuItems.map((item) => (
              item.hasDropdown ? (
                <DropdownMenu key={item.path}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className="text-[11.9px] text-gray-900 hover:text-xposedde-red transition-colors relative group inline-flex items-center gap-1"
                      style={{ 
                        fontFamily: "'Helvetica83HeavyExtended', sans-serif",
                        fontWeight: 800,
                        letterSpacing: '-0.5px'
                      }}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4 transition-transform group-data-[state=open]:rotate-180" />
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-xposedde-red transition-all duration-300 group-hover:w-full"></span>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    align="start" 
                    className="w-72 bg-white border-gray-200 shadow-xl rounded-xl p-2"
                  >
                    {services.map((service) => (
                      <DropdownMenuItem
                        key={service.id}
                        onClick={() => handleNavigation(`/servicios/${service.id}`)}
                        className="px-4 py-3 cursor-pointer hover:bg-red-50 hover:text-xposedde-red rounded-lg transition-colors font-body"
                      >
                        {service.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className="text-[11.9px] text-gray-900 hover:text-xposedde-red transition-colors relative group"
                  style={{ 
                    fontFamily: "'Helvetica83HeavyExtended', sans-serif",
                    fontWeight: 800,
                    letterSpacing: '-0.5px'
                  }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-xposedde-red transition-all duration-300 group-hover:w-full"></span>
                </button>
              )
            ))}
            {onOpenAssistant && (
              <Button 
                onClick={onOpenAssistant}
                className="btn-xposedde-primary text-[11.9px] py-2.5 px-6"
                style={{ 
                  fontFamily: "'Helvetica83HeavyExtended', sans-serif",
                  fontWeight: 800,
                  letterSpacing: '-0.5px'
                }}
              >
                Asistente Virtual
              </Button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-900 hover:text-xposedde-red transition-colors"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-7 h-7" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-7 h-7" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="lg:hidden pb-6 border-t border-gray-100"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="pt-4 space-y-2">
                {menuItems.map((item, i) => (
                  item.hasDropdown ? (
                    <div key={item.path}>
                      <motion.button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex items-center justify-between w-full text-left px-4 py-3 text-sm text-gray-900 hover:bg-red-50 hover:text-xposedde-red rounded transition-colors"
                        style={{ 
                          fontFamily: "'Helvetica83HeavyExtended', sans-serif",
                          fontWeight: 800,
                          letterSpacing: '-0.5px'
                        }}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        {item.label}
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} 
                        />
                      </motion.button>
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pt-2 space-y-1">
                              {services.map((service, idx) => (
                                <motion.button
                                  key={service.id}
                                  onClick={() => handleNavigation(`/servicios/${service.id}`)}
                                  className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-red-50 hover:text-xposedde-red rounded transition-colors font-body"
                                  initial={{ x: -10, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: idx * 0.03 }}
                                >
                                  {service.label}
                                </motion.button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.button
                      key={item.path}
                      onClick={() => handleNavigation(item.path)}
                      className="block w-full text-left px-4 py-3 text-sm text-gray-900 hover:bg-red-50 hover:text-xposedde-red rounded transition-colors"
                      style={{ 
                        fontFamily: "'Helvetica83HeavyExtended', sans-serif",
                        fontWeight: 800,
                        letterSpacing: '-0.5px'
                      }}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      {item.label}
                    </motion.button>
                  )
                ))}
                {onOpenAssistant && (
                  <div className="pt-4">
                    <Button 
                      onClick={() => {
                        onOpenAssistant();
                        setIsMenuOpen(false);
                      }}
                      className="w-full btn-xposedde-primary"
                      style={{ 
                        fontFamily: "'Helvetica83HeavyExtended', sans-serif",
                        fontWeight: 800,
                        letterSpacing: '-0.5px'
                      }}
                    >
                      Asistente Virtual
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}