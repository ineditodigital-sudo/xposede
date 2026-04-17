# 🚀 Instrucciones Rápidas - Configuración WhatsApp

## ⚡ Configuración en 2 minutos

### 1️⃣ Cambiar el número de WhatsApp

Abre: `/config/constants.ts`

```typescript
export const WHATSAPP_NUMBER = '5215512345678'; // 👈 CAMBIA ESTE NÚMERO
```

**Formato correcto:**
- México: `52` + `1` + `5512345678` = `5215512345678`
- Sin espacios, sin guiones, sin el símbolo `+`

### 2️⃣ Probar

1. Abre tu sitio web
2. Haz clic en el botón del asistente flotante
3. Completa el formulario de 6 pasos
4. Haz clic en "Enviar por WhatsApp" (botón verde)
5. ✅ Debe abrirse WhatsApp Web con el mensaje

---

## 📱 ¿Cómo funciona?

```
Cliente completa formulario
         ↓
Datos se formatean automáticamente
         ↓
Se abre WhatsApp con mensaje pre-escrito
         ↓
Cliente solo da clic en "Enviar"
         ↓
¡Recibes el lead completo en WhatsApp!
```

---

## 🎯 Ventajas

✅ **Sin backend** - No necesitas servidor ni base de datos  
✅ **Instantáneo** - Los leads llegan inmediatamente a tu WhatsApp  
✅ **Fácil seguimiento** - Puedes responder directo desde WhatsApp  
✅ **No pierdes leads** - Todo queda registrado en tu teléfono  
✅ **Alta conversión** - WhatsApp tiene 98% de tasa de apertura  

---

## 📋 Información que recibe

El mensaje de WhatsApp incluye:

- ✅ Nombre, email y teléfono del cliente
- ✅ Tipo de cliente y nivel de experiencia
- ✅ Servicio solicitado
- ✅ Presupuesto estimado
- ✅ Tiempo de entrega necesario
- ✅ Beneficios prometidos al cliente
- ✅ Fecha y hora de la solicitud

---

## 🛠️ Personalización

Si quieres cambiar el mensaje, edita la función `sendToWhatsApp()` en:  
`/components/ChatAssistant.tsx` (línea ~115)

---

## ❓ Problemas comunes

**❌ No se abre WhatsApp**
- Verifica el formato del número (sin +, sin espacios)
- Asegúrate que el número tiene WhatsApp activo

**❌ Se abre pero no envía**
- Esto es normal, el cliente debe dar clic en "Enviar"
- WhatsApp requiere confirmación manual del usuario

**❌ El mensaje no se formatea bien**
- Los emojis y formato se ven en WhatsApp, no en el código
- Prueba enviándote un mensaje a ti mismo

---

## 📞 Ejemplo del mensaje que recibirás

```
🎯 NUEVA SOLICITUD - ASISTENTE VIRTUAL XPOSEDDE

👤 INFORMACIÓN DE CONTACTO:
• Nombre: Juan Pérez
• Email: juan@empresa.com
• Teléfono: 5512345678

📋 PERFIL DEL CLIENTE:
• Tipo: 🏢 Empresa Establecida
• Experiencia: Experiencia intermedia

🎨 DETALLES DEL PROYECTO:
• Servicio: 🎨 Stand de Diseño Personalizado
• Presupuesto: ⭐ Medio ($50,000 a $150,000 MXN)
• Tiempo: ✨ En 2-3 meses (Ideal)

🎁 BENEFICIOS PROMETIDOS:
✅ Diseño 3D preliminar GRATIS
✅ Consulta con experto sin costo
✅ 15% de descuento exclusivo
✅ Respuesta en menos de 2 horas

Mensaje generado desde el Asistente Virtual - 11/11/2025, 10:30
```

---

## 🎨 Personalizar otros datos

En `/config/constants.ts` también puedes cambiar:

```typescript
export const CONTACT_INFO = {
  phone: '+52 55 1234 5678',
  email: 'contacto@xposedde.com',
  address: 'Ciudad de México, México',
};
```

---

## ✅ Listo!

Una vez configurado el número, el sistema está listo para capturar leads automáticamente vía WhatsApp.

**¿Dudas?** Revisa `/CONFIGURACION_WHATSAPP.md` para más detalles.
