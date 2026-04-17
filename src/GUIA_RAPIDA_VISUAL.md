# 🚀 Guía Rápida Visual - Xposedde

## Referencia Rápida para Desarrollo

---

## 🎨 Colores (Copy-Paste)

### Rojos
```css
bg-red-600        /* #dc2626 - Principal */
bg-red-700        /* #b91c1c - Hover */
bg-red-100        /* #fee2e2 - Fondos suaves */
text-red-600      /* Texto rojo */
border-red-600    /* Bordes rojos */
```

### Grises
```css
bg-gray-50        /* #fafafa - Fondo muy sutil */
bg-gray-100       /* #f5f5f5 - Fondo secciones */
bg-gray-700       /* #404040 - Texto párrafos */
bg-gray-900       /* #171717 - Texto principal */
text-gray-600     /* Texto secundario */
border-gray-200   /* Bordes sutiles */
```

### Blancos y Negros
```css
bg-white          /* Fondo principal */
bg-black          /* Overlays oscuros */
text-white        /* Texto sobre oscuro */
```

---

## ✍️ Tipografía

### Títulos
```html
<h1 class="text-5xl font-bold text-gray-900">
  Título Principal
</h1>

<h2 class="text-4xl font-bold text-gray-900">
  Título de Sección
</h2>

<h3 class="text-3xl font-semibold text-gray-900">
  Subtítulo
</h3>

<h4 class="text-2xl font-semibold text-gray-900">
  Título Menor
</h4>
```

### Párrafos
```html
<p class="text-base text-gray-700 leading-relaxed">
  Texto normal de párrafo
</p>

<p class="text-lg text-gray-700 leading-relaxed">
  Párrafo destacado o lead
</p>

<p class="text-sm text-gray-600">
  Texto pequeño, metadata, notas
</p>
```

---

## 🎯 Botones

### Botón Primario (Rojo)
```html
<button class="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg">
  Solicitar Cotización
</button>
```

### Botón Secundario (Outline)
```html
<button class="bg-transparent hover:bg-red-600 text-red-600 hover:text-white border-2 border-red-600 px-6 py-3 rounded-lg font-medium transition-all">
  Ver Más
</button>
```

### Botón Ghost
```html
<button class="text-red-600 hover:text-red-700 font-medium">
  Más información →
</button>
```

---

## 🃏 Cards

### Card Básica
```html
<div class="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-all">
  <h3 class="text-xl font-semibold mb-3">Título</h3>
  <p class="text-gray-700 mb-4">Descripción...</p>
  <a href="#" class="text-red-600 hover:text-red-700 font-medium">
    Leer más →
  </a>
</div>
```

### Card con Icono
```html
<div class="bg-white p-8 rounded-lg shadow-md border border-gray-200">
  <div class="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4">
    <!-- Icono aquí -->
  </div>
  <h3 class="text-xl font-semibold mb-3">Servicio</h3>
  <p class="text-gray-700">Descripción del servicio...</p>
</div>
```

### Card Hover con Elevación
```html
<div class="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
  <!-- Contenido -->
</div>
```

---

## 📦 Contenedores

### Container Estándar
```html
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <!-- Contenido -->
</div>
```

### Container Estrecho (Formularios, Texto)
```html
<div class="max-w-4xl mx-auto px-4">
  <!-- Contenido -->
</div>
```

### Container Ancho (Galerías)
```html
<div class="max-w-[1440px] mx-auto px-6">
  <!-- Contenido -->
</div>
```

---

## 📐 Secciones

### Sección Estándar
```html
<section class="py-24 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-4xl font-bold text-center mb-4">Título</h2>
    <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
      Descripción
    </p>
    <!-- Contenido -->
  </div>
</section>
```

### Sección con Fondo Gris
```html
<section class="py-24 bg-gray-50">
  <!-- Contenido -->
</section>
```

### Sección con Fondo Rojo
```html
<section class="py-24 bg-gradient-to-r from-red-600 to-red-700">
  <div class="max-w-7xl mx-auto px-4 text-white">
    <!-- Contenido -->
  </div>
</section>
```

---

## 🎨 Badges

### Badge Rojo
```html
<span class="inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-medium">
  Nuevo
</span>
```

### Badge Gris
```html
<span class="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
  Popular
</span>
```

---

## 📸 Imágenes

### Imagen con Overlay Oscuro
```html
<div class="relative">
  <img src="..." class="w-full h-full object-cover" />
  <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
</div>
```

### Imagen con Overlay Rojo
```html
<div class="relative">
  <img src="..." class="w-full h-full object-cover" />
  <div class="absolute inset-0 bg-gradient-to-r from-red-600/90 to-red-600/60"></div>
</div>
```

