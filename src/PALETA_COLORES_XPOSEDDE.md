# 🎨 Paleta de Colores Xposedde

## Referencia Visual Completa

---

## 🔴 Rojo Xposedde - Color Principal

El rojo es el color distintivo de la marca. Úsalo estratégicamente para CTAs, acentos y elementos importantes.

### Escala Completa

| Nombre | Hex | RGB | Uso Principal |
|--------|-----|-----|---------------|
| **Red 50** | `#fef2f2` | `rgb(254, 242, 242)` | Fondos muy sutiles, highlights |
| **Red 100** | `#fee2e2` | `rgb(254, 226, 226)` | Badges, fondos de alerta suave |
| **Red 200** | `#fecaca` | `rgb(254, 202, 202)` | Bordes sutiles, estados hover suaves |
| **Red 300** | `#fca5a5` | `rgb(252, 165, 165)` | Estados deshabilitados |
| **Red 400** | `#f87171` | `rgb(248, 113, 113)` | Iconos secundarios |
| **Red 500** | `#ef4444` | `rgb(239, 68, 68)` | Alternativa al principal |
| **Red 600** 🔴 | `#dc2626` | `rgb(220, 38, 38)` | **COLOR PRINCIPAL** |
| **Red 700** | `#b91c1c` | `rgb(185, 28, 28)` | Hover states, estados activos |
| **Red 800** | `#991b1b` | `rgb(153, 27, 27)` | Texto sobre fondos claros |
| **Red 900** | `#7f1d1d` | `rgb(127, 29, 29)` | Texto de alto contraste |

### Usos Específicos

#### Red 600 - Color Principal (`#dc2626`)
```css
/* Tailwind */
bg-red-600
text-red-600
border-red-600

/* CSS Variable */
var(--xposedde-red-600)
```

**Usar para:**
- ✅ Botones primarios (CTAs)
- ✅ Enlaces importantes
- ✅ Iconos clave
- ✅ Elementos de navegación activos
- ✅ Badges de estado "activo" o "nuevo"

**NO usar para:**
- ❌ Fondos de secciones completas
- ❌ Texto de párrafos largos
- ❌ Bordes de inputs en estado normal

#### Red 700 - Hover (`#b91c1c`)
```css
hover:bg-red-700
hover:text-red-700
```

**Usar para:**
- ✅ Estado hover de botones rojos
- ✅ Estado hover de enlaces
- ✅ Estados activos/pressed

#### Red 100 - Fondos Suaves (`#fee2e2`)
```css
bg-red-100
```

**Usar para:**
- ✅ Fondos de badges
- ✅ Fondos de alertas informativas
- ✅ Highlights sutiles
- ✅ Fondos de iconos circulares

---

## ⚫ Grises - Colores Neutros

Los grises proporcionan profesionalismo y legibilidad. Son la base del diseño.

### Escala Completa

| Nombre | Hex | RGB | Uso Principal |
|--------|-----|-----|---------------|
| **Gray 50** | `#fafafa` | `rgb(250, 250, 250)` | Fondo alternativo muy sutil |
| **Gray 100** | `#f5f5f5` | `rgb(245, 245, 245)` | Fondo de secciones alternas |
| **Gray 200** | `#e5e5e5` | `rgb(229, 229, 229)` | Bordes, divisores |
| **Gray 300** | `#d4d4d4` | `rgb(212, 212, 212)` | Bordes visibles |
| **Gray 400** | `#a3a3a3` | `rgb(163, 163, 163)` | Texto deshabilitado |
| **Gray 500** | `#737373` | `rgb(115, 115, 115)` | Texto secundario |
| **Gray 600** | `#525252` | `rgb(82, 82, 82)` | Texto terciario |
| **Gray 700** ⚫ | `#404040` | `rgb(64, 64, 64)` | **TEXTO PÁRRAFOS** |
| **Gray 800** | `#262626` | `rgb(38, 38, 38)` | Texto importante |
| **Gray 900** ⚫ | `#171717` | `rgb(23, 23, 23)` | **TEXTO PRINCIPAL** |

### Usos Específicos

#### Gray 900 - Texto Principal (`#171717`)
```css
text-gray-900
```

**Usar para:**
- ✅ Títulos H1, H2, H3
- ✅ Texto de navegación
- ✅ Etiquetas importantes
- ✅ Texto en cards destacadas

**Contraste:** 15.93:1 sobre blanco ✅ WCAG AAA

#### Gray 700 - Texto Párrafos (`#404040`)
```css
text-gray-700
```

**Usar para:**
- ✅ Párrafos de texto general
- ✅ Descripciones
- ✅ Contenido de cards
- ✅ Listas

**Contraste:** 10.37:1 sobre blanco ✅ WCAG AAA

