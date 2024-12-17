import type { CommandContext } from 'discord-hono'
import type { Env } from '..'
import { statusCommand } from './status'
import { upCommand } from './up'

export type Command = {
  name: string
  description: string
  handler: (c: CommandContext<Env>) => Response | Promise<Response>
}

export const commands = [statusCommand, upCommand]
