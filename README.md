<div align="center">

# vultrctl-bot

A discord bot for managing vultr vps instances

</div>

## commands

- `up` - start a vultr instance
- `down` - stop a vultr instance
- `reboot` - reboot a vultr instance
- `status` - get the status of a vultr instance

## deploy

1. Register a command on discord

```sh
pnpm register
```

2. Deploy the api server

```sh
pnpm run deploy
```

## environment variables

### for discord (`.env`)

- `DISCORD_APPLICATION_ID`
- `DISCORD_CLIENT_ID`
- `DISCORD_TOKEN`

### for api server

```sh
pnpm wrangler secret put VULTR_API_KEY
```

```sh
pnpm wrangler secret put VULTR_API_URL
```

```sh
pnpm wrangler secret put VULTR_INSTANCE_ID
```
