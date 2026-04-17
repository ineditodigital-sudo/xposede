# 🧪 Prueba Rápida del Sistema WhatsApp

## ⏱️ Tiempo estimado: 3 minutos

---

## ✅ Checklist de Prueba

### Paso 1: Abrir el Sitio
- [ ] Abre tu sitio web en el navegador
- [ ] Verifica que carga correctamente
- [ ] Busca el botón flotante ROJO en la esquina inferior derecha

### Paso 2: Abrir el Asistente
- [ ] Haz clic en el botón flotante rojo
- [ ] Se debe abrir una ventana modal del asistente
- [ ] Verifica que muestra la pantalla de bienvenida
- [ ] Debe decir "Asistente Virtual Xposedde"

### Paso 3: Completar el Formulario

**Pantalla 1 - Tipo de Cliente:**
- [ ] Selecciona cualquier opción (Empresa/Nuevo/Agencia)
- [ ] Haz clic en "Continuar"

**Pantalla 2 - Experiencia:**
- [ ] Selecciona cualquier opción
- [ ] Haz clic en "Continuar"

**Pantalla 3 - Servicio:**
- [ ] Selecciona el servicio que prefieras
- [ ] Haz clic en "Continuar"

**Pantalla 4 - Presupuesto:**
- [ ] Selecciona un rango de presupuesto
- [ ] Haz clic en "Continuar"

**Pantalla 5 - Timeline:**
- [ ] Selecciona cuándo lo necesitas
- [ ] Haz clic en "Casi listo 🎉"

**Pantalla 6 - Datos de Contacto:**
- [ ] Ingresa tu nombre: `Tu Nombre Completo`
- [ ] Ingresa tu email: `tu@email.com`
- [ ] Ingresa un teléfono: `4491234567`
- [ ] Verifica que el botón "Recibir mi Propuesta Gratis" se active
- [ ] Haz clic en el botón

### Paso 4: Pantalla de Éxito
- [ ] Debe aparecer mensaje de éxito con 🎉
- [ ] Verifica que muestra tus datos ingresados
- [ ] Busca el BOTÓN VERDE "Enviar por WhatsApp"
- [ ] También debe haber un botón blanco "Ver Propuesta Aquí"

### Paso 5: Enviar a WhatsApp
- [ ] Haz clic en el BOTÓN VERDE "Enviar por WhatsApp"
- [ ] Se debe abrir una nueva ventana/pestaña
- [ ] Debe abrir WhatsApp Web (web.whatsapp.com)
- [ ] Verifica que el número destino sea: `+52 1 449 513 6907`

### Paso 6: Revisar el Mensaje
- [ ] El mensaje debe estar pre-escrito en el chat
- [ ] Verifica que incluya tu nombre
- [ ] Verifica que incluya tu email
- [ ] Verifica que incluya tu teléfono
- [ ] Verifica que incluya todas las opciones que seleccionaste
- [ ] Debe tener emojis (🎯, 👤, 📋, 🎨, 🎁, etc.)
- [ ] Debe tener formato con negritas y estructura

### Paso 7: Enviar el Mensaje (OPCIONAL)
- [ ] Si quieres completar la prueba, haz clic en "Enviar" en WhatsApp
- [ ] El mensaje debe llegar al número 449 513 6907
- [ ] Puedes verificar en ese teléfono que llegó correctamente

---

## 🎯 Resultado Esperado

Debes ver algo como esto en WhatsApp:

```
🎯 NUEVA SOLICITUD - ASISTENTE VIRTUAL XPOSEDDE

👤 INFORMACIÓN DE CONTACTO:
• Nombre: [Tu nombre que ingresaste]
• Email: [Tu email que ingresaste]
• Teléfono: [Tu teléfono que ingresaste]

📋 PERFIL DEL CLIENTE:
• Tipo: [Lo que seleccionaste]
• Experiencia: [Lo que seleccionaste]

🎨 DETALLES DEL PROYECTO:
• Servicio: [Lo que seleccionaste]
• Presupuesto: [Lo que seleccionaste]
• Tiempo: [Lo que seleccionaste]

🎁 BENEFICIOS PROMETIDOS:
✅ Diseño 3D preliminar GRATIS
✅ Consulta con experto sin costo
✅ 15% de descuento exclusivo
✅ Respuesta en menos de 2 horas

Mensaje generado desde el Asistente Virtual - [Fecha y hora actual]
```

