/**
 * Database configuration and connection management
 * Centralized database operations
 */

import { createClient } from '@/lib/supabase/server'

export class DatabaseService {
  private static instance: DatabaseService
  
  static getInstance(): DatabaseService {
    if (!DatabaseService.instance) {
      DatabaseService.instance = new DatabaseService()
    }
    return DatabaseService.instance
  }

  private async getClient() {
    return await createClient()
  }

  // Projects operations
  async getProjects(limit = 10, offset = 0) {
    const client = await this.getClient()
    const { data, error } = await client
      .from('projects')
      .select('*')
      .eq('is_active', true)
      .order('order_index')
      .range(offset, offset + limit - 1)

    if (error) throw error
    return data
  }

  async getProjectBySlug(slug: string) {
    const client = await this.getClient()
    const { data, error } = await client
      .from('projects')
      .select('*')
      .eq('slug', slug)
      .eq('is_active', true)
      .single()

    if (error) throw error
    return data
  }

  async getFeaturedProjects(limit = 3) {
    const client = await this.getClient()
    const { data, error } = await client
      .from('projects')
      .select('*')
      .eq('is_active', true)
      .eq('is_featured', true)
      .order('order_index')
      .limit(limit)

    if (error) throw error
    return data
  }

  // Contact operations
  async createContact(data: {
    name: string
    email: string
    phone?: string
    message: string
  }) {
    const client = await this.getClient()
    const { error } = await client
      .from('contacts')
      .insert(data)

    if (error) throw error
    return true
  }

  // Work with us operations
  async createWorkWithUsApplication(data: {
    name: string
    email: string
    phone?: string
    position?: string
    message?: string
    resume_url?: string
  }) {
    const client = await this.getClient()
    const { error } = await client
      .from('work_with_us')
      .insert(data)

    if (error) throw error
    return true
  }
}

export const db = DatabaseService.getInstance()
