# 🧩 Guía de Componentes - Xposedde

## Componentes con Identidad Visual Aplicada

Esta guía muestra cómo implementar componentes usando la identidad visual de Xposedde.

---

## 🔘 Botones

### Botón Primario (Rojo Corporativo)

```tsx
<Button className="bg-[#DC2626] hover:bg-[#B91C1C] text-white 
                   shadow-sm hover:shadow-md transition-all duration-200
                   rounded-lg px-6 py-3">
  Solicitar Cotización
</Button>
```

**Uso:** CTAs principales, acciones importantes

### Botón Secundario (Outline)

```tsx
<Button variant="outline" 
        className="border-[#DC2626] text-[#DC2626] hover:bg-[#DC2626] 
                   hover:text-white transition-all duration-200
                   rounded-lg px-6 py-3">
  Ver Portafolio
</Button>
```

**Uso:** Acciones secundarias, navegación

### Botón Ghost (Texto)

```tsx
<Button variant="ghost" 
        className="text-[#4B5563] hover:text-[#DC2626] hover:bg-[#F9FAFB]
                   transition-colors duration-200">
  Leer más →
</Button>
```

**Uso:** Links, acciones terciarias

---

## 📄 Cards

### Card Estándar

```tsx
<Card className="border border-[#E5E7EB] rounded-lg p-6 
                 shadow-sm hover:shadow-md transition-shadow duration-200
                 bg-white">
  <h3 className="text-[#1F2937] mb-2">Diseño de Stands</h3>
  <p className="text-[#4B5563] leading-relaxed">
    Creamos stands únicos que destacan tu marca.
  </p>
</Card>
```

### Card con Icono

```tsx
<Card className="border border-[#E5E7EB] rounded-lg p-6 
                 shadow-sm hover:shadow-md transition-all duration-200
                 hover:-translate-y-1 bg-white group cursor-pointer">
  <div className="w-12 h-12 bg-[#DC2626]/10 rounded-lg 
                  flex items-center justify-center mb-4
                  group-hover:bg-[#DC2626] transition-colors duration-200">
    <Palette className="text-[#DC2626] group-hover:text-white h-6 w-6" />
  </div>
  <h3 className="text-[#1F2937] mb-2 group-hover:text-[#DC2626] 
                 transition-colors duration-200">
    Diseño Personalizado
  </h3>
  <p className="text-[#4B5563] leading-relaxed">
    Cada proyecto es único y adaptado a tus necesidades.
  </p>
</Card>
```

### Card de Servicio

```tsx
<Card className="border border-[#E5E7EB] rounded-xl p-8 
                 shadow-sm hover:shadow-lg transition-all duration-300
                 bg-white overflow-hidden relative group">
  {/* Acento rojo al hacer hover */}
  <div className="absolute top-0 left-0 w-full h-1 bg-[#DC2626] 
                  scale-x-0 group-hover:scale-x-100 
                  transition-transform duration-300 origin-left" />
  
  <div className="flex items-start gap-4">
    <div className="w-14 h-14 bg-[#F9FAFB] rounded-lg 
                    flex items-center justify-center flex-shrink-0">
      <Building2 className="text-[#DC2626] h-7 w-7" />
    </div>
    <div className="flex-1">
      <h3 className="text-[#1F2937] mb-2">Stands de Diseño</h3>
      <p className="text-[#4B5563] text-sm leading-relaxed mb-4">
        Diseños únicos y personalizados para exposiciones y eventos.
      </p>
      <Button variant="ghost" 
              className="text-[#DC2626] hover:bg-[#DC2626]/5 p-0 h-auto">
        Ver más detalles →
      </Button>
    </div>
  </div>
</Card>
```

---

## 📝 Formularios

### Input Estándar

