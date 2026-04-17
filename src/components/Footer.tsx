import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS } from '../config/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: 'Stands de Diseño', id: 'stands-diseno' },
    { label: 'Montaje de Exposiciones', id: 'montaje-exposiciones' },
    { label: 'Escenografías', id: 'escenografias-personalizadas' },
    { label: 'Espacios Industriales', id: 'espacios-industriales' },
    { label: 'Displays POP', id: 'displays-pop' }
  ];

  const quickLinks = [
    { label: 'Inicio', id: 'inicio', href: '/' },
    { label: 'Nosotros', id: 'nosotros', href: '/nosotros' },
    { label: 'Servicios', id: 'servicios', href: '/servicios' },
    { label: 'Contacto', id: 'contacto', href: '/contacto' },
    { label: 'Bolsa de Trabajo', id: 'bolsa-trabajo', href: '/bolsa-trabajo' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-xposedde py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="mb-6 relative inline-block">
              <img
                src="https://cdn.xposedde.com.mx/repositorio/LOGOS/LOGO%20XPOSSEDE%20BLANCO.webp"
                alt="Xposedde"
                className="h-12"
              />
              {/* Registered Trademark Icon */}
              <span 
                className="absolute -top-1 -right-3 text-white text-[10px] font-bold"
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                ®
              </span>
            </div>
            <p className="font-body text-white/80 mb-6 leading-relaxed max-w-md">
              Expertos en diseño y montaje de stands con más de 15 años de experiencia transformando ideas en experiencias memorables.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href={SOCIAL_LINKS.facebook} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded flex items-center justify-center hover:bg-xposedde-red transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href={SOCIAL_LINKS.instagram} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded flex items-center justify-center hover:bg-xposedde-red transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={SOCIAL_LINKS.linkedin} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded flex items-center justify-center hover:bg-xposedde-red transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href={SOCIAL_LINKS.twitter} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded flex items-center justify-center hover:bg-xposedde-red transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-subtitle text-lg text-white mb-6">Navegación</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.href}
                    className="font-body text-white/70 hover:text-xposedde-red transition-colors text-left"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-subtitle text-lg text-white mb-6">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/servicios/${service.id}`}
                    className="font-body text-white/70 hover:text-xposedde-red transition-colors text-left"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-xposedde-red rounded flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="font-body text-sm text-white/60">XPO1</p>
                <p className="font-subtitle text-white text-sm">Calle San Marcos #146 Col. San Marcos</p>
                <p className="font-body text-white/70 text-sm">C.P 20070 Aguascalientes, Ags.</p>
                <a 
                  href="https://maps.app.goo.gl/Uy76pwqUoYj3mCnh6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xposedde-red hover:underline text-sm"
                >
                  Ver en mapa
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-xposedde-red rounded flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="font-body text-sm text-white/60">XPO2</p>
                <p className="font-subtitle text-white text-sm">Calle Ezequiel A. Chávez Sur #237</p>
                <p className="font-body text-white/70 text-sm">Barrio de la Estación C.P. 20259 Aguascalientes, Ags.</p>
                <a 
                  href="https://maps.app.goo.gl/5BseQbbCGhnigULMA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xposedde-red hover:underline text-sm"
                >
                  Ver en mapa
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-xposedde-red rounded flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="font-body text-sm text-white/60">Teléfono</p>
                <a href="tel:+524499932223" className="font-subtitle text-white hover:text-xposedde-red transition-colors">
                  449 993 2223
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-xposedde-red rounded flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="font-body text-sm text-white/60">Email</p>
                <a href="mailto:contacto@xposedde.com.mx" className="font-subtitle text-white hover:text-xposedde-red transition-colors">
                  contacto@xposedde.com.mx
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-xposedde py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-white/60 text-center md:text-left">
              &copy; {currentYear} Xpo Sedde. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link to="/politica-privacidad" className="font-body text-sm text-white/60 hover:text-white transition-colors">
                Política de Privacidad
              </Link>
              <Link to="/terminos-condiciones" className="font-body text-sm text-white/60 hover:text-white transition-colors">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}