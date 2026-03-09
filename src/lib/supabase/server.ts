import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

function createFallbackClient() {
  const builder: any = {
    select: async () => ({ data: [], error: null }),
    insert: async () => ({ data: null, error: null }),
    update: async () => ({ data: null, error: null }),
    delete: async () => ({ data: null, error: null }),
    upsert: async () => ({ data: null, error: null }),
    single: async () => ({ data: null, error: null }),
    maybeSingle: async () => ({ data: null, error: null }),
    eq: () => builder,
    neq: () => builder,
    order: () => builder,
    limit: () => builder,
    range: () => builder,
    in: () => builder,
    ilike: () => builder,
    like: () => builder,
    is: () => builder,
  }

  return {
    from: () => builder,
  } as any
}

export async function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !key) {
    return createFallbackClient()
  }

  const cookieStore = await cookies()

  return createServerClient(
    url,
    key,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(
          cookiesToSet: Array<{ name: string; value: string; options: any }>
        ) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // Ignorado no Server Components
          }
        },
      },
    }
  )
}
