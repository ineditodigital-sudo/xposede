# 🧩 Componentes Reutilizables - Xposedde

## Biblioteca de Componentes con Código

---

## 📋 Índice

1. [Botones](#botones)
2. [Cards](#cards)
3. [Formularios](#formularios)
4. [Navegación](#navegación)
5. [Secciones](#secciones)
6. [Hero Sections](#hero-sections)
7. [CTAs](#ctas)
8. [Badges y Tags](#badges-y-tags)
9. [Stats y Números](#stats-y-números)
10. [Testimonios](#testimonios)
11. [Galerías](#galerías)
12. [Footers](#footers)

---

## 🔘 Botones

### Botón Primario
```tsx
<button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2">
  Solicitar Cotización
  <ArrowRight className="w-5 h-5" />
</button>
```

### Botón Secundario (Outline)
```tsx
<button className="bg-transparent hover:bg-red-600 text-red-600 hover:text-white border-2 border-red-600 px-6 py-3 rounded-lg font-medium transition-all duration-300">
  Ver Portafolio
</button>
```

### Botón Terciario (Ghost)
```tsx
<button className="text-red-600 hover:text-red-700 font-medium inline-flex items-center gap-2 transition-colors">
  Más información
  <ArrowRight className="w-4 h-4" />
</button>
```

### Botón con Icono
```tsx
<button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-all inline-flex items-center gap-2">
  <Phone className="w-5 h-5" />
  Llamar Ahora
</button>
```

### Botón Full Width (Móvil)
```tsx
<button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-all">
  Continuar
</button>
```

---

## 🃏 Cards

### Card Básica
```tsx
<div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
  <h3 className="text-xl font-semibold text-gray-900 mb-3">
    Diseño de Stands
  </h3>
  <p className="text-gray-700 mb-4 leading-relaxed">
    Creamos stands personalizados que destacan tu marca en cada exposición.
  </p>
  <a href="#" className="text-red-600 hover:text-red-700 font-medium inline-flex items-center gap-2">
    Leer más
    <ArrowRight className="w-4 h-4" />
  </a>
</div>
```

### Card con Icono
```tsx
<div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300">
  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4">
    <Palette className="w-6 h-6" />
  </div>
  <h3 className="text-xl font-semibold text-gray-900 mb-3">
    Diseño Personalizado
  </h3>
  <p className="text-gray-700 leading-relaxed">
    Cada proyecto es único y diseñado específicamente para tus necesidades.
  </p>
</div>
```

### Card con Imagen
```tsx
<div className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
  <div className="aspect-video overflow-hidden">
    <img 
      src="..." 
      alt="Proyecto" 
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
    />
  </div>
  <div className="p-6">
    <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full mb-3">
      Nuevo
    </span>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">
      Stand Expo 2024
    </h3>
    <p className="text-gray-700 mb-4">
      Proyecto realizado para la expo internacional...
    </p>
    <a href="#" className="text-red-600 hover:text-red-700 font-medium">
      Ver detalles →
    </a>
  </div>
</div>
```

### Card de Servicio (Horizontal)
```tsx
<div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-red-200 transition-all flex gap-6">
  <div className="w-16 h-16 bg-red-100 text-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
    <Hammer className="w-8 h-8" />
  </div>
  <div className="flex-1">
    <h4 className="text-lg font-semibold text-gray-900 mb-2">
      Montaje Profesional
    </h4>
    <p className="text-gray-700 text-sm">
      Equipo especializado en montaje y desmontaje de stands.
    </p>
  </div>
</div>
```

---

## 📝 Formularios

### Input Text
```tsx
<div className="space-y-2">
  <label className="block text-sm font-medium text-gray-900">
    Nombre Completo
  </label>
  <input
    type="text"
    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
    placeholder="Juan Pérez"
  />
</div>
```

### Input Email
```tsx
<div className="space-y-2">
  <label className="block text-sm font-medium text-gray-900">
    Email
  </label>
  <input
    type="email"
    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
    placeholder="correo@ejemplo.com"
  />
  <p className="text-sm text-gray-600">
    Usaremos tu email solo para contactarte
  </p>
</div>
```

### Textarea
```tsx
<div className="space-y-2">
  <label className="block text-sm font-medium text-gray-900">
    Mensaje
  </label>
  <textarea
    rows={4}
    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all resize-none"
    placeholder="Cuéntanos sobre tu proyecto..."
  />
</div>
```

### Select
```tsx
<div className="space-y-2">
  <label className="block text-sm font-medium text-gray-900">
    Tipo de Servicio
  </label>
  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all">
    <option>Selecciona una opción</option>
    <option>Stand de Diseño</option>
    <option>Montaje de Exposición</option>
    <option>Escenografía</option>
  </select>
</div>
```

### Radio Group
```tsx
<div className="space-y-3">
  <label className="block text-sm font-medium text-gray-900 mb-3">
    Presupuesto Estimado
  </label>
  <div className="space-y-2">
    <label className="flex items-center gap-3 cursor-pointer">
      <input
        type="radio"
        name="budget"
        className="w-4 h-4 text-red-600 focus:ring-red-600"
      />
      <span className="text-gray-700">Menos de $50,000 MXN</span>
    </label>
    <label className="flex items-center gap-3 cursor-pointer">
      <input
        type="radio"
        name="budget"
        className="w-4 h-4 text-red-600 focus:ring-red-600"
      />
      <span className="text-gray-700">$50,000 - $150,000 MXN</span>
    </label>
  </div>
</div>
```

### Checkbox
```tsx
<label className="flex items-start gap-3 cursor-pointer">
  <input
    type="checkbox"
    className="w-5 h-5 text-red-600 focus:ring-red-600 rounded mt-0.5"
  />
  <span className="text-sm text-gray-700">
    Acepto los términos y condiciones y la política de privacidad
  </span>
</label>
```

---

## 🧭 Navegación

### Header Estándar
```tsx
<header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-20">
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-2xl font-bold text-gray-900">
          Xposedde
        </span>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <a href="#inicio" className="text-gray-700 hover:text-red-600 transition-colors">
          Inicio
        </a>
        <a href="#nosotros" className="text-gray-700 hover:text-red-600 transition-colors">
          Nosotros
        </a>
        <a href="#servicios" className="text-gray-700 hover:text-red-600 transition-colors">
          Servicios
        </a>
        <a href="#contacto" className="text-gray-700 hover:text-red-600 transition-colors">
          Contacto
        </a>
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-all">
          Cotizar
        </button>
      </nav>
      
      {/* Mobile Menu Button */}
      <button className="md:hidden">
        <Menu className="w-6 h-6 text-gray-700" />
      </button>
    </div>
  </div>
</header>
```

### Breadcrumb
```tsx
<nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
  <a href="/" className="hover:text-red-600 transition-colors">
    Inicio
  </a>
  <ChevronRight className="w-4 h-4" />
  <a href="/servicios" className="hover:text-red-600 transition-colors">
    Servicios
  </a>
  <ChevronRight className="w-4 h-4" />
  <span className="text-gray-900 font-medium">
    Stands de Diseño
  </span>
</nav>
```

### Tabs
```tsx
<div className="border-b border-gray-200">
  <nav className="flex gap-8">
    <button className="pb-4 border-b-2 border-red-600 text-red-600 font-medium">
      Galería
    </button>
    <button className="pb-4 border-b-2 border-transparent text-gray-600 hover:text-gray-900 font-medium">
      Información
    </button>
    <button className="pb-4 border-b-2 border-transparent text-gray-600 hover:text-gray-900 font-medium">
      Especificaciones
    </button>
  </nav>
</div>
```

---

## 📄 Secciones

### Sección Estándar con Título
```tsx
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Nuestros Servicios
      </h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        Ofrecemos soluciones integrales para tus exposiciones y eventos
      </p>
    </div>
    
    {/* Contenido */}
    <div className="grid md:grid-cols-3 gap-8">
      {/* Cards aquí */}
    </div>
  </div>
</section>
```

### Sección con Fondo Gris
```tsx
<section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Contenido */}
  </div>
</section>
```

### Sección Dos Columnas (Texto + Imagen)
```tsx
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Texto */}
      <div>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Diseño que Impacta
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Cada stand que creamos es una experiencia única diseñada para destacar tu marca.
        </p>
        <ul className="space-y-3 mb-8">
          <li className="flex items-start gap-3">
            <Check className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">Diseño 3D personalizado</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">Montaje profesional</span>
          </li>
        </ul>
        <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-all">
          Solicitar Cotización
        </button>
      </div>
      
      {/* Imagen */}
      <div className="aspect-square rounded-lg overflow-hidden shadow-xl">
        <img 
          src="..." 
          alt="Stand design" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</section>
```

---

## 🎯 Hero Sections

### Hero con Imagen de Fondo
```tsx
<section className="relative min-h-screen flex items-center">
  {/* Background */}
  <div className="absolute inset-0 z-0">
    <img 
      src="..." 
      alt="Background" 
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
  </div>
  
  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <div className="max-w-3xl">
      <span className="inline-block mb-6 px-4 py-1.5 bg-red-600/90 text-white rounded text-sm tracking-wide">
        Especialistas en Stands
      </span>
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
        Diseño y Montaje de Stands y Exposiciones
      </h1>
      <p className="text-white/90 mb-10 text-xl max-w-2xl leading-relaxed">
        Transformamos tus ideas en experiencias memorables
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-all inline-flex items-center gap-2">
          Iniciar Asistente
          <ArrowRight className="w-5 h-5" />
        </button>
        <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white backdrop-blur-sm px-8 py-3 rounded-lg font-medium transition-all">
          Contactar
        </button>
      </div>
    </div>
  </div>
</section>
```

### Hero Simple (Sin Imagen)
```tsx
<section className="py-32 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-4xl mx-auto px-4 text-center">
    <span className="inline-block mb-6 px-4 py-1.5 bg-red-100 text-red-700 rounded-full text-sm font-medium">
      Nuevo Servicio
    </span>
    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
      Escenografías Personalizadas
    </h1>
    <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
      Creamos ambientes únicos para tus eventos corporativos
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-all">
        Solicitar Cotización
      </button>
      <button className="bg-transparent border-2 border-gray-300 text-gray-700 hover:border-gray-400 px-8 py-3 rounded-lg font-medium transition-all">
        Ver Portafolio
      </button>
    </div>
  </div>
</section>
```

---

## 📣 CTAs (Call to Actions)

### CTA Inline
```tsx
<div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-12 rounded-lg text-center">
  <h3 className="text-3xl font-bold mb-4">
    ¿Listo para comenzar tu proyecto?
  </h3>
  <p className="text-lg mb-8 opacity-90">
    Solicita una cotización gratuita hoy mismo
  </p>
  <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all">
    Solicitar Cotización Gratis
  </button>
</div>
```

### CTA Sección Completa
```tsx
<section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
  <div className="max-w-4xl mx-auto px-4 text-center text-white">
    <h2 className="text-4xl font-bold mb-6">
      Transforma tu Próxima Exposición
    </h2>
    <p className="text-xl mb-10 opacity-90">
      Diseño profesional, montaje experto y resultados garantizados
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all inline-flex items-center gap-2">
        <Phone className="w-5 h-5" />
        Llamar Ahora
      </button>
      <button className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-all">
        Enviar Email
      </button>
    </div>
  </div>
</section>
```

### CTA con Estadísticas
```tsx
<div className="bg-gray-900 text-white p-12 rounded-lg">
  <div className="text-center mb-8">
    <h3 className="text-3xl font-bold mb-4">
      La Confianza de Cientos de Empresas
    </h3>
    <p className="text-lg text-white/80">
      Únete a los líderes de la industria
    </p>
  </div>
  
  <div className="grid grid-cols-3 gap-8 mb-8">
    <div className="text-center">
      <div className="text-4xl font-bold text-red-600 mb-2">+500</div>
      <div className="text-white/80 text-sm">Proyectos</div>
    </div>
    <div className="text-center">
      <div className="text-4xl font-bold text-red-600 mb-2">15+</div>
      <div className="text-white/80 text-sm">Años</div>
    </div>
    <div className="text-center">
      <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
      <div className="text-white/80 text-sm">Satisfacción</div>
    </div>
  </div>
  
  <div className="text-center">
    <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-all">
      Empieza Ahora
    </button>
  </div>
</div>
```

---

## 🏷️ Badges y Tags

### Badge Estándar
```tsx
<span className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-medium">
  Nuevo
</span>
```

### Badge con Icono
```tsx
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-medium">
  <Sparkles className="w-4 h-4" />
  Destacado
</span>
```

### Badge Outline
```tsx
<span className="inline-flex items-center px-3 py-1 rounded-full border border-red-600 text-red-600 text-sm font-medium">
  Popular
</span>
```

### Tag con Punto
```tsx
<span className="inline-flex items-center gap-2 text-sm text-gray-700">
  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
  Disponible
</span>
```

---

## 📊 Stats y Números

### Stat Simple
```tsx
<div className="text-center">
  <div className="text-5xl font-bold text-red-600 mb-2">
    +500
  </div>
  <div className="text-gray-700">
    Stands Diseñados
  </div>
</div>
```

### Stat con Descripción
```tsx
<div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
  <div className="text-4xl font-bold text-red-600 mb-2">
    15+
  </div>
  <div className="text-lg font-semibold text-gray-900 mb-2">
    Años de Experiencia
  </div>
  <p className="text-gray-700 text-sm">
    Liderando la industria de diseño de stands
  </p>
</div>
```

### Stats Grid
```tsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
  {[
    { value: '+500', label: 'Proyectos Completados' },
    { value: '15+', label: 'Años de Experiencia' },
    { value: '100%', label: 'Satisfacción Cliente' },
    { value: '24/7', label: 'Soporte Disponible' }
  ].map((stat, index) => (
    <div key={index} className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
        {stat.value}
      </div>
      <div className="text-gray-700 text-sm">
        {stat.label}
      </div>
    </div>
  ))}
</div>
```

---

## 💬 Testimonios

### Testimonio con Foto
```tsx
<div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
  <div className="flex items-center gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
    ))}
  </div>
  <p className="text-gray-700 mb-6 leading-relaxed">
    "Excelente trabajo en nuestro stand para la expo. El equipo fue muy profesional y el resultado superó nuestras expectativas."
  </p>
  <div className="flex items-center gap-4">
    <img 
      src="..." 
      alt="Cliente" 
      className="w-12 h-12 rounded-full object-cover"
    />
    <div>
      <div className="font-semibold text-gray-900">
        María González
      </div>
      <div className="text-sm text-gray-600">
        Directora de Marketing, ABC Corp
      </div>
    </div>
  </div>
</div>
```

### Testimonio Simple
```tsx
<div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-600">
  <p className="text-gray-700 italic mb-4">
    "El mejor equipo de diseño de stands con el que hemos trabajado. Altamente recomendado."
  </p>
  <div className="text-sm">
    <span className="font-semibold text-gray-900">Juan Pérez</span>
    <span className="text-gray-600"> - CEO, Empresa XYZ</span>
  </div>
</div>
```

---

## 🖼️ Galerías

### Grid de Imágenes
```tsx
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
  {images.map((image, index) => (
    <div key={index} className="aspect-square rounded-lg overflow-hidden group cursor-pointer">
      <img 
        src={image} 
        alt={`Gallery ${index + 1}`} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
    </div>
  ))}
</div>
```

### Galería con Overlay
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {projects.map((project, index) => (
    <div key={index} className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <div>
          <h4 className="text-white font-semibold mb-1">
            {project.title}
          </h4>
          <p className="text-white/80 text-sm">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>
```

---

## 🦶 Footers

### Footer Completo
```tsx
<footer className="bg-gray-900 text-white pt-16 pb-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
      {/* Logo y Descripción */}
      <div className="md:col-span-2">
        <h3 className="text-2xl font-bold mb-4">Xposedde</h3>
        <p className="text-white/70 mb-6 max-w-md">
          Expertos en diseño y montaje de stands con más de 15 años de experiencia transformando ideas en experiencias memorables.
        </p>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-all">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-all">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-all">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      {/* Enlaces */}
      <div>
        <h4 className="font-semibold mb-4">Servicios</h4>
        <ul className="space-y-2">
          <li><a href="#" className="text-white/70 hover:text-white transition-colors">Stands de Diseño</a></li>
          <li><a href="#" className="text-white/70 hover:text-white transition-colors">Montaje de Exposiciones</a></li>
          <li><a href="#" className="text-white/70 hover:text-white transition-colors">Escenografías</a></li>
        </ul>
      </div>
      
      {/* Contacto */}
      <div>
        <h4 className="font-semibold mb-4">Contacto</h4>
        <ul className="space-y-3">
          <li className="flex items-center gap-2 text-white/70">
            <Phone className="w-4 h-4" />
            <span>+52 449 513 6907</span>
          </li>
          <li className="flex items-center gap-2 text-white/70">
            <Mail className="w-4 h-4" />
            <span>contacto@xposedde.com</span>
          </li>
          <li className="flex items-start gap-2 text-white/70">
            <MapPin className="w-4 h-4 mt-1" />
            <span>Aguascalientes, México</span>
          </li>
        </ul>
      </div>
    </div>
    
    {/* Copyright */}
    <div className="pt-8 border-t border-white/10 text-center text-white/60 text-sm">
      <p>&copy; 2025 Xposedde. Todos los derechos reservados.</p>
    </div>
  </div>
</footer>
```

---

## ✅ Checklist de Componentes

Al usar estos componentes:

- [ ] Importa los iconos necesarios de `lucide-react`
- [ ] Ajusta los textos y contenidos a tu caso de uso
- [ ] Verifica que los colores sigan la paleta Xposedde
- [ ] Prueba la responsividad en móvil y desktop
- [ ] Agrega estados de hover donde corresponda
- [ ] Verifica la accesibilidad (contraste, focus states)
- [ ] Usa ImageWithFallback para imágenes cuando sea necesario

---

**Tip:** Todos estos componentes están diseñados para copiar y pegar directamente. Solo ajusta el contenido específico de tu proyecto.
