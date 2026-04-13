export const CONTACTS = {
  whatsapp: {
    number: '5592981242509',
    display: '(92) 98124-2509',
    url: 'https://wa.me/5592981242509',
  },

  phone: {
    number: '+55 92 98124-2509',
    display: '(92) 98124-2509',
    url: 'tel:+5592981242509',
  },
  
  emails: {
    primary: {
      address: 'contato@rgomesengenharia.com',
      url: 'mailto:contato@rgomesengenharia.com',
      icon: 'envelope',
      color: 'blue',
    },
    gmail: {
      address: 'engenhariargomes@gmail.com',
      url: 'mailto:engenhariargomes@gmail.com',
      icon: 'envelope',
      color: 'red',
    },
  },
  
  social: {
    instagram: {
      username: '@rgomes.engenharia',
      url: 'https://instagram.com/rgomes.engenharia',
      icon: 'instagram',
      color: 'pink',
    },
    linkedin: {
      username: 'rgomes-engenharia',
      url: '#',
      icon: 'linkedin',
      color: 'blue',
    },
    facebook: {
      username: 'rgomesengenharia',
      url: '#',
      icon: 'facebook',
      color: 'blue',
    },
  },
  
  location: {
    address: 'Manaus, Amazonas',
    coordinates: null,
  },
} as const;
