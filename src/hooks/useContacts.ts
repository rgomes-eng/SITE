import { CONTACTS } from '@/config/contacts';
import { getContact } from '@/utils/helpers';

export const useContacts = () => {
  const whatsapp = getContact('whatsapp');
  const phone = getContact('phone');
  const emails = getContact('email');
  const social = getContact('social');

  return {
    whatsapp: {
      ...whatsapp,
      shareText: (text: string) => `${(whatsapp as any).url}?text=${encodeURIComponent(text)}`,
    },
    phone,
    emails: {
      primary: (emails as any).primary,
      gmail: (emails as any).gmail,
      getAll: () => [(emails as any).primary, (emails as any).gmail],
    },
    social,
    location: CONTACTS.location,
    
    // Quick actions
    actions: {
      callPhone: () => window.open((phone as any).url, '_self'),
      openWhatsapp: (message?: string) => {
        const url = message ? `${(whatsapp as any).url}?text=${encodeURIComponent(message)}` : (whatsapp as any).url;
        window.open(url, '_blank');
      },
      sendEmail: (type: 'primary' | 'gmail' = 'primary') => {
        const email = type === 'primary' ? (emails as any).primary : (emails as any).gmail;
        window.open(email.url, '_blank');
      },
      openSocial: (platform: keyof typeof social) => {
        const socialUrl = (social as any)[platform].url;
        if (socialUrl && socialUrl !== '#') {
          window.open(socialUrl, '_blank');
        }
      },
    },
  };
};
