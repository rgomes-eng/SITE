import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { getImage } from '@/config/images';
import { CONTACTS } from '@/config/contacts';

// Tailwind utility
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format phone number
export const formatPhone = (phone: string): string => {
  return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
};

// Get contact info
export const getContact = (type: 'whatsapp' | 'phone' | 'email' | 'social') => {
  switch (type) {
    case 'whatsapp':
      return CONTACTS.whatsapp;
    case 'phone':
      return CONTACTS.phone;
    case 'email':
      return CONTACTS.emails;
    case 'social':
      return CONTACTS.social;
    default:
      return CONTACTS.whatsapp;
  }
};

// Get image path
export const getImagePath = (category: 'backgrounds' | 'illustrations', key: string): string => {
  return getImage(category, key);
};

// Format currency
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

// Format date
export const formatDate = (date: Date | string): string => {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date(date));
};

// Validate email
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Generate slug
export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// Debounce function
export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