---

## ❌ Problemas Comunes y Soluciones

### Problema 1: No se abre WhatsApp
**Posible causa:** Bloqueador de popups
**Solución:** 
- Permite popups en tu navegador
- Intenta en modo incógnito
- Prueba en otro navegador (Chrome recomendado)

### Problema 2: WhatsApp abre pero no hay mensaje
**Posible causa:** Error en la integración
**Solución:**
- Revisa `/config/constants.ts`
- Verifica que `WHATSAPP_NUMBER = '5214495136907'`
- Recarga la página y prueba de nuevo

### Problema 3: El mensaje no tiene formato
**Posible causa:** Normal, el formato se ve en WhatsApp
**Solución:**
- Los asteriscos (*) se convierten en negritas en WhatsApp
- Los guiones bajos (_) se convierten en cursiva en WhatsApp
- Los emojis se ven normalmente

### Problema 4: Número incorrecto
**Posible causa:** Configuración errónea
**Solución:**
- El número debe ser: `5214495136907`
- Formato: `52` (México) + `1` (celular) + `4495136907`

### Problema 5: El botón no se activa en Contacto
**Posible causa:** Validación de campos
**Solución:**
- Nombre: mínimo 2 caracteres
- Email: debe ser válido (con @ y dominio)
- Teléfono: mínimo 10 dígitos

---

## 🎬 Flujo Visual del Sistema

```
┌─────────────────┐
│   SITIO WEB     │
│   Usuario ve    │
│   botón rojo    │
└────────┬────────┘
         │ CLIC
         ▼
┌─────────────────┐
│   ASISTENTE     │
│   Se abre modal │
│   con bienvenida│
└────────┬────────┘
         │ Comenzar ahora
         ▼
┌─────────────────┐
│   6 PASOS       │
│   Cliente Type  │
│   Experiencia   │
│   Servicio      │
│   Presupuesto   │
│   Timeline      │
│   Contacto      │
└────────┬────────┘
         │ Completa formulario
         ▼
┌─────────────────┐
│   PANTALLA      │
│   DE ÉXITO      │
│   2 botones     │
└────────┬────────┘
         │ Clic en botón VERDE
         ▼
┌─────────────────┐
│   WHATSAPP WEB  │
│   Se abre con   │
│   mensaje listo │
└────────┬────────┘
         │ Cliente da Enviar
         ▼
┌─────────────────┐
│   ¡MENSAJE      │
│   RECIBIDO!     │
│   449 513 6907  │
└─────────────────┘
```

---

## 📊 Datos que se Validan

Antes de permitir enviar, el sistema valida:

✅ **Nombre:** Al menos 2 caracteres  
✅ **Email:** Formato válido con @ y dominio  
✅ **Teléfono:** Al menos 10 dígitos numéricos  

Si falta algo, el botón "Recibir mi Propuesta Gratis" estará deshabilitado.

---

## 🔍 Verificación Final

Después de la prueba, confirma:

- [x] El botón flotante funciona
- [x] El asistente se abre
- [x] Los 6 pasos funcionan
- [x] La validación funciona
- [x] WhatsApp se abre
- [x] El mensaje está formateado
- [x] El número destino es 449 513 6907
- [x] Toda la información está incluida

---

## 🎉 ¡Prueba Exitosa!

Si todos los puntos funcionan, tu sistema está listo para:

✅ Capturar leads reales  
✅ Enviarlos a tu WhatsApp  
✅ Calificar automáticamente a los prospectos  
✅ Recibir información completa y organizada  

**Próximo paso:** Empieza a promocionar el asistente y recibe leads calificados directamente en tu WhatsApp.

---

## 📞 Número Configurado

**Destino de todos los mensajes:**  
📱 **449 513 6907**  
🌍 **+52 1 449 513 6907** (formato internacional)  
💻 **5214495136907** (formato en código)

---

## 💡 Tip Pro

Guarda un lead de prueba completo en tu WhatsApp para que puedas:
- Usarlo como referencia
- Mostrarlo a tu equipo
- Verificar que el formato es correcto
- Entrenar a tu equipo de ventas sobre qué información recibirán

¡Tu sistema está listo! 🚀
