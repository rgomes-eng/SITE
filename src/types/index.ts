// Base types
export interface BaseEntity {
  id?: string;
  created_at?: string;
  updated_at?: string;
}

// Service types
export interface Service extends BaseEntity {
  slug: string;
  title: string;
  subtitle?: string;
  description?: string;
  short_description?: string;
  image_url?: string;
  icon?: string;
  features?: string[];
  is_active?: boolean;
  order_index?: number;
}

// Project types
export interface Project extends BaseEntity {
  slug: string;
  title: string;
  description?: string;
  short_description?: string;
  image_url?: string;
  category?: string;
  featured?: boolean;
  is_active?: boolean;
  order_index?: number;
}

// Contact types
export interface Contact extends BaseEntity {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  status?: 'pending' | 'in_progress' | 'completed';
}

// Work with Us types
export interface WorkWithUs extends BaseEntity {
  name: string;
  email: string;
  phone?: string;
  position?: string;
  experience?: string;
  message?: string;
  resume_url?: string;
  status?: 'pending' | 'in_progress' | 'completed';
}

// Form types
export interface FormData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

export interface WorkFormData {
  name: string;
  email: string;
  phone?: string;
  position?: string;
  experience?: string;
  message?: string;
  resume?: File;
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Component props types
export interface SectionProps {
  className?: string;
  children: React.ReactNode;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

// Language types
export type Language = 'pt' | 'en';

// Icon types
export type IconName = 
  | 'FaBuilding' 
  | 'FaHammer' 
  | 'FaTools' 
  | 'FaProjectDiagram' 
  | 'FaLaptopCode'
  | 'FaBolt'
  | 'FaPhone'
  | 'FaWhatsapp'
  | 'FaEnvelope'
  | 'FaInstagram'
  | 'FaGoogle'
  | 'FaFacebook'
  | 'FaLinkedin'
  | 'FaMapMarkerAlt';
