import type { CommandContext } from 'discord-hono'
import type { Command } from '.'
import type { Env } from '..'
import { createVultrClient } from '../lib/vultr/vultrClient'

const upCommandHandler = async (c: CommandContext<Env>) => {
  const vultrClient = createVultrClient(c.env.VULTR_API_KEY, c.env.VULTR_API_BASEURL)
  const instanceId = c.env.VULTR_INSTANCE_ID

  const { error } = await vultrClient.POST('/instances/{instance-id}/start', {
    params: { path: { 'instance-id': instanceId } },
  })

  if (error !== undefined) {
    return c.res(`failed to start instance ${error}`)
  }

  return c.res('✅ instance started')
}

export const upCommand: Command = {
  name: 'up',
  description: 'Start the instance',
  handler: upCommandHandler,
}