```tsx
<div className="space-y-2">
  <Label className="text-[#374151]">Nombre completo</Label>
  <Input 
    type="text"
    placeholder="Tu nombre"
    className="bg-[#F9FAFB] border-[#E5E7EB] rounded-lg
               focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/20
               transition-all duration-200
               text-[#1F2937] placeholder:text-[#9CA3AF]"
  />
</div>
```

### Textarea

```tsx
<div className="space-y-2">
  <Label className="text-[#374151]">Mensaje</Label>
  <Textarea 
    placeholder="Cuéntanos sobre tu proyecto..."
    rows={4}
    className="bg-[#F9FAFB] border-[#E5E7EB] rounded-lg
               focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/20
               transition-all duration-200 resize-none
               text-[#1F2937] placeholder:text-[#9CA3AF]"
  />
</div>
```

### Select

```tsx
<div className="space-y-2">
  <Label className="text-[#374151]">Tipo de servicio</Label>
  <Select>
    <SelectTrigger className="bg-[#F9FAFB] border-[#E5E7EB] rounded-lg
                              focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/20
                              text-[#1F2937]">
      <SelectValue placeholder="Selecciona un servicio" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="stands">Diseño de Stands</SelectItem>
      <SelectItem value="montaje">Montaje de Exposiciones</SelectItem>
      <SelectItem value="escenografia">Escenografías</SelectItem>
    </SelectContent>
  </Select>
</div>
```

---

## 🏷️ Badges

### Badge Estándar

```tsx
<Badge className="bg-[#F9FAFB] text-[#4B5563] border border-[#E5E7EB]
                  hover:bg-[#F3F4F6]">
  Nuevo
</Badge>
```

### Badge Destacado

```tsx
<Badge className="bg-[#DC2626] text-white shadow-sm">
  Recomendado
</Badge>
```

### Badge de Estado

```tsx
{/* Éxito */}
<Badge className="bg-[#10B981]/10 text-[#10B981] border-0">
  ✓ Completado
</Badge>

{/* Advertencia */}
<Badge className="bg-[#F59E0B]/10 text-[#F59E0B] border-0">
  ⚠ Pendiente
</Badge>

{/* Info */}
<Badge className="bg-[#3B82F6]/10 text-[#3B82F6] border-0">
  ℹ En proceso
</Badge>
```

---

## 📊 Secciones

### Hero Section

```tsx
<section className="relative min-h-screen flex items-center bg-white">
  {/* Background con overlay */}
  <div className="absolute inset-0 z-0">
    <img 
      src="hero.jpg" 
      alt="Hero" 
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
  </div>
  
  {/* Contenido */}
  <div className="relative z-10 container-xposedde py-20">
    <div className="max-w-3xl">
      {/* Badge superior */}
      <div className="inline-block mb-6 px-4 py-1.5 
                      bg-[#DC2626]/90 text-white rounded text-sm tracking-wide">
        Especialistas en Diseño de Stands
      </div>
      
      {/* Título principal */}
      <h1 className="text-white text-5xl md:text-6xl mb-6">
        Diseño y Montaje de Stands y Exposiciones
      </h1>
      
      {/* Subtítulo */}
      <p className="text-white/90 text-xl mb-10 leading-relaxed">
        Transformamos tus ideas en experiencias memorables.
      </p>
      
      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button className="bg-[#DC2626] hover:bg-[#B91C1C] text-white 
                           shadow-lg px-8 py-6 text-lg">
          Iniciar Proyecto →
        </Button>
        <Button variant="outline" 
                className="bg-white/10 backdrop-blur-sm border-white 
                           text-white hover:bg-white/20 px-8 py-6 text-lg">
          Ver Portafolio
        </Button>
      </div>
    </div>
  </div>
</section>
```

### Sección de Contenido

