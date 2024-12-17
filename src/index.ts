import { DiscordHono } from 'discord-hono'

const app = new DiscordHono()
  .command('status', (c) => c.res('status response'))
  .command('up', (c) => c.res('up result response'))
  .command('down', (c) => c.res('down result response'))

// biome-ignore lint/style/noDefaultExport: this file is entry point
export default app
