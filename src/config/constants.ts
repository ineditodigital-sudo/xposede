// Configuración de la aplicación

// ========================================
// NÚMERO DE WHATSAPP
// ========================================
// IMPORTANTE: Número de WhatsApp donde llegarán los leads
// Formato: Código de país + número completo (sin +, espacios ni guiones)
// 
// México: 52 + 1 + número celular de 10 dígitos
// 
export const WHATSAPP_NUMBER = '5214491114685'; // Número activo de Xposedde

// Información de contacto
export const CONTACT_INFO = {
  phone: '+52 1 449 111 4685',
  email: 'contacto@xposedde.com',
  address: 'Aguascalientes, México',
};

// Redes sociales
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/xposedde',
  instagram: 'https://instagram.com/xposedde',
  linkedin: 'https://linkedin.com/company/xposedde',
  twitter: 'https://twitter.com/xposedde',
};

// Función para enviar mensaje directo a WhatsApp
export const sendToWhatsApp = (message?: string) => {
  const defaultMessage = '¡Hola! Me gustaría obtener más información sobre sus servicios.';
  const encodedMessage = encodeURIComponent(message || defaultMessage);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};