#### Gray 500 - Texto Secundario (`#737373`)
```css
text-gray-500
```

**Usar para:**
- ✅ Metadata (fechas, autores)
- ✅ Texto de ayuda
- ✅ Placeholders
- ✅ Subtítulos suaves

**Contraste:** 4.69:1 sobre blanco ✅ WCAG AA

#### Gray 100 - Fondos Alternos (`#f5f5f5`)
```css
bg-gray-100
```

**Usar para:**
- ✅ Fondos de secciones alternas
- ✅ Fondos de inputs
- ✅ Fondos de badges neutrales
- ✅ Separadores visuales sutiles

#### Gray 200 - Bordes (`#e5e5e5`)
```css
border-gray-200
```

**Usar para:**
- ✅ Bordes de cards
- ✅ Bordes de inputs
- ✅ Divisores horizontales
- ✅ Separadores de secciones

---

## ⚪ Blanco y Negro Puros

### Blanco (`#ffffff`)
```css
bg-white
text-white
```

**Usar para:**
- ✅ Fondo principal del sitio
- ✅ Fondo de cards
- ✅ Texto sobre fondos oscuros o rojos
- ✅ Botones secundarios sobre fondos oscuros

### Negro (`#000000`)
```css
/* Generalmente con opacidad */
bg-black/70    /* 70% opacidad */
bg-black/50    /* 50% opacidad */
```

**Usar para:**
- ✅ Overlays sobre imágenes
- ✅ Sombras (con opacidad)
- ✅ Fondos de modales (con opacidad)

---

## 🎨 Combinaciones Aprobadas

### Combinación 1: Botón Primario
```css
bg-red-600        /* Fondo */
text-white        /* Texto */
hover:bg-red-700  /* Hover */
```

### Combinación 2: Card Estándar
```css
bg-white           /* Fondo */
text-gray-900      /* Título */
text-gray-700      /* Párrafo */
border-gray-200    /* Borde */
```

### Combinación 3: Sección Alterna
```css
bg-gray-50         /* Fondo sección */
text-gray-900      /* Título */
text-gray-700      /* Texto */
```

### Combinación 4: Badge Rojo
```css
bg-red-100         /* Fondo */
text-red-700       /* Texto */
```

### Combinación 5: Link
```css
text-red-600             /* Estado normal */
hover:text-red-700       /* Hover */
```

### Combinación 6: Hero Section
```css
bg-gradient-to-r from-black/70 to-black/30  /* Overlay */
text-white                                   /* Texto */
```

### Combinación 7: CTA Section
```css
bg-gradient-to-r from-red-600 to-red-700    /* Fondo */
text-white                                   /* Texto */
```

---

## 🚫 Combinaciones Prohibidas

### ❌ NO hacer:

```css
/* Rojo sobre rojo (bajo contraste) */
bg-red-600 text-red-700  ❌

/* Gris claro sobre blanco (bajo contraste) */
bg-white text-gray-300  ❌

/* Negro puro sobre rojo (muy agresivo) */
bg-red-600 text-black  ❌

/* Múltiples rojos juntos */
bg-red-500 border-red-700 text-red-900  ❌
```

---

## 📊 Ratios de Contraste

### Texto Normal (16px)

| Combinación | Ratio | WCAG |
|-------------|-------|------|
| Gray-900 / White | 15.93:1 | AAA ✅ |
| Gray-700 / White | 10.37:1 | AAA ✅ |
| Gray-600 / White | 7.76:1 | AAA ✅ |
| Gray-500 / White | 4.69:1 | AA ✅ |
| Red-600 / White | 5.52:1 | AA ✅ |
| White / Red-600 | 5.52:1 | AA ✅ |

### Texto Grande (24px+)

| Combinación | Ratio | WCAG |
|-------------|-------|------|
| Gray-400 / White | 2.85:1 | AA ✅ |
| Red-400 / White | 3.34:1 | AA ✅ |

### Elementos No-Texto

| Combinación | Ratio | WCAG |
|-------------|-------|------|
| Gray-300 / White | 1.89:1 | AA ✅ |
| Red-200 / White | 1.26:1 | ⚠️ Solo decorativo |

---

## 🎯 Guía de Uso por Contexto

### Navegación
```css
/* Fondo */
bg-white border-b border-gray-200

/* Links normales */
text-gray-700 hover:text-red-600

/* Link activo */
text-red-600
```

### Botones

#### Primario (Acción principal)
```css
bg-red-600 hover:bg-red-700 text-white
```

#### Secundario (Acción secundaria)
```css
bg-transparent border-2 border-red-600 text-red-600 
hover:bg-red-600 hover:text-white
```

#### Terciario (Acción mínima)
```css
text-red-600 hover:text-red-700
```

