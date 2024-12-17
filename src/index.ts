import { DiscordHono } from 'discord-hono'
import { commands } from './commands'

export interface Env {
  Bindings: {
    VULTR_API_KEY: string
    VULTR_API_BASEURL: string
    VULTR_INSTANCE_ID: string
  }
}

const app = commands.reduce((acc, c) => {
  return acc.command(c.name, c.handler)
}, new DiscordHono<Env>())

// biome-ignore lint/style/noDefaultExport: this file is entry point
export default app
