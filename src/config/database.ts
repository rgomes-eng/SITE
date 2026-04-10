const DATABASE_CONFIG = {
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
    tables: {
      services: 'services',
      projects: 'projects',
      contacts: 'contacts',
      workWithUs: 'work_with_us',
    },
  },
} as const;

// Helper functions
export const isDatabaseConfigured = (): boolean => {
  const { url, anonKey } = DATABASE_CONFIG.supabase;
  return !!(url && anonKey);
};

export const getTable = (table: keyof typeof DATABASE_CONFIG.supabase.tables): string => {
  return DATABASE_CONFIG.supabase.tables[table];
};

export { DATABASE_CONFIG };