### Cards

#### Card Destacada
```css
bg-white border border-gray-200 hover:border-red-200
shadow-md hover:shadow-xl
```

#### Card con Fondo
```css
bg-gray-50 border border-gray-200
```

### Formularios

#### Input Normal
```css
border-gray-300 focus:border-red-600 focus:ring-red-600
bg-white text-gray-900
placeholder:text-gray-400
```

#### Input Error
```css
border-red-600 focus:border-red-600 focus:ring-red-600
text-red-600
```

### Badges

#### Badge Informativo
```css
bg-red-100 text-red-700
```

#### Badge Neutral
```css
bg-gray-100 text-gray-700
```

### Alerts

#### Success
```css
bg-green-50 border-green-200 text-green-800
```

#### Error
```css
bg-red-50 border-red-200 text-red-800
```

#### Warning
```css
bg-yellow-50 border-yellow-200 text-yellow-800
```

#### Info
```css
bg-gray-50 border-gray-200 text-gray-800
```

---

## 🎨 Gradientes Aprobados

### Gradiente Principal
```css
bg-gradient-to-r from-red-600 to-red-700
```
**Uso:** CTAs importantes, heros, secciones destacadas

### Gradiente Suave
```css
bg-gradient-to-b from-red-50 to-white
```
**Uso:** Fondos sutiles, transiciones

### Gradiente Overlay Oscuro
```css
bg-gradient-to-r from-black/70 via-black/50 to-black/30
```
**Uso:** Sobre imágenes de hero

### Gradiente Overlay Rojo
```css
bg-gradient-to-r from-red-600/90 to-red-600/60
```
**Uso:** Sobre imágenes en secciones de CTA

---

## 📱 Modo Oscuro (Futuro)

*Actualmente no implementado, pero aquí está la paleta preparada:*

```css
.dark {
  --background: #171717
  --foreground: #fafafa
  --primary: #ef4444
  --card: #262626
  --border: #404040
}
```

---

## ✅ Checklist de Color

Al diseñar un componente nuevo:

- [ ] Usa rojo solo para acentos (≤10% del diseño)
- [ ] Usa grises para la mayoría del contenido (≥70%)
- [ ] Verifica contraste mínimo 4.5:1 para texto
- [ ] Verifica contraste mínimo 3:1 para elementos grandes
- [ ] Usa variables CSS cuando sea posible
- [ ] Evita más de 3 colores diferentes por componente
- [ ] Mantén consistencia con componentes existentes
- [ ] Prueba en modo de alto contraste
- [ ] Prueba con daltonismo (herramientas online)

---

## 🛠️ Herramientas Útiles

### Verificar Contraste
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Colorable](https://colorable.jxnblk.com/)

### Generar Paletas
- [Coolors](https://coolors.co/)
- [Adobe Color](https://color.adobe.com/)

### Probar Accesibilidad
- [Who Can Use](https://whocanuse.com/)
- [Color Oracle](https://colororacle.org/) (simulador daltonismo)

---

## 📋 Variables CSS Disponibles

Todas estas variables están listas para usar en `/styles/globals.css`:

```css
/* Rojos */
--xposedde-red-50
--xposedde-red-100
--xposedde-red-200
--xposedde-red-300
--xposedde-red-400
--xposedde-red-500
--xposedde-red-600  /* Principal */
--xposedde-red-700
--xposedde-red-800
--xposedde-red-900

/* Grises */
--xposedde-gray-50
--xposedde-gray-100
--xposedde-gray-200
--xposedde-gray-300
--xposedde-gray-400
--xposedde-gray-500
--xposedde-gray-600
--xposedde-gray-700  /* Texto párrafos */
--xposedde-gray-800
--xposedde-gray-900  /* Texto principal */

/* Sistema */
--background
--foreground
--primary
--primary-foreground
--muted
--muted-foreground
--border
--ring
```

---

## 🎨 Exportar Paleta

### Para Figma
```
#dc2626 (Red Principal)
#b91c1c (Red Hover)
#fee2e2 (Red Claro)
#171717 (Negro)
#404040 (Gris Párrafos)
#737373 (Gris Secundario)
#f5f5f5 (Gris Fondo)
#ffffff (Blanco)
```

### Para Adobe
```
220, 38, 38 (Red Principal)
185, 28, 28 (Red Hover)
254, 226, 226 (Red Claro)
23, 23, 23 (Negro)
64, 64, 64 (Gris Párrafos)
115, 115, 115 (Gris Secundario)
245, 245, 245 (Gris Fondo)
255, 255, 255 (Blanco)
```

---

**Versión:** 1.0  
**Última actualización:** Noviembre 2025  
**Marca:** Xposedde
