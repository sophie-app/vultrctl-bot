import type { CommandContext } from 'discord-hono'
import type { Command } from '.'
import type { Env } from '..'
import { createVultrClient } from '../lib/vultr/vultrClient'

const rebootCommandHandler = (c: CommandContext<Env>) => {
  const vultrClient = createVultrClient(c.env.VULTR_API_KEY, c.env.VULTR_API_BASEURL)
  const instanceId = c.env.VULTR_INSTANCE_ID

  return c.resDefer(async (c) => {
    const { error } = await vultrClient.POST('/instances/{instance-id}/reboot', {
      params: { path: { 'instance-id': instanceId } },
    })

    if (error !== undefined) {
      return c.followup(`❎ failed to reboot instance ${error}`)
    }

    return c.followup('✅ instance rebooted')
  })
}

export const rebootCommand: Command = {
  name: 'reboot',
  description: 'Reboot the instance',
  handler: rebootCommandHandler,
}
