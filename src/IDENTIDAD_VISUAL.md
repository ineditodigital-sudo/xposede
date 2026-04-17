# 🎨 Identidad Visual - Xposedde

## Filosofía de Diseño

**Minimalista. Institucional. Profesional. Confiable.**

La identidad visual de Xposedde refleja experiencia, solidez y profesionalismo en el sector de diseño y montaje de stands. Cada elemento está diseñado para transmitir confianza y expertise.

---

## 🎯 Principios de Diseño

### 1. Minimalismo Funcional
- Espacios en blanco generosos
- Elementos solo cuando añaden valor
- Jerarquía visual clara y obvia
- Contenido antes que decoración

### 2. Profesionalismo Corporativo
- Colores institucionales consistentes
- Tipografía legible y seria
- Sombras sutiles y elegantes
- Transiciones suaves sin excesos

### 3. Modernidad Sobria
- Diseño contemporáneo sin tendencias efímeras
- Animaciones sutiles y con propósito
- Interface limpia e intuitiva
- Responsive y accesible

### 4. Confianza Visual
- Consistencia en todos los elementos
- Contraste apropiado para legibilidad
- Feedback visual claro
- Estados interactivos evidentes

---

## 🎨 Paleta de Colores

### Color Principal - Rojo Xposedde

**#DC2626** - Rojo Corporativo
- Representa pasión, energía y acción
- Usado para: CTAs, acentos importantes, botones primarios
- Contraste óptimo sobre blanco
- Transmite urgencia controlada y profesionalismo

```css
--xposedde-red: #DC2626;
--xposedde-red-dark: #B91C1C;
--xposedde-red-light: #EF4444;
```

### Colores Secundarios

**#1F2937** - Gris Oscuro (Texto Principal)
- Usado para: Títulos, texto de cuerpo
- Excelente legibilidad
- Profesional y serio

**#4B5563** - Gris Medio (Texto Secundario)
- Usado para: Subtítulos, texto de apoyo
- Jerarquía visual clara

**#9CA3AF** - Gris Claro (Texto Deshabilitado)
- Usado para: Placeholders, texto deshabilitado

### Colores de Fondo

**#FFFFFF** - Blanco
- Fondo principal del sitio
- Limpio y profesional

**#F9FAFB** - Gris Muy Claro
- Fondos alternados
- Secciones destacadas sutilmente

**#F3F4F6** - Gris Ultra Claro
- Hover states
- Cards y contenedores

### Colores de Soporte

**#10B981** - Verde Éxito
- Mensajes de confirmación
- Estados positivos
- WhatsApp branding

**#3B82F6** - Azul Información
- Links
- Información destacada

**#F59E0B** - Amarillo/Naranja Advertencia
- Advertencias sutiles
- Estados de atención

---

## 📝 Tipografía

### Font Stack

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", 
             Roboto, "Helvetica Neue", Arial, sans-serif;
```

**Razones:**
- Sans-serif moderna y profesional
- Excelente legibilidad en pantalla
- Nativa en la mayoría de sistemas
- Consistencia cross-platform

### Escala Tipográfica

```
Display:   3.5rem (56px) - Hero principal
H1:        2.5rem (40px) - Títulos de sección
H2:        2rem   (32px) - Subtítulos importantes
H3:        1.5rem (24px) - Títulos de cards
H4:        1.25rem (20px) - Subtítulos menores
Body:      1rem   (16px) - Texto normal
Small:     0.875rem (14px) - Texto pequeño
Tiny:      0.75rem (12px) - Labels, meta info
```

### Pesos de Fuente

```
Light:     300 - Raramente usado
Regular:   400 - Texto de cuerpo
Medium:    500 - Botones, labels
Semibold:  600 - Subtítulos
Bold:      700 - Títulos importantes
```

### Altura de Línea

```
Títulos:   1.2  - Compacto y legible
Body:      1.6  - Confortable para lectura
UI:        1.5  - Botones, navegación
```

---

## 🔲 Sistema de Espaciado

### Base: 4px (0.25rem)

```
xs:   4px   (0.25rem) - Padding interno mínimo
sm:   8px   (0.5rem)  - Espaciado pequeño
md:   16px  (1rem)    - Espaciado estándar
lg:   24px  (1.5rem)  - Espaciado generoso
xl:   32px  (2rem)    - Separación de secciones
2xl:  48px  (3rem)    - Espaciado dramático
3xl:  64px  (4rem)    - Separación de bloques grandes
4xl:  80px  (5rem)    - Secciones principales
5xl:  96px  (6rem)    - Hero sections
```

### Aplicación

**Elementos relacionados:** 8-16px  
**Grupos de contenido:** 24-32px  
**Secciones:** 64-96px  
**Padding de containers:** 16-24px (móvil), 32-48px (desktop)

---

## 🎭 Sombras

### Sistema de Elevación

```css
/* Sutil - Cards en reposo */
shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);

