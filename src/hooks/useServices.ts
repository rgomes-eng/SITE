import { CONTENT } from '@/config/content';
import { getImagePath } from '@/utils/helpers';
import type { Service } from '@/types';

export const useServices = () => {
  const getAllServices = () => {
    return CONTENT.getAllServices().map(service => ({
      ...service,
      image_url: getImagePath('illustrations', service.image),
    }));
  };

  const getServiceBySlug = (slug: string): Service | null => {
    const service = CONTENT.getService(slug);
    if (!service) return null;

    return {
      slug,
      title: service.title,
      subtitle: service.subtitle,
      description: service.description,
      short_description: service.description?.split('.')[0] + '.',
      image_url: getImagePath('illustrations', service.image),
      icon: service.icon,
      features: [...service.features], // Convert readonly to mutable
      is_active: true,
      order_index: 0,
    };
  };

  const getFeaturedServices = (limit = 6) => {
    return getAllServices().slice(0, limit);
  };

  const getServiceIcon = (iconName: string) => {
    // This would be used with dynamic icon imports
    return iconName;
  };

  return {
    getAllServices,
    getServiceBySlug,
    getFeaturedServices,
    getServiceIcon,
  };
};