### Imagen con Aspect Ratio
```html
<div class="aspect-video overflow-hidden rounded-lg">
  <img src="..." class="w-full h-full object-cover" />
</div>
```

---

## 🎯 Grid Layouts

### Grid 2 Columnas
```html
<div class="grid md:grid-cols-2 gap-8">
  <div>Columna 1</div>
  <div>Columna 2</div>
</div>
```

### Grid 3 Columnas
```html
<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
```

### Grid 4 Columnas
```html
<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
  <!-- Items -->
</div>
```

---

## 🎨 Gradientes

### Gradiente Rojo
```html
<div class="bg-gradient-to-r from-red-600 to-red-700">
  <!-- Contenido -->
</div>
```

### Gradiente Suave
```html
<div class="bg-gradient-to-b from-gray-50 to-white">
  <!-- Contenido -->
</div>
```

### Texto con Gradiente
```html
<h1 class="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
  Título con Gradiente
</h1>
```

---

## 🎭 Sombras

### Sombra Pequeña
```css
shadow-sm         /* Sutil */
```

### Sombra Media (Cards)
```css
shadow-md         /* Cards normales */
```

### Sombra Grande (Hover)
```css
shadow-lg         /* Hover states */
shadow-xl         /* Elementos flotantes */
```

---

## 🎬 Animaciones

### Hover Lift
```html
<div class="hover:-translate-y-1 transition-all duration-300">
  <!-- Se eleva al hover -->
</div>
```

### Hover Scale
```html
<div class="hover:scale-105 transition-transform duration-300">
  <!-- Crece al hover -->
</div>
```

### Hover Sombra
```html
<div class="shadow-md hover:shadow-xl transition-shadow duration-300">
  <!-- Sombra crece al hover -->
</div>
```

### Combinación (Card Perfecta)
```html
<div class="shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
  <!-- Se eleva Y crece la sombra -->
</div>
```

---

## 📱 Responsive

### Ocultar/Mostrar por Tamaño
```html
<div class="hidden md:block">
  Solo desktop
</div>

<div class="block md:hidden">
  Solo móvil
</div>
```

### Cambiar Dirección
```html
<div class="flex flex-col md:flex-row gap-4">
  <!-- Vertical en móvil, horizontal en desktop -->
</div>
```

### Tamaños Responsivos
```html
<h1 class="text-3xl md:text-5xl font-bold">
  Responsive Title
</h1>

<div class="p-4 md:p-8">
  Padding responsive
</div>
```

---

## 🔗 Links

### Link Estándar
```html
<a href="#" class="text-red-600 hover:text-red-700 underline">
  Enlace normal
</a>
```

### Link Sin Underline
```html
<a href="#" class="text-red-600 hover:text-red-700 font-medium">
  Enlace sin subrayado
</a>
```

### Link con Flecha
```html
<a href="#" class="text-red-600 hover:text-red-700 font-medium inline-flex items-center gap-2">
  Ver más
  <svg class="w-4 h-4"><!-- Flecha --></svg>
</a>
```

---

## 📋 Formularios

### Input
```html
<input 
  type="text" 
  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
  placeholder="Nombre completo"
/>
```

### Textarea
```html
<textarea 
  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
  rows="4"
  placeholder="Mensaje"
></textarea>
```

### Label
```html
<label class="block text-sm font-medium text-gray-900 mb-2">
  Nombre
</label>
```

### Grupo de Form
```html
<div class="space-y-2">
  <label class="block text-sm font-medium text-gray-900">
    Email
  </label>
  <input 
    type="email" 
    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
  />
  <p class="text-sm text-gray-600">
    Usaremos tu email solo para contactarte
  </p>
</div>
```

---

## 📊 Stats/Números

### Stat Card
```html
<div class="text-center">
  <div class="text-4xl font-bold text-red-600 mb-2">
    +500
  </div>
  <div class="text-gray-600">
    Stands Diseñados
  </div>
</div>
```

### Stats Grid
```html
<div class="grid grid-cols-3 gap-8">
  <div class="text-center">
    <div class="text-3xl font-bold text-red-600 mb-2">15+</div>
    <div class="text-sm text-gray-600">Años</div>
  </div>
  <div class="text-center">
    <div class="text-3xl font-bold text-red-600 mb-2">500+</div>
    <div class="text-sm text-gray-600">Proyectos</div>
  </div>
  <div class="text-center">
    <div class="text-3xl font-bold text-red-600 mb-2">100%</div>
    <div class="text-sm text-gray-600">Satisfacción</div>
  </div>
</div>
```

