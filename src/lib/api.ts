import { z } from 'zod';
import fetch from 'node-fetch';

const API_URL = 'https://cms.aboexit.ch/api';

// Zod schemas for type validation
const categorySchema = z.object({
  id: z.string(),
  name: z.record(z.string()),
  slug: z.string(),
});

const providerSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  description: z.string(),
  metaTitle: z.string(),
  metaDescription: z.string(),
  address: z.string(),
  category: z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string().optional(),
  }),
});

export type Category = z.infer<typeof categorySchema>;
export type Provider = z.infer<typeof providerSchema>;

interface PayloadResponse<T> {
  docs: T[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

async function fetchAPI<T>(endpoint: string, locale: string = 'de'): Promise<T[]> {
  try {
    const url = new URL(`${API_URL}/${endpoint}`);
    url.searchParams.append('locale', locale);
    url.searchParams.append('depth', '1');
    url.searchParams.append('limit', '100');

    console.log(`[API] Fetching from: ${url.toString()}`);

    const response = await fetch(url.toString(), {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    if (!data || typeof data !== 'object' || !('docs' in data) || !Array.isArray((data as any).docs)) {
      console.error(`[API] Invalid response format for ${endpoint}:`, data);
      return [];
    }

    const requiredProps = ['totalDocs', 'limit', 'totalPages', 'page', 'pagingCounter', 'hasPrevPage', 'hasNextPage', 'prevPage', 'nextPage'];
    for (const prop of requiredProps) {
      if (!(prop in data)) {
        console.error(`[API] Missing property ${prop} in response for ${endpoint}:`, data);
        return [];
      }
    }

    const payload: PayloadResponse<T> = data as PayloadResponse<T>;
    console.log(`[API] ${endpoint} total docs:`, payload.totalDocs);
    
    return payload.docs;
  } catch (error) {
    console.error(`[API] Error fetching ${endpoint}:`, error);
    return [];
  }
}

export async function getAllProviders(locale: string = 'de'): Promise<Provider[]> {
  console.log(`[API] Getting all providers for locale: ${locale}`);
  try {
    const providers = await fetchAPI<Provider>('providers', locale);
    return providers.map(provider => {
      try {
        return providerSchema.parse(provider);
      } catch (error) {
        if (error instanceof z.ZodError) {
          console.error('[API] Provider validation errors:', error.errors);
          console.error('[API] Invalid provider data:', provider);
        }
        return null;
      }
    }).filter((provider): provider is Provider => provider !== null);
  } catch (error) {
    console.error('[API] Error in getAllProviders:', error);
    return [];
  }
}

export async function getProviderBySlug(slug: string, locale: string = 'de'): Promise<Provider | null> {
  console.log(`[API] Getting provider by slug: ${slug}, locale: ${locale}`);
  try {
    const url = new URL(`${API_URL}/providers`);
    url.searchParams.append('where[slug][equals]', slug);
    url.searchParams.append('locale', locale);
    url.searchParams.append('depth', '1');

    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json() as unknown;

    if (!data || typeof data !== 'object' || !('docs' in data) || !Array.isArray((data as any).docs)) {
      console.error(`[API] Invalid response format for provider by slug:`, data);
      return null;
    }

    const payload: PayloadResponse<Provider> = data as PayloadResponse<Provider>;
    const provider = payload.docs[0];

    if (!provider) {
      console.log(`[API] No provider found with slug: ${slug}`);
      return null;
    }

    return providerSchema.parse(provider);
  } catch (error) {
    console.error('[API] Error in getProviderBySlug:', error);
    return null;
  }
}

export async function getAllCategories(locale: string = 'de'): Promise<Category[]> {
  console.log(`[API] Getting all categories for locale: ${locale}`);
  try {
    const categories = await fetchAPI<Category>('categories', locale);
    return categories.map(category => {
      try {
        return categorySchema.parse(category);
      } catch (error) {
        if (error instanceof z.ZodError) {
          console.error('[API] Category validation errors:', error.errors);
          console.error('[API] Invalid category data:', category);
        }
        return null;
      }
    }).filter((category): category is Category => category !== null);
  } catch (error) {
    console.error('[API] Error in getAllCategories:', error);
    return [];
  }
}