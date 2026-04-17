# 🎨 Identidad Visual Xposedde

## Manual de Marca y Sistema de Diseño

---

## 📋 Índice

1. [Filosofía de Diseño](#filosofía-de-diseño)
2. [Paleta de Colores](#paleta-de-colores)
3. [Tipografía](#tipografía)
4. [Espaciado y Layout](#espaciado-y-layout)
5. [Componentes](#componentes)
6. [Principios de Uso](#principios-de-uso)
7. [Ejemplos de Implementación](#ejemplos-de-implementación)

---

## 🎯 Filosofía de Diseño

### Conceptos Clave

**Minimalista** - Menos es más. Enfoque en lo esencial.  
**Institucional** - Profesional, confiable, corporativo.  
**Moderno** - Limpio, actual, tecnológico.  
**Profesional** - Serio, competente, experto.

### Valores Visuales

- ✅ **Claridad** - Comunicación directa y sin distracciones
- ✅ **Elegancia** - Sofisticación en la simplicidad
- ✅ **Confianza** - Solidez y profesionalismo
- ✅ **Innovación** - Modernidad sin excesos

### NO usar

- ❌ Animaciones excesivas o distractoras
- ❌ Emojis innecesarios en textos corporativos
- ❌ Colores llamativos o neón
- ❌ Tipografías decorativas o script
- ❌ Sombras exageradas o efectos 3D
- ❌ Degradados arcoíris o multicolor

---

## 🎨 Paleta de Colores

### Color Principal - Rojo Xposedde

El rojo es el color distintivo de la marca. Representa energía, pasión y profesionalismo.

```css
--xposedde-red-600: #dc2626  /* Color principal - úsalo como acento */
--xposedde-red-700: #b91c1c  /* Hover states */
```

#### Escala Completa de Rojos

| Tono | Hex | Uso |
|------|-----|-----|
| Red 50 | `#fef2f2` | Fondos sutiles, highlights |
| Red 100 | `#fee2e2` | Fondos de alerta suave |
| Red 200 | `#fecaca` | Bordes sutiles |
| Red 300 | `#fca5a5` | Estados deshabilitados |
| Red 400 | `#f87171` | Iconos secundarios |
| Red 500 | `#ef4444` | Alternativa al principal |
| **Red 600** | **`#dc2626`** | **🔴 COLOR PRINCIPAL** |
| Red 700 | `#b91c1c` | Hover, estados activos |
| Red 800 | `#991b1b` | Texto sobre fondos claros |
| Red 900 | `#7f1d1d` | Texto de alto contraste |

### Colores Neutros - Grises

Los grises proporcionan profesionalismo y balance.

| Tono | Hex | Uso |
|------|-----|-----|
| Gray 50 | `#fafafa` | Fondo alternativo muy sutil |
| Gray 100 | `#f5f5f5` | Fondo de secciones |
| Gray 200 | `#e5e5e5` | Bordes, divisores |
| Gray 300 | `#d4d4d4` | Bordes visibles |
| Gray 400 | `#a3a3a3` | Texto deshabilitado |
| Gray 500 | `#737373` | Texto secundario |
| Gray 600 | `#525252` | Texto terciario |
| **Gray 700** | **`#404040`** | **Texto párrafos** |
| Gray 800 | `#262626` | Texto importante |
| **Gray 900** | **`#171717`** | **Texto principal** |

### Colores de Sistema

```css
/* Fondos */
--background: #ffffff        /* Blanco puro - fondo principal */
--card: #ffffff             /* Cards y paneles */
--muted: #f5f5f5            /* Fondos secundarios */

/* Textos */
--foreground: #171717       /* Negro casi puro - texto principal */
--muted-foreground: #737373 /* Texto secundario/de apoyo */

/* Interacción */
--primary: #dc2626          /* Botones, links, CTAs */
--primary-foreground: #ffffff
--border: #e5e5e5           /* Bordes sutiles */
--ring: #dc2626             /* Focus states */
```

---

## ✍️ Tipografía

### Jerarquía de Títulos

#### H1 - Título Principal
```css
font-size: 48px (3rem)
font-weight: 700 (Bold)
line-height: 1.2
letter-spacing: -0.025em
color: #171717
```
**Uso:** Hero principal, landing pages, títulos de página

#### H2 - Título de Sección
```css
font-size: 36px (2.25rem)
font-weight: 700 (Bold)
line-height: 1.3
letter-spacing: -0.02em
color: #171717
```
**Uso:** Títulos de secciones principales (Servicios, Nosotros, Contacto)

#### H3 - Subtítulo
```css
font-size: 30px (1.875rem)
font-weight: 600 (Semibold)
line-height: 1.4
letter-spacing: -0.01em
color: #171717
```
**Uso:** Subsecciones, categorías de servicios

#### H4 - Título Menor
```css
font-size: 24px (1.5rem)
font-weight: 600 (Semibold)
line-height: 1.4
color: #171717
```
**Uso:** Cards, features, elementos destacados

#### H5 - Título Pequeño
```css
font-size: 20px (1.25rem)
font-weight: 600 (Semibold)
line-height: 1.5
color: #171717
```
**Uso:** Títulos de formularios, modales

#### H6 - Mínimo
```css
font-size: 18px (1.125rem)
font-weight: 600 (Semibold)
line-height: 1.5
color: #171717
```
**Uso:** Labels destacados, microtítulos

### Texto de Cuerpo

#### Párrafo Normal
```css
font-size: 16px (1rem)
font-weight: 400 (Normal)
line-height: 1.7
color: #404040
```
**Uso:** Texto general, descripciones, contenido

#### Párrafo Grande
```css
font-size: 18px (1.125rem)
font-weight: 400 (Normal)
line-height: 1.7
color: #404040
```
**Uso:** Leads, introducciones, textos destacados

#### Párrafo Pequeño
```css
font-size: 14px (0.875rem)
font-weight: 400 (Normal)
line-height: 1.6
color: #737373
```
**Uso:** Notas al pie, metadata, información secundaria

### Elementos de UI

#### Botones
```css
font-size: 16px (1rem)
font-weight: 500 (Medium)
letter-spacing: 0.01em
```

#### Labels
```css
font-size: 14px (0.875rem)
font-weight: 500 (Medium)
color: #171717
```

#### Input/Textarea
```css
font-size: 16px (1rem)
font-weight: 400 (Normal)
color: #171717
```

---

## 📐 Espaciado y Layout

### Sistema de Espaciado

Usamos múltiplos de 4px para mantener consistencia visual.

| Variable | Valor | Píxeles | Uso |
|----------|-------|---------|-----|
| `--spacing-xs` | 0.25rem | 4px | Espacios mínimos |
| `--spacing-sm` | 0.5rem | 8px | Entre elementos relacionados |
| `--spacing-md` | 1rem | 16px | Espaciado estándar |
| `--spacing-lg` | 1.5rem | 24px | Entre grupos |
| `--spacing-xl` | 2rem | 32px | Entre secciones pequeñas |
| `--spacing-2xl` | 3rem | 48px | Entre secciones medianas |
| `--spacing-3xl` | 4rem | 64px | Entre secciones |
| `--spacing-4xl` | 6rem | 96px | Entre secciones principales |

### Contenedores

#### Container Estándar
```css
.container-xposedde
max-width: 1280px
padding: 16px (horizontal)
```
**Uso:** Contenido general del sitio

#### Container Ancho
```css
.container-wide
max-width: 1440px
padding: 24px (horizontal)
```
**Uso:** Galerias, grids de productos

#### Container Estrecho
```css
.container-narrow
max-width: 960px
padding: 16px (horizontal)
```
**Uso:** Formularios, textos largos, artículos

### Secciones

```css
/* Sección estándar */
.section-spacing
padding-top: 96px
padding-bottom: 96px

/* Sección compacta */
.section-spacing-sm
padding-top: 64px
padding-bottom: 64px
```

### Border Radius

| Variable | Valor | Uso |
|----------|-------|-----|
| `--radius-sm` | 0.375rem (6px) | Badges, pills |
| `--radius` | 0.5rem (8px) | Estándar |
| `--radius-lg` | 0.75rem (12px) | Cards grandes |
| `--radius-xl` | 1rem (16px) | Imágenes destacadas |

---

## 🎨 Componentes

### Botones

#### Botón Primario
```html
<button class="btn-xposedde-primary">
  Solicitar Cotización
</button>
```

**Estilo:**
- Fondo: Rojo #dc2626
- Texto: Blanco
- Padding: 12px 24px
- Border radius: 8px
- Hover: Rojo oscuro #b91c1c + elevación

#### Botón Secundario
```html
<button class="btn-xposedde-secondary">
  Ver Portafolio
</button>
```

**Estilo:**
- Fondo: Transparente
- Texto: Rojo #dc2626
- Border: 2px sólido rojo
- Hover: Fondo rojo, texto blanco

#### Botón Ghost/Texto
```html
<button class="text-red-600 hover:text-red-700">
  Más información →
</button>
```

### Cards

#### Card Estándar
```html
<div class="card-xposedde">
  <h3>Diseño de Stands</h3>
  <p>Creamos experiencias memorables...</p>
</div>
```

**Estilo:**
- Fondo: Blanco
- Padding: 32px
- Border: 1px gris claro
- Shadow: Media
- Border radius: 12px
- Hover: Shadow más grande + borde rojo sutil

#### Card con Imagen
```html
<div class="card-xposedde overflow-hidden p-0">
  <img src="..." class="w-full h-48 object-cover" />
  <div class="p-6">
    <h4>Proyecto ABC</h4>
    <p>Descripción...</p>
  </div>
</div>
```

### Badges

```html
<span class="badge-xposedde">Nuevo</span>
<span class="badge-xposedde">Popular</span>
```

**Estilo:**
- Fondo: Rojo muy claro #fee2e2
- Texto: Rojo oscuro #b91c1c
- Padding: 4px 12px
- Border radius: Completo (pill)
- Font size: 14px
- Font weight: Medium

### Dividers

```html
<div class="divider-xposedde"></div>
```

**Estilo:**
- Altura: 1px
- Gradiente: Transparente → Gris → Transparente
- Margen vertical: 32px

---

## 🎭 Sombras

### Elevaciones

```css
/* Sombra sutil - Elementos planos */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)

/* Sombra media - Cards, botones */
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1)

/* Sombra grande - Modales, dropdowns */
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1)

/* Sombra extra - Popovers importantes */
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1)
```

**Uso:**
- `sm`: Borders alternativos, elementos casi planos
- `md`: Cards, botones elevados, tabs
- `lg`: Dropdowns, tooltips, modales
- `xl`: Elementos flotantes, megamenus

---

## 🎬 Animaciones

### Transiciones

```css
/* Transición suave estándar */
.transition-smooth
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)

/* Transición con bounce sutil */
.transition-bounce
transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)
```

### Hover Effects

#### Elevación
```css
.hover-lift
hover: translateY(-4px) + shadow-xl
```

**Uso:** Cards, botones grandes, imágenes interactivas

#### Scale Sutil
```css
hover: scale(1.02)
```

**Uso:** Imágenes, iconos, elementos clicables pequeños

### Principios de Animación

✅ **Sutiles** - Máximo 300-400ms  
✅ **Purposeful** - Solo si mejoran UX  
✅ **Smooth** - Curvas de easing naturales  
✅ **Performant** - Transform y opacity preferidos  

❌ Evitar animaciones largas (>500ms)  
❌ Evitar animaciones que distraen del contenido  
❌ Evitar múltiples animaciones simultáneas  

---

## 🎯 Principios de Uso

### Jerarquía Visual

1. **Color:** Usa rojo solo para elementos importantes (CTAs, links, iconos clave)
2. **Tamaño:** Títulos grandes → párrafos medianos → metadata pequeña
3. **Peso:** Bold para títulos → Medium para botones → Normal para texto
4. **Contraste:** Texto oscuro sobre fondos claros

### Espaciado Consistente

- Usa el sistema de espaciado (múltiplos de 4px)
- Más espacio entre secciones que dentro de secciones
- Respira - el espacio en blanco es tu amigo

### Balance

- 70% blanco/gris claro
- 20% gris medio/oscuro (textos)
- 10% rojo (acentos, CTAs)

### Accesibilidad

- Contraste mínimo 4.5:1 para texto normal
- Contraste mínimo 3:1 para texto grande
- Focus states visibles (outline rojo)
- Tamaño mínimo de tap targets: 44x44px

---

## 💡 Ejemplos de Implementación

### Hero Section

```html
<section class="section-spacing bg-gradient-to-r from-gray-900 to-gray-800">
  <div class="container-xposedde">
    <span class="badge-xposedde mb-4">Especialistas en Stands</span>
    <h1 class="text-white mb-6">
      Diseño y Montaje de Stands y Exposiciones
    </h1>
    <p class="text-white/90 text-lg mb-8 max-w-2xl">
      Transformamos tus ideas en experiencias memorables
    </p>
    <div class="flex gap-4">
      <button class="btn-xposedde-primary">
        Solicitar Cotización
      </button>
      <button class="btn-xposedde-secondary bg-white/10 text-white border-white">
        Ver Portafolio
      </button>
    </div>
  </div>
</section>
```

### Card de Servicio

```html
<div class="card-xposedde hover-lift">
  <div class="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4">
    <!-- Icono -->
  </div>
  <h3 class="mb-3">Stands de Diseño</h3>
  <p class="text-gray-700 mb-4">
    Creamos stands personalizados que destacan tu marca...
  </p>
  <a href="#" class="text-red-600 hover:text-red-700 font-medium">
    Más información →
  </a>
</div>
```

### Sección con Fondo Alternativo

```html
<section class="section-spacing bg-gray-50">
  <div class="container-xposedde">
    <h2 class="text-center mb-4">Nuestros Servicios</h2>
    <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
      Ofrecemos soluciones integrales para tus exposiciones
    </p>
    
    <div class="grid md:grid-cols-3 gap-8">
      <!-- Cards aquí -->
    </div>
  </div>
</section>
```

### Call to Action

```html
<section class="section-spacing-sm gradient-xposedde">
  <div class="container-narrow text-center text-white">
    <h2 class="text-white mb-4">¿Listo para crear tu stand ideal?</h2>
    <p class="text-white/90 mb-8 text-lg">
      Contáctanos hoy y recibe una cotización personalizada
    </p>
    <button class="bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-smooth">
      Solicitar Cotización Gratis
    </button>
  </div>
</section>
```

---

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile first approach */
sm: 640px   /* Tablets pequeñas */
md: 768px   /* Tablets */
lg: 1024px  /* Desktop pequeño */
xl: 1280px  /* Desktop */
2xl: 1536px /* Desktop grande */
```

### Principios Responsive

1. **Mobile first:** Diseña para móvil, expande para desktop
2. **Touch friendly:** Botones mínimo 44x44px en móvil
3. **Tipografía fluida:** Títulos más pequeños en móvil
4. **Imágenes:** Siempre con `object-cover` y aspect ratio definido
5. **Navegación:** Hamburger menu en móvil, horizontal en desktop

---

## ✅ Checklist de Implementación

Al crear un nuevo componente o página, verifica:

- [ ] Usa colores de la paleta definida
- [ ] Sigue la jerarquía tipográfica
- [ ] Espaciado consistente con el sistema
- [ ] Border radius según tipo de elemento
- [ ] Sombras apropiadas al nivel de elevación
- [ ] Transiciones suaves (<400ms)
- [ ] Contraste accesible (mínimo 4.5:1)
- [ ] Focus states visibles
- [ ] Responsive en todos los breakpoints
- [ ] Imágenes con fallback
- [ ] Estados de hover definidos
- [ ] Sin animaciones excesivas
- [ ] Sin emojis en textos corporativos (solo en UI específica)

---

## 🚫 Errores Comunes a Evitar

### ❌ NO hacer:

1. Usar colores fuera de la paleta
2. Inventar nuevos tamaños de fuente
3. Usar spacing arbitrario (no múltiplo de 4px)
4. Mezclar diferentes border radius en la misma sección
5. Animaciones que duran más de 500ms
6. Texto rojo sobre fondo rojo
7. Sombras muy oscuras o duras
8. Botones sin estados de hover
9. Links sin indicador visual
10. Elementos clicables muy pequeños

### ✅ SÍ hacer:

1. Usar variables CSS predefinidas
2. Mantener jerarquía visual clara
3. Dejar espacio en blanco
4. Probar en diferentes tamaños de pantalla
5. Verificar contraste de colores
6. Usar clases utilitarias de Tailwind consistentemente
7. Documentar componentes nuevos
8. Reutilizar componentes existentes
9. Mantener consistencia en toda la aplicación
10. Priorizar legibilidad sobre estética

---

## 📚 Recursos

### Variables CSS Disponibles

Todas las variables están definidas en `/styles/globals.css`:

- Colores: `--xposedde-red-*`, `--xposedde-gray-*`
- Espaciado: `--spacing-*`
- Tipografía: `--font-weight-*`
- Sombras: `--shadow-*`
- Border radius: `--radius-*`

### Clases Utilitarias

- Contenedores: `.container-xposedde`, `.container-wide`, `.container-narrow`
- Secciones: `.section-spacing`, `.section-spacing-sm`
- Gradientes: `.gradient-xposedde`, `.gradient-xposedde-soft`
- Botones: `.btn-xposedde-primary`, `.btn-xposedde-secondary`
- Cards: `.card-xposedde`
- Efectos: `.hover-lift`, `.transition-smooth`

### Componentes Shadcn Disponibles

Ver `/components/ui/` para componentes pre-construidos:
- Buttons, Cards, Badges
- Forms (Input, Select, Checkbox, Radio)
- Modals (Dialog, Sheet, Alert Dialog)
- Navigation (Dropdown, Tabs, Breadcrumb)
- Y más...

---

## 🎨 Paleta Rápida

**Principales:**
- 🔴 Rojo: `#dc2626` (Principal), `#b91c1c` (Hover)
- ⚫ Negro: `#171717` (Texto principal)
- ⚪ Blanco: `#ffffff` (Fondo)

**Secundarios:**
- Gris claro: `#f5f5f5` (Fondos alternos)
- Gris medio: `#737373` (Texto secundario)
- Gris oscuro: `#404040` (Texto párrafos)
- Rojo claro: `#fee2e2` (Badges, highlights)

---

## 📞 Contacto para Dudas

Si tienes dudas sobre la implementación de la identidad visual:

1. Revisa este documento primero
2. Consulta `/styles/globals.css` para variables
3. Revisa componentes existentes en `/components/`
4. Mantén consistencia con el diseño actual

---

**Versión:** 1.0  
**Última actualización:** Noviembre 2025  
**Marca:** Xposedde  
**Descripción:** Manual de identidad visual y sistema de diseño
