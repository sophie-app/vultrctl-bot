import { Command, register } from 'discord-hono'

const commands = [
  new Command('status', 'get status of vps instance'),
  new Command('up', 'start vps instance'),
  new Command('down', 'stop vps instance'),
]

register(
  commands,
  process.env.DISCORD_APPLICATION_ID,
  process.env.DISCORD_TOKEN,
  process.env.DISCORD_TEST_GUILD_ID,
)
