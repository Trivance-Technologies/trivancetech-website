// lib/env/server.ts
import { z } from 'zod'

const serverEnvSchema = z.object({
  // Server‑only Strapi URL (for internal API calls, e.g., from `getServerSideProps`)
  STRAPI_URL: z.string().url('STRAPI_URL must be a valid URL'),

  // Revalidation token for on‑demand ISR
  REVALIDATE_TOKEN: z.string().min(1, 'REVALIDATE_TOKEN is required'),

  // Public URL of the app (used for absolute links, etc.)
  SITE_URL: z.string().url('SITE_URL must be a valid URL'),
})

function getServerEnv() {
  if (typeof window !== 'undefined') {
    throw new Error('getServerEnv() can only be called on the server side')
  }

  try {
    return serverEnvSchema.parse({
      STRAPI_URL: process.env.STRAPI_URL,
      REVALIDATE_TOKEN: process.env.REVALIDATE_TOKEN,
      SITE_URL: process.env.SITE_URL
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.issues.map(
        (err) => `${err.path.join('.')}: ${err.message}`
      )
      throw new Error(
        `Invalid server environment variables:\n${errorMessages.join('\n')}`
      )
    }
    throw error
  }
}

export const serverEnv = getServerEnv()
export type ServerEnv = z.infer<typeof serverEnvSchema>