```tsx
<section className="py-20 bg-white">
  <div className="container-xposedde">
    {/* Header de sección */}
    <div className="text-center mb-16 max-w-3xl mx-auto">
      <Badge className="mb-4 bg-[#DC2626]/10 text-[#DC2626] border-0">
        Nuestros Servicios
      </Badge>
      <h2 className="text-[#1F2937] mb-4">
        Soluciones Integrales para tu Marca
      </h2>
      <p className="text-[#4B5563] text-lg leading-relaxed">
        Desde el diseño hasta el montaje, nos encargamos de todo 
        para que tu stand destaque.
      </p>
    </div>
    
    {/* Grid de contenido */}
    <div className="grid md:grid-cols-3 gap-8">
      {/* Cards aquí */}
    </div>
  </div>
</section>
```

### Sección con Fondo Gris

```tsx
<section className="py-20 bg-[#F9FAFB]">
  <div className="container-xposedde">
    {/* Contenido */}
  </div>
</section>
```

---

## 🎯 Stats Section

```tsx
<div className="grid grid-cols-3 gap-8 py-16 border-t border-white/20">
  {[
    { value: '+500', label: 'Stands Diseñados' },
    { value: '+15', label: 'Años de Experiencia' },
    { value: '100%', label: 'Satisfacción' }
  ].map((stat, i) => (
    <div key={i} className="text-center">
      <div className="text-4xl text-[#DC2626] mb-2">
        {stat.value}
      </div>
      <div className="text-[#4B5563] text-sm">
        {stat.label}
      </div>
    </div>
  ))}
</div>
```

---

## 🔗 Navegación

### Header

```tsx
<header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm 
                   shadow-sm z-50 transition-shadow duration-200">
  <div className="container-xposedde">
    <div className="flex justify-between items-center h-20">
      {/* Logo */}
      <div className="flex items-center">
        <div className="text-[#DC2626]">
          {/* Logo SVG */}
        </div>
        <span className="ml-3 text-[#1F2937] text-xl tracking-tight">
          Xposedde
        </span>
      </div>
      
      {/* Nav */}
      <nav className="hidden md:flex items-center space-x-8">
        {['Inicio', 'Nosotros', 'Servicios', 'Contacto'].map((item) => (
          <button 
            key={item}
            className="text-[#4B5563] hover:text-[#1F2937] 
                       transition-colors duration-200 relative group">
            {item}
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 
                            bg-[#DC2626] scale-x-0 group-hover:scale-x-100 
                            transition-transform duration-200" />
          </button>
        ))}
        <Button className="bg-[#DC2626] hover:bg-[#B91C1C] text-white">
          Contactar
        </Button>
      </nav>
    </div>
  </div>
</header>
```

### Footer

```tsx
<footer className="bg-[#1F2937] text-white py-16">
  <div className="container-xposedde">
    <div className="grid md:grid-cols-4 gap-12 mb-12">
      {/* Columna 1: Logo y descripción */}
      <div className="md:col-span-2">
        <div className="flex items-center mb-4">
          <div className="text-[#DC2626]">
            {/* Logo SVG */}
          </div>
          <span className="ml-3 text-xl">Xposedde</span>
        </div>
        <p className="text-white/70 leading-relaxed">
          Especialistas en diseño y montaje de stands y exposiciones. 
          Más de 15 años creando experiencias memorables.
        </p>
      </div>
      
      {/* Columna 2: Servicios */}
      <div>
        <h4 className="text-white mb-4">Servicios</h4>
        <ul className="space-y-2">
          <li><a href="#" className="text-white/70 hover:text-white 
                                      transition-colors">Diseño de Stands</a></li>
          <li><a href="#" className="text-white/70 hover:text-white 
                                      transition-colors">Montaje</a></li>
          <li><a href="#" className="text-white/70 hover:text-white 
                                      transition-colors">Escenografías</a></li>
        </ul>
      </div>
      
      {/* Columna 3: Contacto */}
      <div>
        <h4 className="text-white mb-4">Contacto</h4>
        <ul className="space-y-2 text-white/70">
          <li>+52 449 513 6907</li>
          <li>contacto@xposedde.com</li>
          <li>Aguascalientes, México</li>
        </ul>
      </div>
    </div>
    
    {/* Copyright */}
    <div className="pt-8 border-t border-white/10 text-center text-white/60 text-sm">
      © 2025 Xposedde. Todos los derechos reservados.
    </div>
  </div>
</footer>
```

