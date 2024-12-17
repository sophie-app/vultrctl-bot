export interface paths {
  '/instances': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * List Instances
     * @description List all VPS instances in your account.
     */
    get: operations['list-instances']
    put?: never
    /**
     * Create Instance
     * @description Create a new VPS Instance in a `region` with the desired `plan`. Choose one of the following to deploy the instance:
     *
     *     * `os_id`
     *     * `iso_id`
     *     * `snapshot_id`
     *     * `app_id`
     *     * `image_id`
     *
     *     Supply other attributes as desired.
     */
    post: operations['create-instance']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/instances/{instance-id}': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    /**
     * Get Instance
     * @description Get information about an Instance.
     */
    get: operations['get-instance']
    put?: never
    post?: never
    /**
     * Delete Instance
     * @description Delete an Instance.
     */
    delete: operations['delete-instance']
    options?: never
    head?: never
    /**
     * Update Instance
     * @description Update information for an Instance. All attributes are optional. If not set, the attributes will retain their original values.
     *
     *     **Note:** Changing `os_id`, `app_id` or `image_id` may take a few extra seconds to complete.
     */
    patch: operations['update-instance']
    trace?: never
  }
  '/instances/halt': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Halt Instances
     * @description Halt Instances.
     */
    post: operations['halt-instances']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/instances/reboot': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Reboot instances
     * @description Reboot Instances.
     */
    post: operations['reboot-instances']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/instances/start': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Start instances
     * @description Start Instances.
     */
    post: operations['start-instances']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/instances/{instance-id}/start': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Start instance
     * @description Start an Instance.
     */
    post: operations['start-instance']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/instances/{instance-id}/reboot': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Reboot Instance
     * @description Reboot an Instance.
     */
    post: operations['reboot-instance']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/instances/{instance-id}/reinstall': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Reinstall Instance
     * @description Reinstall an Instance using an optional `hostname`.
     *
     *     **Note:** This action may take a few extra seconds to complete.
     */
    post: operations['reinstall-instance']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/instances/{instance-id}/bandwidth': {
    parameters: {
      query?: {
        /** @description The range of days to include, represented as the number of days relative to the current date. Default 30, Minimum 1 and Max 180. */
        date_range?: number
      }
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    /**
     * Instance Bandwidth
     * @description Get bandwidth information about an Instance.<br><br>The `bandwidth` object in a successful response contains objects representing a day in the month. The date is denoted by the nested object keys. Days begin and end in the UTC timezone. The bandwidth utilization data contained within the date object is refreshed periodically. We do not recommend using this endpoint to gather real-time metrics.
     */
    get: operations['get-instance-bandwidth']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/instances/{instance-id}/neighbors': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    /**
     * Get Instance neighbors
     * @description Get a list of other instances in the same location as this Instance.
     */
    get: operations['get-instance-neighbors']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/instances/{instance-id}/private-networks': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    /**
     * List instance Private Networks
     * @deprecated
     * @description **Deprecated**: use [List Instance VPCs](#operation/list-instance-vpcs) instead.<br><br>List the private networks for an Instance.
     */
    get: operations['list-instance-private-networks']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/instances/{instance-id}/vpcs': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    /**
     * List instance VPCs
     * @description List the VPCs for an Instance.
     */
    get: operations['list-instance-vpcs']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/instances/{instance-id}/vpc2': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    /**
     * List Instance VPC 2.0 Networks
     * @description List the VPC 2.0 networks for an Instance.
     */
    get: operations['list-instance-vpc2']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/instances/{instance-id}/iso': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    /**
     * Get Instance ISO Status
     * @description Get the ISO status for an Instance.
     */
    get: operations['get-instance-iso-status']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/instances/{instance-id}/iso/attach': {
    parameters: {
      query?: never
      header?: never
      path: {
        'instance-id': string
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Attach ISO to Instance
     * @description Attach an ISO to an Instance.
     */
    post: operations['attach-instance-iso']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/instances/{instance-id}/iso/detach': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Detach ISO from instance
     * @description Detach the ISO from an Instance.
     */
    post: operations['detach-instance-iso']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/instances/{instance-id}/private-networks/attach': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Attach Private Network to Instance
     * @deprecated
     * @description Attach Private Network to an Instance.<br><br>**Deprecated**: use [Attach VPC to Instance](#operation/attach-instance-vpc) instead.
     */
    post: operations['attach-instance-network']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/instances/{instance-id}/private-networks/detach': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Detach Private Network from Instance.
     * @deprecated
     * @description Detach Private Network from an Instance.<br><br>**Deprecated**: use [Detach VPC from Instance](#operation/detach-instance-vpc) instead.
     */
    post: operations['detach-instance-network']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/instances/{instance-id}/vpcs/attach': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Attach VPC to Instance
     * @description Attach a VPC to an Instance.
     */
    post: operations['attach-instance-vpc']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/instances/{instance-id}/vpcs/detach': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Detach VPC from Instance
     * @description Detach a VPC from an Instance.
     */
    post: operations['detach-instance-vpc']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/instances/{instance-id}/vpc2/attach': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Attach VPC 2.0 Network to Instance
     * @description Attach a VPC 2.0 Network to an Instance.
     */
    post: operations['attach-instance-vpc2']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/instances/{instance-id}/vpc2/detach': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Detach VPC 2.0 Network from Instance
     * @description Detach a VPC 2.0 Network from an Instance.
     */
    post: operations['detach-instance-vpc2']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/instances/{instance-id}/backup-schedule': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    /**
     * Get Instance Backup Schedule
     * @description Get the backup schedule for an Instance.
     */
    get: operations['get-instance-backup-schedule']
    put?: never
    /**
     * Set Instance Backup Schedule
     * @description Set the backup schedule for an Instance in UTC. The `type` is required.
     */
    post: operations['create-instance-backup-schedule']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/instances/{instance-id}/restore': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Restore Instance
     * @description Restore an Instance from either `backup_id` or `snapshot_id`.
     */
    post: operations['restore-instance']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/instances/{instance-id}/ipv4': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    /**
     * List Instance IPv4 Information
     * @description List the IPv4 information for an Instance.
     */
    get: operations['get-instance-ipv4']
    put?: never
    /**
     * Create IPv4
     * @description Create an IPv4 address for an Instance.
     */
    post: operations['create-instance-ipv4']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/instances/{instance-id}/ipv6': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    /**
     * Get Instance IPv6 Information
     * @description Get the IPv6 information for an VPS Instance.
     */
    get: operations['get-instance-ipv6']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/instances/{instance-id}/ipv6/reverse': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    /**
     * List Instance IPv6 Reverse
     * @description List the reverse IPv6 information for an Instance.
     */
    get: operations['list-instance-ipv6-reverse']
    put?: never
    /**
     * Create Instance Reverse IPv6
     * @description Create a reverse IPv6 entry for an Instance. The `ip` and `reverse` attributes are required. IP address must be in full, expanded format.
     */
    post: operations['create-instance-reverse-ipv6']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/instances/{instance-id}/ipv4/reverse': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Create Instance Reverse IPv4
     * @description Create a reverse IPv4 entry for an Instance. The `ip` and `reverse` attributes are required.
     */
    post: operations['create-instance-reverse-ipv4']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/instances/{instance-id}/user-data': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    /**
     * Get Instance User Data
     * @description Get the user-supplied, base64 encoded [user data](https://www.vultr.com/docs/manage-instance-user-data-with-the-vultr-metadata-api/) for an Instance.
     */
    get: operations['get-instance-userdata']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/instances/{instance-id}/halt': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Halt Instance
     * @description Halt an Instance.
     */
    post: operations['halt-instance']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/instances/{instance-id}/ipv4/reverse/default': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Set Default Reverse DNS Entry
     * @description Set a reverse DNS entry for an IPv4 address
     */
    post: operations['post-instances-instance-id-ipv4-reverse-default']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/instances/{instance-id}/ipv4/{ipv4}': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
        /** @description The IPv4 address. */
        ipv4: string
      }
      cookie?: never
    }
    get?: never
    put?: never
    post?: never
    /**
     * Delete IPv4 Address
     * @description Delete an IPv4 address from an Instance.
     */
    delete: operations['delete-instance-ipv4']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/instances/{instance-id}/ipv6/reverse/{ipv6}': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
        /** @description The IPv6 address. */
        ipv6: string
      }
      cookie?: never
    }
    get?: never
    put?: never
    post?: never
    /**
     * Delete Instance Reverse IPv6
     * @description Delete the reverse IPv6 for an Instance.
     */
    delete: operations['delete-instance-reverse-ipv6']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/instances/{instance-id}/upgrades': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    /**
     * Get Available Instance Upgrades
     * @description Get available upgrades for an Instance
     */
    get: operations['get-instance-upgrades']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
}
export type webhooks = Record<string, never>
export interface components {
  schemas: {
    /**
     * instance-vpc
     * @description VPC information.
     */
    'instance-vpc': {
      /** @description A unique ID for the VPC. */
      id?: string
      /** @description The MAC address to use for this instance on the attached VPC network. */
      mac_address?: string
      /** @description The IP address to use for this instance on the attached VPC network. */
      ip_address?: string
    }
    /**
     * instance-vpc2
     * @description VPC 2.0 information.
     */
    'instance-vpc2': {
      /** @description A unique ID for the VPC. */
      id: string
      /** @description The MAC address to use for this instance on the attached VPC 2.0 network. */
      mac_address?: string
      /** @description The IP address to use for this instance on the attached VPC 2.0 network. */
      ip_address?: string
    }
    /**
     * baremetal-ipv4
     * @description Bare Metal IPv4 information.
     */
    'baremetal-ipv4': {
      /** @description The IPv4 address. */
      ip?: string
      /** @description The IPv4 netmask in dot-decimal notation. */
      netmask?: string
      /** @description The gateway IP address. */
      gateway?: string
      /** @description The type of IP address.
       *
       *     * main_ip */
      type?: string
      /** @description The reverse DNS information for this IP address. */
      reverse?: string
      /** @description The MAC address associated with this IP address. */
      mac_address?: string
    }
    /**
     * baremetal-ipv6
     * @description Bare Metal IPv6 information.
     */
    'baremetal-ipv6': {
      /** @description A unique ID for the IPv6 address. */
      ip?: string
      /** @description The IPv6 subnet. */
      network?: string
      /** @description The IPv6 network size in bits. */
      network_size?: number
      /** @description The type of IP address.
       *
       *     * main_ip */
      type?: string
    }
    /**
     * bandwidth
     * @description Bandwidth information.
     */
    bandwidth: {
      /** @description Total bytes received by this instance on the date (UTC) denoted by the object key. */
      incoming_bytes?: number
      /** @description Total bytes sent by this instance on the date (UTC) denoted by the object key. */
      outgoing_bytes?: number
    }
    /**
     * instance
     * @description Instance information.
     */
    instance: {
      /** @description A unique ID for the VPS Instance. */
      id?: string
      /** @description The [Operating System name](#operation/list-os). */
      os?: string
      /** @description The amount of RAM in MB. */
      ram?: number
      /** @description The size of the disk in GB. */
      disk?: number
      /** @description The main IPv4 address. */
      main_ip?: string
      /** @description Number of vCPUs. */
      vcpu_count?: number
      /** @description The [Region id](#operation/list-regions) where the Instance is located. */
      region?: string
      /** @description The default password assigned at deployment. Only available for ten minutes after deployment. */
      default_password?: string
      /** @description The date this instance was created. */
      date_created?: string
      /** @description The current status.
       *
       *     * active
       *     * pending
       *     * suspended
       *     * resizing */
      status?: string
      /** @description The power-on status.
       *
       *     * running
       *     * stopped */
      power_status?: string
      /** @description The server health status.
       *
       *     * none
       *     * locked
       *     * installingbooting
       *     * ok */
      server_status?: string
      /** @description Monthly bandwidth quota in GB. */
      allowed_bandwidth?: number
      /** @description The IPv4 netmask in dot-decimal notation. */
      netmask_v4?: string
      /** @description The gateway IP address. */
      gateway_v4?: string
      /** @description An array of IPv6 objects. */
      v6_networks?: {
        /** @description The IPv6 subnet. */
        network?: string
        /** @description The main IPv6 network address. */
        main_ip?: string
        /** @description The IPv6 network size in bits. */
        network_size?: number
      }[]
      /** @description The hostname for this instance. */
      hostname?: string
      /** @description The user-supplied label for this instance. */
      label?: string
      /**
       * @deprecated
       * @description Use `tags` instead. The user-supplied tag for this instance.
       */
      tag?: string
      /** @description The internal IP used by this instance, if set. Only relevant when a VPC is attached. */
      internal_ip?: string
      /** @description HTTPS link to the Vultr noVNC Web Console. */
      kvm?: string
      /** @description The [Operating System id](#operation/list-os) used by this instance. */
      os_id?: number
      /** @description The [Application id](#operation/list-applications) used by this instance. */
      app_id?: number
      /** @description The [Application image_id](#operation/list-applications) used by this instance. */
      image_id?: string
      /** @description The [Firewall Group id](#operation/list-firewall-groups) linked to this Instance. */
      firewall_group_id?: string
      /** @description "auto_backups", "ipv6", "ddos_protection" */
      features?: string[]
      /** @description A unique ID for the Plan. */
      plan?: string
      /** @description Tags to apply to the instance. */
      tags?: string[]
      /** @description The user scheme.
       *
       *     * root
       *     * limited */
      user_scheme?: string
    }
    /**
     * private-networks
     * @deprecated
     * @description Private Network information.
     */
    'private-networks': {
      /** @description A unique ID for the Private Network. */
      id?: string
      /** @description The assigned MAC address. */
      mac_address?: string
      /** @description The assigned IP address. */
      ip_address?: string
    }
    /**
     * backup-schedule
     * @description Backup schedule information.
     */
    'backup-schedule': {
      /** @description Indicates if backup is enabled:
       *
       *     * true
       *     * false */
      enabled?: boolean
      /** @description Type of backup schedule:
       *
       *     |   | Value | Description |
       *     | - | ------ | ------------- |
       *     |   | daily | Back up once per day at `hour`. |
       *     |   | weekly | Back up once per week on `dow` at `hour`. |
       *     |   | monthly | Back up each month at `dom` at `hour`. |
       *     |   | daily\_alt\_even | Back up on even dates at `hour`. |
       *     |   | daily\_alt\_odd | Back up on odd dates at `hour`. | */
      type?: string
      /** @description Time of next backup run in UTC. */
      next_scheduled_time_utc?: string
      /** @description Scheduled hour of day in UTC. */
      hour?: number
      /** @description Day of week to run.
       *
       *     |   | Value | Description |
       *     | - | ------ | ------------- |
       *     |   | 1 | Sunday |
       *     |   | 2 | Monday |
       *     |   | 3 | Tuesday |
       *     |   | 4 | Wednesday |
       *     |   | 5 | Thursday |
       *     |   | 6 | Friday |
       *     |   | 7 | Saturday | */
      dow?: number
      /** @description Day of month to run. Use values between 1 and 28. */
      dom?: number
    }
    /**
     * meta
     * @description The meta information object. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination) for more information.
     */
    meta: {
      /** @description Total objects available in the list. This value may be greater than the number of objects returned if `per_page` is set. */
      total?: number
      /** @description Cursor values for pagination. */
      links?: {
        /** @description Cursor value for the next page. */
        next?: string
        /** @description Cursor value for the previous page. */
        prev?: string
      }
    }
  }
  responses: never
  parameters: never
  requestBodies: never
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  'list-instances': {
    parameters: {
      query?: {
        /** @description Number of items requested per page. Default is 100 and Max is 500. */
        per_page?: number
        /** @description Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination). */
        cursor?: string
        /**
         * @deprecated
         * @description Filter by specific tag.
         */
        tag?: string
        /** @description Filter by label. */
        label?: string
        /** @description Filter by main ip address. */
        main_ip?: string
        /** @description Filter by [Region id](#operation/list-regions). */
        region?: string
        /** @description Filter by [Firewall group id](#operation/list-firewall-groups). */
        firewall_group_id?: string
        /** @description Filter by hostname. */
        hostname?: string
        /** @description Set to `true` to show pending charges. */
        show_pending_charges?: boolean
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            instances?: components['schemas']['instance'][]
            meta?: components['schemas']['meta']
          }
        }
      }
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Forbidden */
      403: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'create-instance': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Include a JSON object in the request body with a content type of **application/json**. */
    requestBody?: {
      content: {
        'application/json': {
          /** @description The [Region id](#operation/list-regions) where the Instance is located. */
          region: string
          /** @description The [Plan id](#operation/list-plans) to use when deploying this instance. */
          plan: string
          /** @description The [Operating System id](#operation/list-os) to use when deploying this instance. */
          os_id?: number
          /** @description The URL location of the iPXE chainloader. */
          ipxe_chain_url?: string
          /** @description The [ISO id](#operation/list-isos) to use when deploying this instance. */
          iso_id?: string
          /** @description The [Startup Script id](#operation/list-startup-scripts) to use when deploying this instance. */
          script_id?: string
          /** @description The [Snapshot id](#operation/list-snapshots) to use when deploying the instance. */
          snapshot_id?: string
          /** @description Enable IPv6.
           *
           *     * true */
          enable_ipv6?: boolean
          /** @description Don't set up a public IPv4 address when IPv6 is enabled. Will not do anything unless `enable_ipv6` is also `true`.
           *
           *     * true */
          disable_public_ipv4?: boolean
          /**
           * @deprecated
           * @description Use `attach_vpc` instead. An array of [Private Network ids](#operation/list-networks) to attach to this Instance. This parameter takes precedence over `enable_private_network`. Please choose one parameter.
           */
          attach_private_network?: string[]
          /** @description An array of [VPC IDs](#operation/list-vpcs) to attach to this Instance. This parameter takes precedence over `enable_vpc`. Please choose one parameter. */
          attach_vpc?: string[]
          /** @description An array of [VPC IDs](#operation/list-vpc2) to attach to this Instance. This parameter takes precedence over `enable_vpc2`. Please choose one parameter. */
          attach_vpc2?: string[]
          /** @description A user-supplied label for this instance. */
          label?: string
          /** @description The [SSH Key id](#operation/list-ssh-keys) to install on this instance. */
          sshkey_id?: string[]
          /** @description Enable automatic backups for the instance.
           *
           *     * enabled
           *     * disabled */
          backups?: string
          /** @description The [Application id](#operation/list-applications) to use when deploying this instance. */
          app_id?: number
          /** @description The [Application image_id](#operation/list-applications) to use when deploying this instance. */
          image_id?: string
          /** @description The user-supplied, base64 encoded [user data](https://www.vultr.com/docs/manage-instance-user-data-with-the-vultr-metadata-api/) to attach to this instance. */
          user_data?: string
          /** @description Enable DDoS protection (there is an additional charge for this).
           *
           *     * true
           *     * false */
          ddos_protection?: boolean
          /** @description Notify by email after deployment.
           *
           *     * true
           *     * false (default) */
          activation_email?: boolean
          /** @description The hostname to use when deploying this instance. */
          hostname?: string
          /**
           * @deprecated
           * @description Use `tags` instead. The user-supplied tag.
           */
          tag?: string
          /** @description The [Firewall Group id](#operation/list-firewall-groups) to attach to this Instance. */
          firewall_group_id?: string
          /** @description ID of the floating IP to use as the main IP of this server. */
          reserved_ipv4?: string
          /**
           * @deprecated
           * @description Use `enable_vpc` instead.
           *
           *     If `true`, private networking support will be added to the new server.
           *
           *     This parameter attaches a single network. When no network exists in the region, it will be automatically created.
           *
           *     If there are multiple private networks in the instance's region, use `attach_private_network` instead to specify a network.
           */
          enable_private_network?: boolean
          /** @description If `true`, VPC support will be added to the new server.
           *
           *     This parameter attaches a single VPC. When no VPC exists in the region, it will be automatically created.
           *
           *     If there are multiple VPCs in the instance's region, use `attach_vpc` instead to specify a network. */
          enable_vpc?: boolean
          /** @description If `true`, VPC 2.0 support will be added to the new server.
           *
           *     This parameter attaches a single VPC 2.0 network. When no VPC 2.0 network exists in the region, it will be automatically created.
           *
           *     If there are multiple VPC 2.0 networks in the instance's region, use `attach_vpc2` instead to specify a network. */
          enable_vpc2?: boolean
          /** @description Tags to apply to the instance */
          tags?: string[]
          /** @description Linux-only: The user scheme used for logging into this instance. By default, the "root" user is configured. Alternatively, a limited user with sudo permissions can be selected.
           *
           *     * root
           *     * limited */
          user_scheme?: string
          /** @description The [app variable inputs](#operation/list-marketplace-app-variables) for configuring the marketplace app (name/value pairs). */
          app_variables?: Record<string, never>
        }
      }
    }
    responses: {
      /** @description Created */
      202: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            instance?: components['schemas']['instance']
          }
        }
      }
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Forbidden */
      403: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'get-instance': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            instance?: components['schemas']['instance']
          }
        }
      }
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Forbidden */
      403: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'delete-instance': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description No Content */
      204: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'update-instance': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    /** @description Include a JSON object in the request body with a content type of **application/json**. */
    requestBody?: {
      content: {
        'application/json': {
          /** @description Reinstall the instance with this [Application id](#operation/list-applications). */
          app_id?: number
          /** @description Reinstall the instance with this [Application image_id](#operation/list-applications). */
          image_id?: string
          /** @description Enable automatic backups for the instance.
           *
           *     * enabled
           *     * disabled */
          backups?: string
          /** @description The [Firewall Group id](#operation/list-firewall-groups) to attach to this Instance. */
          firewall_group_id?: string
          /** @description Enable IPv6.
           *
           *     * true */
          enable_ipv6?: boolean
          /** @description Reinstall the instance with this [ISO id](#operation/list-isos). */
          os_id?: string
          /** @description The user-supplied, base64 encoded [user data](https://www.vultr.com/docs/manage-instance-user-data-with-the-vultr-metadata-api/) to attach to this instance. */
          user_data?: string
          /**
           * @deprecated
           * @description Use `tags` instead. The user-supplied tag.
           */
          tag?: string
          /** @description Upgrade the instance with this [Plan id](#operation/list-plans). */
          plan?: string
          /** @description Enable DDoS Protection (there is an additional charge for this).
           *
           *     * true
           *     * false */
          ddos_protection?: boolean
          /**
           * @deprecated
           * @description Use `attach_vpc` instead. An array of [Private Network ids](#operation/list-networks) to attach to this Instance. This parameter takes precedence over `enable_private_network`. Please choose one parameter.
           */
          attach_private_network?: string[]
          /** @description An array of [VPC IDs](#operation/list-vpcs) to attach to this Instance. This parameter takes precedence over `enable_vpc`. Please choose one parameter. */
          attach_vpc?: string[]
          /** @description An array of [VPC IDs](#operation/list-vpc2) to attach to this Instance. This parameter takes precedence over `enable_vpc2`. Please choose one parameter. */
          attach_vpc2?: string[]
          /**
           * @deprecated
           * @description Use `detach_vpc` instead. An array of [Private Network ids](#operation/list-networks) to detach from this Instance. This parameter takes precedence over `enable_private_network`.
           */
          detach_private_network?: string[]
          /** @description An array of [VPC IDs](#operation/list-vpcs) to detach from this Instance. This parameter takes precedence over `enable_vpc`. */
          detach_vpc?: string[]
          /** @description An array of [VPC IDs](#operation/list-vpc2) to detach from this Instance. This parameter takes precedence over `enable_vpc2`. */
          detach_vpc2?: string[]
          /**
           * @deprecated
           * @description Use `enable_vpc` instead.
           *
           *     If `true`, private networking support will be added to the new server.
           *
           *     This parameter attaches a single network. When no network exists in the region, it will be automatically created.
           *
           *     If there are multiple private networks in the instance's region, use `attach_private_network` instead to specify a network.
           */
          enable_private_network?: boolean
          /** @description If `true`, VPC support will be added to the new server.
           *
           *     This parameter attaches a single VPC. When no VPC exists in the region, it will be automatically created.
           *
           *     If there are multiple VPCs in the instance's region, use `attach_vpc` instead to specify a VPC. */
          enable_vpc?: boolean
          /** @description If `true`, VPC 2.0 support will be added to the new server.
           *
           *     This parameter attaches a single VPC 2.0 netowrk. When no VPC 2.0 network exists in the region, it will be automatically created.
           *
           *     If there are multiple VPC 2.0 networks in the instance's region, use `attach_vpc2` instead to specify a VPC 2.0 network. */
          enable_vpc2?: boolean
          /** @description The user supplied label. */
          label?: string
          /** @description Tags to apply to the instance. */
          tags?: string[]
          /** @description Linux-only: The user scheme used for logging into this instance. The instance must be reinstalled for this change to take effect.
           *
           *     * root
           *     * limited */
          user_scheme?: string
        }
      }
    }
    responses: {
      /** @description Accepted */
      202: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            instance?: components['schemas']['instance']
          }
        }
      }
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'halt-instances': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Include a JSON object in the request body with a content type of **application/json**. */
    requestBody?: {
      content: {
        'application/json': {
          /** @description The [Instance IDs](#operation/list-instances) to halt. */
          instance_ids?: string[]
        }
      }
    }
    responses: {
      /** @description No Content */
      204: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'reboot-instances': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Include a JSON object in the request body with a content type of **application/json**. */
    requestBody?: {
      content: {
        'application/json': {
          /** @description The [Instance IDs](#operation/list-instances) to reboot. */
          instance_ids?: string[]
        }
      }
    }
    responses: {
      /** @description No Content */
      204: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'start-instances': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Include a JSON object in the request body with a content type of **application/json**. */
    requestBody?: {
      content: {
        'application/json': {
          /** @description The [Instance IDs](#operation/list-instances) to start. */
          instance_ids?: string[]
        }
      }
    }
    responses: {
      /** @description No Content */
      204: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'start-instance': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description No Content */
      204: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'reboot-instance': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description No Content */
      204: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'reinstall-instance': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    /** @description Include a JSON object in the request body with a content type of **application/json**. */
    requestBody?: {
      content: {
        'application/json': {
          /** @description The hostname to use when reinstalling this instance. */
          hostname?: string
        }
      }
    }
    responses: {
      /** @description Accepted */
      202: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            instance?: components['schemas']['instance']
          }
        }
      }
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'get-instance-bandwidth': {
    parameters: {
      query?: {
        /** @description The range of days to include, represented as the number of days relative to the current date. Default 30, Minimum 1 and Max 180. */
        date_range?: number
      }
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            /** @description This object will contain objects that represent days in the month (UTC). The date is denoted by the nested objects keys. */
            bandwidth?: {
              '2020-10-10'?: components['schemas']['bandwidth']
              '2020-10-11'?: components['schemas']['bandwidth']
            }
          }
        }
      }
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'get-instance-neighbors': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            /** @description An array of [Instance ids](#operation/list-instances) in the same location as this Instance. */
            neighbors?: string[]
          }
        }
      }
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'list-instance-private-networks': {
    parameters: {
      query?: {
        /** @description Number of items requested per page. Default is 100 and Max is 500. */
        per_page?: number
        /** @description Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination). */
        cursor?: string
      }
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            private_networks?: components['schemas']['private-networks'][]
            meta?: components['schemas']['meta']
          }
        }
      }
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'list-instance-vpcs': {
    parameters: {
      query?: {
        /** @description Number of items requested per page. Default is 100 and Max is 500. */
        per_page?: number
        /** @description Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination). */
        cursor?: string
      }
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            vpcs?: components['schemas']['instance-vpc'][]
            meta?: components['schemas']['meta']
          }
        }
      }
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'list-instance-vpc2': {
    parameters: {
      query?: {
        /** @description Number of items requested per page. Default is 100 and Max is 500. */
        per_page?: number
        /** @description Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination). */
        cursor?: string
      }
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            vpcs?: components['schemas']['instance-vpc2'][]
            meta?: components['schemas']['meta']
          }
        }
      }
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'get-instance-iso-status': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            iso_status?: {
              /** @description The [ISO id](#operation/list-isos). */
              iso_id?: string
              /** @description The status of this ISO.
               *     * ready
               *     * attached */
              state?: string
            }
          }
        }
      }
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'attach-instance-iso': {
    parameters: {
      query?: never
      header?: never
      path: {
        'instance-id': string
      }
      cookie?: never
    }
    /** @description Include a JSON object in the request body with a content type of **application/json**. */
    requestBody?: {
      content: {
        'application/json': {
          /** @description The [ISO id](#operation/list-isos) to attach to this Instance. */
          iso_id?: string
        }
      }
    }
    responses: {
      /** @description Accepted */
      202: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            iso_status?: {
              /** @description State of the ISO
               *
               *     * ismounting */
              state?: string
              /** @description The [ISO id](#operation/list-isos) being attached. */
              iso_id?: string
            }
          }
        }
      }
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'detach-instance-iso': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Accepted */
      202: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            iso_status?: {
              /** @description State of the ISO
               *
               *     * isunmounting */
              state?: string
            }
          }
        }
      }
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'attach-instance-network': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    /** @description Include a JSON object in the request body with a content type of **application/json**. */
    requestBody?: {
      content: {
        'application/json': {
          /** @description The [Private Network id](#operation/list-networks) to attach to this Instance. */
          network_id?: string
        }
      }
    }
    responses: {
      /** @description No Content */
      204: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'detach-instance-network': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    /** @description Include a JSON object in the request body with a content type of **application/json**. */
    requestBody?: {
      content: {
        'application/json': {
          /** @description The [Private Network id](#operation/list-networks) to detach from this Instance. */
          network_id?: string
        }
      }
    }
    responses: {
      /** @description No Content */
      204: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'attach-instance-vpc': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    /** @description Include a JSON object in the request body with a content type of **application/json**. */
    requestBody?: {
      content: {
        'application/json': {
          /** @description The [VPC ID](#operation/list-vpcs) to attach to this Instance. */
          vpc_id?: string
        }
      }
    }
    responses: {
      /** @description No Content */
      204: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'detach-instance-vpc': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    /** @description Include a JSON object in the request body with a content type of **application/json**. */
    requestBody?: {
      content: {
        'application/json': {
          /** @description The [VPC ID](#operation/list-vpcs) to detach from this Instance. */
          vpc_id?: string
        }
      }
    }
    responses: {
      /** @description No Content */
      204: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'attach-instance-vpc2': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    /** @description Include a JSON object in the request body with a content type of **application/json**. */
    requestBody?: {
      content: {
        'application/json': {
          /** @description The [VPC ID](#operation/list-vpc2) to attach to this Instance. */
          vpc_id: string
          /** @description The IP address to use for this instance on the attached VPC 2.0 network.   */
          ip_address?: string
        }
      }
    }
    responses: {
      /** @description Accepted */
      202: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'detach-instance-vpc2': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    /** @description Include a JSON object in the request body with a content type of **application/json**. */
    requestBody?: {
      content: {
        'application/json': {
          /** @description The [VPC ID](#operation/list-vpc2) to detach from this Instance. */
          vpc_id: string
        }
      }
    }
    responses: {
      /** @description Accepted */
      202: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'get-instance-backup-schedule': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            backup_schedule?: components['schemas']['backup-schedule']
          }
        }
      }
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'create-instance-backup-schedule': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    /** @description Include a JSON object in the request body with a content type of **application/json**. */
    requestBody?: {
      content: {
        'application/json': {
          /** @description Type of backup schedule:
           *
           *     |   | Value | Description |
           *     | - | ------ | ------------- |
           *     |   | daily | Back up once per day at `hour`. |
           *     |   | weekly | Back up once per week on `dow` at `hour`. |
           *     |   | monthly | Back up each month at `dom` at `hour`. |
           *     |   | daily\_alt\_even | Back up on even dates at `hour`. |
           *     |   | daily\_alt\_odd | Back up on odd dates at `hour`. | */
          type: string
          /** @description Hour of day to run in UTC. */
          hour?: number
          /** @description Day of week to run.
           *
           *     |   | Value | Description |
           *     | - | ------ | ------------- |
           *     |   | 1 | Sunday |
           *     |   | 2 | Monday |
           *     |   | 3 | Tuesday |
           *     |   | 4 | Wednesday |
           *     |   | 5 | Thursday |
           *     |   | 6 | Friday |
           *     |   | 7 | Saturday | */
          dow?: number
          /** @description Day of month to run. Use values between 1 and 28. */
          dom?: number
        }
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'restore-instance': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    /** @description Include a JSON object in the request body with a content type of **application/json**. */
    requestBody?: {
      content: {
        'application/json': {
          /** @description The [Backup id](#operation/list-backups) used to restore this instance. */
          backup_id?: string
          /** @description The [Snapshot id](#operation/list-snapshots) used to restore this instance. */
          snapshot_id?: string
        }
      }
    }
    responses: {
      /** @description Accepted */
      202: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            status?: {
              restore_type?: string
              restore_id?: string
              status?: string
            }
          }
        }
      }
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'get-instance-ipv4': {
    parameters: {
      query?: {
        /** @description If `true`, includes information about the public network adapter (such as MAC address) with the `main_ip` entry. */
        public_network?: boolean
        /** @description Number of items requested per page. Default is 100 and Max is 500.
         *      */
        per_page?: number
        /** @description Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination). */
        cursor?: string
      }
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            ipv4s?: components['schemas']['baremetal-ipv4'][]
            meta?: components['schemas']['meta']
          }
        }
      }
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'create-instance-ipv4': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    /** @description Include a JSON object in the request body with a content type of **application/json**. */
    requestBody?: {
      content: {
        'application/json': {
          /** @description Set if the server is rebooted immediately after the IPv4 address is created.
           *
           *     * true (default)
           *     * false */
          reboot?: boolean
        }
      }
    }
    responses: {
      /** @description Accepted */
      202: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': Record<string, never>
        }
      }
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'get-instance-ipv6': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            ipv6s?: components['schemas']['baremetal-ipv6'][]
            meta?: components['schemas']['meta']
          }
        }
      }
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'list-instance-ipv6-reverse': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            reverse_ipv6s?: {
              /** @description The IPv6 reverse entry. */
              reverse?: string
              /** @description The IPv6 address. */
              ip?: string
            }[]
          }
        }
      }
    }
  }
  'create-instance-reverse-ipv6': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    /** @description Include a JSON object in the request body with a content type of **application/json**. */
    requestBody?: {
      content: {
        'application/json': {
          /** @description The IPv6 address in full, expanded format. */
          ip: string
          /** @description The IPv6 reverse entry. */
          reverse: string
        }
      }
    }
    responses: {
      /** @description No Content */
      204: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'create-instance-reverse-ipv4': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    /** @description Include a JSON object in the request body with a content type of **application/json**. */
    requestBody?: {
      content: {
        'application/json': {
          /** @description The IPv4 address. */
          ip: string
          /** @description The IPv4 reverse entry. */
          reverse: string
        }
      }
    }
    responses: {
      /** @description No Content */
      204: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'get-instance-userdata': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            user_data?: {
              /** @description The user-supplied, base64 encoded [user data](https://www.vultr.com/docs/manage-instance-user-data-with-the-vultr-metadata-api/) attached to this instance. */
              data?: string
            }
          }
        }
      }
    }
  }
  'halt-instance': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description No Content */
      204: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'post-instances-instance-id-ipv4-reverse-default': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    /** @description Include a JSON object in the request body with a content type of **application/json**. */
    requestBody?: {
      content: {
        'application/json': {
          ip: string
        }
      }
    }
    responses: {
      /** @description No Content */
      204: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'delete-instance-ipv4': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
        /** @description The IPv4 address. */
        ipv4: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description No Content */
      204: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Forbidden */
      403: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'delete-instance-reverse-ipv6': {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
        /** @description The IPv6 address. */
        ipv6: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description No Content */
      204: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Forbidden */
      403: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'get-instance-upgrades': {
    parameters: {
      query?: {
        /** @description Filter upgrade by type:
         *
         *     - all (applications, os, plans)
         *     - applications
         *     - os
         *     - plans */
        type?: string
      }
      header?: never
      path: {
        /** @description The [Instance ID](#operation/list-instances). */
        'instance-id': string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            upgrades?: {
              applications?: unknown[]
              plans?: unknown[]
              os?: unknown[]
            }
          }
        }
      }
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Forbidden */
      403: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Not Found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
}
