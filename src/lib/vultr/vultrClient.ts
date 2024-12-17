import createOpenApiClient from 'openapi-fetch'
import type { paths } from './api'

export const createVultrClient = (apiKey: string) => {
  return createOpenApiClient<paths>({
    baseUrl: 'https://api.vultr.com/v2',
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  })
}
