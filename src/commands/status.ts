import { type CommandContext, Embed } from 'discord-hono'
import type { Command } from '.'
import type { Env } from '..'
import { createVultrClient } from '../lib/vultr/vultrClient'

const statusCommandHandler = async (c: CommandContext<Env>) => {
  const vultrClient = createVultrClient(c.env.VULTR_API_KEY, c.env.VULTR_API_BASEURL)
  const instanceId = c.env.VULTR_INSTANCE_ID

  const { data, error } = await vultrClient.GET('/instances/{instance-id}', {
    params: { path: { 'instance-id': instanceId } },
  })

  if (error !== undefined || data === undefined) {
    return c.res(`failed to fetch vultr api  ${error}`)
  }

  if (data.instance === undefined) {
    return c.res('failed to get instance status')
  }

  return c.res({
    embeds: [
      new Embed()
        .title('Instance Status')
        .fields(
          { name: 'id', value: `${data.instance.id}`, inline: false },
          { name: 'ipv4', value: `${data.instance.main_ip}`, inline: false },
          { name: 'status', value: `${data.instance.status}`, inline: false },
          { name: 'power-status', value: `${data.instance.power_status}`, inline: false },
          { name: 'server-status', value: `${data.instance.server_status}`, inline: false },
        )
        .timestamp(new Date().toISOString()),
    ],
  })
}

export const statusCommand: Command = {
  name: 'status',
  description: 'Get the status of the instance',
  handler: statusCommandHandler,
}
