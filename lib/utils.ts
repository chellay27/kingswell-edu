import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const WHATSAPP_NUMBER = '+97412345678'; // Replace with actual number
export const WHATSAPP_MESSAGE = 'Hello! I am interested in learning more about your educational programs.';

export function getWhatsAppLink(message?: string) {
  const encodedMessage = encodeURIComponent(message || WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
}

export const CONTACT_EMAIL = 'info@kingswelleducation.com'; // Replace with actual email
export const CONTACT_PHONE = '+974 1234 5678'; // Replace with actual phone
export const OFFICE_ADDRESS = 'Doha, Qatar'; // Replace with actual address