---

## 🎯 Call to Action

### CTA Inline
```html
<div class="bg-red-600 text-white px-6 py-12 rounded-lg text-center">
  <h3 class="text-2xl font-bold mb-4">¿Listo para comenzar?</h3>
  <p class="mb-6">Solicita una cotización gratis hoy</p>
  <button class="bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50">
    Contactar Ahora
  </button>
</div>
```

### CTA Sección Completa
```html
<section class="py-16 bg-gradient-to-r from-red-600 to-red-700">
  <div class="max-w-4xl mx-auto px-4 text-center text-white">
    <h2 class="text-3xl font-bold mb-4">
      Transforma tu próxima exposición
    </h2>
    <p class="text-lg mb-8 opacity-90">
      Diseño, montaje y resultados garantizados
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <button class="bg-white text-red-600 px-8 py-3 rounded-lg font-medium">
        Solicitar Cotización
      </button>
      <button class="bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg font-medium">
        Ver Portafolio
      </button>
    </div>
  </div>
</section>
```

---

## 🎨 Dividers

### Divider Simple
```html
<hr class="border-gray-200 my-8" />
```

### Divider con Gradiente
```html
<div class="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-12"></div>
```

### Divider con Texto
```html
<div class="relative my-8">
  <div class="absolute inset-0 flex items-center">
    <div class="w-full border-t border-gray-200"></div>
  </div>
  <div class="relative flex justify-center">
    <span class="bg-white px-4 text-sm text-gray-600">o</span>
  </div>
</div>
```

---

## 📝 Listas

### Lista con Checks
```html
<ul class="space-y-3">
  <li class="flex items-start gap-3">
    <svg class="w-6 h-6 text-red-600 flex-shrink-0"><!-- Check icon --></svg>
    <span class="text-gray-700">Diseño personalizado</span>
  </li>
  <li class="flex items-start gap-3">
    <svg class="w-6 h-6 text-red-600 flex-shrink-0"><!-- Check icon --></svg>
    <span class="text-gray-700">Montaje profesional</span>
  </li>
</ul>
```

---

## 🎯 Iconos (Lucide React)

```jsx
import { Check, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

// Icono simple
<Check className="w-6 h-6 text-red-600" />

// Icono en círculo
<div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
  <Check className="w-6 h-6 text-red-600" />
</div>

// Icono con texto
<div class="flex items-center gap-2">
  <Phone className="w-5 h-5 text-red-600" />
  <span>+52 449 513 6907</span>
</div>
```

---

## ⚡ Patrones Comunes

### Hero Section
```html
<section class="relative min-h-screen flex items-center">
  <div class="absolute inset-0">
    <img src="..." class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
  </div>
  <div class="relative max-w-7xl mx-auto px-4 text-white">
    <h1 class="text-5xl font-bold mb-6">Título Hero</h1>
    <p class="text-xl mb-8 max-w-2xl">Descripción...</p>
    <button class="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg">
      CTA Principal
    </button>
  </div>
</section>
```

### Feature Grid
```html
<section class="py-24">
  <div class="max-w-7xl mx-auto px-4">
    <h2 class="text-4xl font-bold text-center mb-12">Características</h2>
    <div class="grid md:grid-cols-3 gap-8">
      <div class="text-center">
        <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <!-- Icono -->
        </div>
        <h3 class="text-xl font-semibold mb-2">Feature 1</h3>
        <p class="text-gray-700">Descripción...</p>
      </div>
      <!-- Más features... -->
    </div>
  </div>
</section>
```

---

## ✅ Checklist Rápida

Al crear un componente nuevo:

- [ ] Usa `bg-red-600` para elementos principales
- [ ] Usa `text-gray-900` para títulos
- [ ] Usa `text-gray-700` para párrafos
- [ ] Usa `shadow-md` para cards
- [ ] Usa `rounded-lg` para elementos grandes
- [ ] Agrega `hover:` states a elementos interactivos
- [ ] Agrega `transition-all` para animaciones
- [ ] Usa `max-w-7xl mx-auto px-4` para contenedores
- [ ] Usa `py-24` para secciones
- [ ] Usa clases responsive `md:` y `lg:`

---

## 🎨 Paleta Copy-Paste

```
Rojo Principal:  #dc2626
Rojo Hover:      #b91c1c
Rojo Claro:      #fee2e2

Negro:           #171717
Gris Oscuro:     #404040
Gris Medio:      #737373
Gris Claro:      #f5f5f5
Blanco:          #ffffff
```

---

**✨ Tip:** Copia y pega estos snippets directamente. Todos están probados y siguen la identidad visual de Xposedde.