---

## 💬 Alertas y Notificaciones

### Alert de Éxito

```tsx
<Alert className="border-[#10B981] bg-[#10B981]/5">
  <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
  <AlertTitle className="text-[#10B981]">¡Mensaje enviado!</AlertTitle>
  <AlertDescription className="text-[#4B5563]">
    Nos pondremos en contacto contigo pronto.
  </AlertDescription>
</Alert>
```

### Alert de Información

```tsx
<Alert className="border-[#3B82F6] bg-[#3B82F6]/5">
  <Info className="h-4 w-4 text-[#3B82F6]" />
  <AlertTitle className="text-[#3B82F6]">Información</AlertTitle>
  <AlertDescription className="text-[#4B5563]">
    Tiempo de respuesta: menos de 24 horas.
  </AlertDescription>
</Alert>
```

---

## 🎨 Gradientes

### Gradiente de Fondo

```tsx
<div className="bg-gradient-to-br from-white to-[#F9FAFB]">
  {/* Contenido */}
</div>
```

### Gradiente en Botón

```tsx
<Button className="bg-gradient-to-r from-[#DC2626] to-[#B91C1C] 
                   hover:from-[#B91C1C] hover:to-[#991B1B]
                   text-white shadow-lg">
  Empezar Ahora
</Button>
```

### Overlay en Imagen

```tsx
<div className="relative">
  <img src="image.jpg" alt="Stand" className="w-full h-96 object-cover" />
  <div className="absolute inset-0 
                  bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
</div>
```

---

## 🔍 Tips de Uso

### Espaciado Consistente

```tsx
// Padding de secciones
<section className="py-20 md:py-24">

// Margen entre elementos
<div className="space-y-4">      {/* 16px */}
<div className="space-y-6">      {/* 24px */}
<div className="space-y-8">      {/* 32px */}

// Gaps en grids
<div className="grid gap-6 md:gap-8">
```

### Transiciones Suaves

```tsx
// Transición estándar
className="transition-all duration-200 ease-out"

// Transición media
className="transition-all duration-300 ease-in-out"

// Solo colores
className="transition-colors duration-200"

// Solo transform
className="transition-transform duration-200"
```

### Hover States

```tsx
// Lift effect
className="hover:-translate-y-1 transition-transform duration-200"

// Shadow change
className="shadow-sm hover:shadow-md transition-shadow duration-200"

// Color change
className="text-[#4B5563] hover:text-[#DC2626] transition-colors duration-200"

// Combinado
className="transition-all duration-200 
           hover:-translate-y-1 hover:shadow-md"
```

---

## ✅ Checklist de Componente

Antes de finalizar un componente, verificar:

- [ ] Usa colores de la paleta Xposedde
- [ ] Espaciado múltiplo de 4px
- [ ] Border radius de 6-8px
- [ ] Transiciones de 200-300ms
- [ ] Sombras sutiles (shadow-sm a shadow-md)
- [ ] Estados hover claros
- [ ] Focus visible para accesibilidad
- [ ] Texto con contraste adecuado (4.5:1)
- [ ] Responsive en móvil y desktop
- [ ] Iconos de Lucide React

---

## 🎯 Principios Clave

1. **Minimalismo:** Menos es más
2. **Consistencia:** Mismos patrones en todo el sitio
3. **Claridad:** Jerarquía visual obvia
4. **Profesionalismo:** Serio pero accesible
5. **Accesibilidad:** Usable para todos

---

**Versión:** 1.0  
**Actualizado:** Noviembre 2025