/* Estándar - Cards, dropdowns */
shadow: 0 1px 3px rgba(0, 0, 0, 0.1),
        0 1px 2px rgba(0, 0, 0, 0.06);

/* Media - Elements destacados */
shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07),
           0 2px 4px rgba(0, 0, 0, 0.06);

/* Grande - Modales, popovers */
shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1),
           0 4px 6px rgba(0, 0, 0, 0.05);

/* Extra grande - Elementos flotantes importantes */
shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1),
           0 10px 10px rgba(0, 0, 0, 0.04);
```

**Principio:** Las sombras deben ser sutiles, nunca dramáticas.

---

## 🔘 Bordes y Radios

### Border Radius

```css
none:   0       - Elementos cuadrados exactos
sm:     2px     - Muy sutil
default: 6px    - Estándar para botones, inputs
md:     8px     - Cards
lg:     12px    - Contenedores grandes
xl:     16px    - Elementos destacados
full:   9999px  - Círculos, pills
```

**Estándar Xposedde:** 6-8px para la mayoría de elementos

### Bordes

```css
border-width: 1px   - Estándar
border-color: rgba(0, 0, 0, 0.1) - Sutil y profesional
```

---

## 🎬 Animaciones y Transiciones

### Principios

1. **Con Propósito:** Solo animar si mejora UX
2. **Sutiles:** Nunca distraer del contenido
3. **Rápidas:** 200-300ms para la mayoría
4. **Naturales:** Easing suave

### Duraciones

```css
instant:  100ms  - Feedback inmediato (hover)
fast:     200ms  - Transiciones estándar
normal:   300ms  - Animaciones comunes
slow:     500ms  - Animaciones complejas
```

### Easing

```css
ease-out: Para entradas (elementos apareciendo)
ease-in:  Para salidas (elementos desapareciendo)
ease-in-out: Para transiciones de estado
```

### Qué Animar

✅ **Sí animar:**
- Hover states en botones/links
- Apertura/cierre de menús
- Transiciones de páginas/secciones
- Feedback de interacción
- Scroll indicators

❌ **No animar:**
- Texto entrando letra por letra
- Elementos rebotando sin razón
- Animaciones infinitas distractoras
- Efectos 3D complejos
- Paralaje exagerado

---

## 🔲 Componentes Base

### Botones

**Primario (Rojo)**
```
Fondo: #DC2626
Hover: #B91C1C
Texto: Blanco
Padding: 12px 24px
Border-radius: 6px
Sombra: shadow-sm → shadow-md en hover
```

**Secundario (Blanco/Outline)**
```
Fondo: Transparente/Blanco
Border: 1px solid #DC2626 / rgba(0,0,0,0.1)
Texto: #DC2626 / #1F2937
Padding: 12px 24px
Border-radius: 6px
```

### Cards

```
Fondo: Blanco
Borde: 1px solid rgba(0,0,0,0.08)
Border-radius: 8px
Padding: 24px
Sombra: shadow-sm → shadow-md en hover
```

### Inputs

```
Fondo: #F9FAFB
Borde: 1px solid rgba(0,0,0,0.1)
Border-radius: 6px
Padding: 10px 14px
Focus: Border #DC2626, Ring 2px #DC2626 20%
```

---

## 📐 Layout y Grid

### Max Width

```
Container principal: 1280px (80rem)
Contenido de texto: 768px (48rem)
```

### Breakpoints

```
sm:  640px  - Móviles grandes
md:  768px  - Tablets
lg:  1024px - Laptops
xl:  1280px - Desktops
2xl: 1536px - Pantallas grandes
```

### Grid

**Desktop:** 12 columnas con gap de 24px  
**Mobile:** 1 columna con padding de 16px

---

## 🎯 Iconografía

### Librería: Lucide React

**Razones:**
- Consistente y profesional
- Amplia variedad de iconos
- Tamaños predecibles
- Fácil customización

### Tamaños

```
xs: 16px - Inline con texto pequeño
sm: 20px - Inline con texto normal
md: 24px - Estándar para UI
lg: 32px - Iconos destacados
xl: 48px - Hero icons
```

### Color

Por defecto heredan el color del texto.  
Rojo para iconos de acción (#DC2626)

---

## 🖼️ Imágenes

### Tratamiento

- **Hero:** Overlay oscuro (black/60-70%)
- **Galería:** Sin overlay, calidad alta
- **Thumbnails:** Aspect ratio 16:9 o 4:3
- **Optimización:** WebP cuando sea posible

### Filtros

```
Hero: brightness(0.7) contrast(1.1)
```

---

## ♿ Accesibilidad

### Contrastes Mínimos

- **Texto normal:** 4.5:1
- **Texto grande:** 3:1
- **Elementos UI:** 3:1

### Estados de Focus

```
outline: 2px solid #DC2626
outline-offset: 2px
```

### Texto Alternativo

Todas las imágenes deben tener alt descriptivo.

---

## 📱 Responsive Design

### Mobile First

Diseñar primero para móvil, expandir a desktop.

### Ajustes por Dispositivo

**Móvil:**
- Padding: 16px
- Font-size: Base 16px
- Botones: Full width
- Stack vertical

**Desktop:**
- Padding: 32-48px
- Font-size: Base 16px
- Botones: Auto width
- Grid horizontal

---

## ✅ Checklist de Consistencia

Al crear nuevos componentes, verificar:

- [ ] Usa colores de la paleta definida
- [ ] Tipografía de la escala establecida
- [ ] Espaciado múltiplo de 4px
- [ ] Border radius consistente (6-8px)
- [ ] Sombras sutiles (shadow-sm a shadow-lg)
- [ ] Animaciones rápidas (200-300ms)
- [ ] Contraste accesible (4.5:1 mínimo)
- [ ] Estados hover/focus claros
- [ ] Responsive en todos los breakpoints
- [ ] Iconos de Lucide React

---

## 🎨 Ejemplos de Aplicación

### Sección Hero
```
Fondo: Imagen con overlay black/70%
Título: H1 blanco, 2.5rem
Subtítulo: P blanco/90%, 1.25rem
Botón primario: Rojo #DC2626
Botón secundario: Outline blanco
Padding vertical: 96px (móvil) / 128px (desktop)
```

### Card de Servicio
```
Fondo: Blanco
Borde: 1px rgba(0,0,0,0.08)
Border-radius: 8px
Padding: 24px
Icono: Rojo #DC2626, 32px
Título: H3 #1F2937, 1.5rem
Texto: P #4B5563, 1rem
Hover: Sombra shadow-sm → shadow-md
```

### Botón de Acción
```
Fondo: #DC2626
Texto: Blanco, medium (500)
Padding: 12px 24px
Border-radius: 6px
Hover: #B91C1C + shadow-md
Transición: 200ms ease-out
```

---

## 🚀 Implementación

Todos estos tokens están definidos en:
- `/styles/globals.css` - Variables CSS
- Tailwind CSS v4 - Clases de utilidad

### Uso en Código

```tsx
// Botón primario
<Button className="bg-[#DC2626] hover:bg-[#B91C1C]">
  Acción Principal
</Button>

// Card profesional
<Card className="border border-black/10 rounded-lg p-6 
                 shadow-sm hover:shadow-md transition-shadow">
  Contenido
</Card>

// Texto con jerarquía
<h2 className="text-[#1F2937] mb-4">Título</h2>
<p className="text-[#4B5563] leading-relaxed">Contenido</p>
```

---

## 🎯 Resultado Final

Una identidad visual que comunica:

✅ **Profesionalismo** - A través de colores institucionales  
✅ **Confianza** - Con diseño limpio y consistente  
✅ **Experiencia** - Mediante minimalismo sofisticado  
✅ **Modernidad** - Con toques contemporáneos sutiles  
✅ **Solidez** - Usando espaciado generoso y jerarquía clara  

---

**Creado para:** Xposedde  
**Fecha:** Noviembre 2025  
**Versión:** 1.0
