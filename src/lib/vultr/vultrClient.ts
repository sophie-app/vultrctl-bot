import createOpenApiClient from 'openapi-fetch'
import type { paths } from './api'

export const createVultrClient = (apiKey: string, baseUrl: string) => {
  return createOpenApiClient<paths>({
    baseUrl,
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  })
}
