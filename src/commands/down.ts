import type { CommandContext } from 'discord-hono'
import type { Command } from '.'
import type { Env } from '..'
import { createVultrClient } from '../lib/vultr/vultrClient'

const downCommandHandler = (c: CommandContext<Env>) => {
  const vultrClient = createVultrClient(c.env.VULTR_API_KEY, c.env.VULTR_API_BASEURL)
  const instanceId = c.env.VULTR_INSTANCE_ID

  return c.resDefer(async (c) => {
    const { error } = await vultrClient.POST('/instances/{instance-id}/halt', {
      params: { path: { 'instance-id': instanceId } },
    })

    if (error !== undefined) {
      return c.followup(`❎ failed to stop instance ${error}`)
    }

    return c.followup('✅ instance stopped')
  })
}

export const downCommand: Command = {
  name: 'down',
  description: 'Stop the instance',
  handler: downCommandHandler,
}
