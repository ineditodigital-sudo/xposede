import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { NosotrosPage } from './pages/NosotrosPage';
import { ServiciosPage } from './pages/ServiciosPage';
import { ContactoPage } from './pages/ContactoPage';
import { PodcastPage } from './pages/PodcastPage';
import { XpoDigitalPage } from './pages/XpoDigitalPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { StandsDisenoPage } from './pages/StandsDisenoPage_new';
import { MontajeExposicionesPage } from './pages/MontajeExposicionesPage';
import { EscenografiasPage } from './pages/EscenografiasPage';
import { TerminosCondicionesPage } from './pages/TerminosCondicionesPage';
import { BolsaTrabajoPage } from './pages/BolsaTrabajoPage';
import { PoliticaPrivacidadPage } from './pages/PoliticaPrivacidadPage';
import { ScrollToTop } from './components/ScrollToTop';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    document.title = 'Xpo Sedde | Diseño y Montaje de Stands';
    
    // Agregar fuente Helvetica83HeavyExtended al Head
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: 'Helvetica83HeavyExtended';
        src: url('https://cdn.xposedde.com.mx/repositorio/Helvetica%20Neue%20LT%20Std%2083%20Heavy%20Extended.otf') format('opentype');
        font-weight: 800;
        font-style: normal;
        font-display: swap;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/xpo-digital" element={<XpoDigitalPage />} />
        <Route path="/podcast" element={<PodcastPage />} />
        <Route path="/servicios/stands-diseno" element={<StandsDisenoPage />} />
        <Route path="/servicios/montaje-exposiciones" element={<MontajeExposicionesPage />} />
        <Route path="/servicios/escenografias-personalizadas" element={<EscenografiasPage />} />
        <Route path="/servicios/:serviceId" element={<ServiceDetailPage />} />
        <Route path="/terminos-condiciones" element={<TerminosCondicionesPage />} />
        <Route path="/bolsa-trabajo" element={<BolsaTrabajoPage />} />
        <Route path="/politica-privacidad" element={<PoliticaPrivacidadPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}