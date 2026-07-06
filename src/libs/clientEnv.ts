// lib/env/client.ts
import { z } from 'zod'

const clientEnvSchema = z.object({
  // EmailJS
  NEXT_PUBLIC_EMAILJS_SERVICE_ID: z.string().min(1, 'EmailJS Service ID is required'),
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: z.string().min(1, 'EmailJS Template ID is required'),
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: z.string().min(1, 'EmailJS Public Key is required'),

  // Node environment
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
})

export const clientEnv = clientEnvSchema.parse({
  NEXT_PUBLIC_EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  NODE_ENV: process.env.NODE_ENV,
})

export type ClientEnv = z.infer<typeof clientEnvSchema>