# 📱 Configuración de WhatsApp para el Embudo de Ventas

## ¿Cómo funciona?

Cuando un cliente potencial completa el formulario del chatbot asistente, toda su información se envía automáticamente a WhatsApp como un mensaje pre-formateado.

## Configuración del Número de WhatsApp

### Paso 1: Editar el archivo de configuración

Abre el archivo `/config/constants.ts` y cambia el número de WhatsApp:

```typescript
export const WHATSAPP_NUMBER = '5215512345678';
```

### Paso 2: Formato del número

**Importante:** El número debe incluir:
- ✅ Código de país (sin el símbolo +)
- ✅ Código de área/celular
- ✅ Número completo sin espacios ni guiones

**Ejemplos por país:**

| País | Código | Ejemplo | Formato correcto |
|------|--------|---------|------------------|
| 🇲🇽 México | 52 | Celular 55 1234 5678 | `5215512345678` |
| 🇺🇸 Estados Unidos | 1 | (555) 123-4567 | `15551234567` |
| 🇪🇸 España | 34 | 612 345 678 | `34612345678` |
| 🇨🇴 Colombia | 57 | 312 345 6789 | `573123456789` |
| 🇦🇷 Argentina | 54 | 11 2345 6789 | `5491123456789` |

### Paso 3: Verificar

1. Completa el formulario del chatbot en tu sitio
2. Haz clic en "Enviar por WhatsApp"
3. Verifica que se abra WhatsApp Web con el mensaje formateado
4. El destinatario debe ser tu número configurado

## Información que se envía

El mensaje de WhatsApp incluye automáticamente:

✅ **Información de Contacto:**
- Nombre del cliente
- Email
- Teléfono

✅ **Perfil del Cliente:**
- Tipo de cliente (Empresa, Nuevo, Agencia)
- Nivel de experiencia

✅ **Detalles del Proyecto:**
- Servicio solicitado
- Presupuesto estimado
- Tiempo de entrega necesario

✅ **Beneficios Prometidos:**
- Diseño 3D gratuito
- Consulta sin costo
- 15% de descuento
- Tiempo de respuesta

✅ **Fecha y hora** de la solicitud

## Ejemplo de mensaje

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

Mensaje generado desde el Asistente Virtual - 11/11/2025, 10:30:00
```

## Ventajas de usar WhatsApp

1. **Inmediatez:** El mensaje llega al instante
2. **No se pierden leads:** Todo queda registrado en tu WhatsApp
3. **Fácil seguimiento:** Puedes responder directamente desde WhatsApp
4. **Sin base de datos:** No necesitas configurar backend
5. **Confirmación visual:** El cliente ve que su mensaje se envió

## Soporte

Si tienes problemas:

1. Verifica que el número esté en formato correcto (sin + ni espacios)
2. Asegúrate que WhatsApp Web funcione en tu navegador
3. Verifica que el número tenga WhatsApp activo
4. Prueba en modo incógnito si hay problemas con el caché

## Personalización

Puedes modificar el mensaje en `/components/ChatAssistant.tsx` en la función `sendToWhatsApp()`.
