import { DiscordHono } from 'discord-hono'

export interface Env {
  Bindings: {
    VULTR_API_KEY: string
    VULTR_API_BASEURL: string
    VULTR_INSTANCE_ID: string
  }
}

const app = new DiscordHono()
  .command('status', (c) => c.res('status response'))
  .command('up', (c) => c.res('up result response'))
  .command('down', (c) => c.res('down result response'))

// biome-ignore lint/style/noDefaultExport: this file is entry point
export default app
