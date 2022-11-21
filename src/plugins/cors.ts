import type { FastifyCorsOptions } from '@fastify/cors'
import cors from '@fastify/cors'
import fp from 'fastify-plugin'

/**
 * @fastify/cors enables the use of CORS in a Fastify application.
 * @see https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
 * @see https://github.com/fastify/fastify-cors
 */
export default fp<FastifyCorsOptions>(async (fastify, opts) => {
  void fastify.register(cors, {
    ...opts
  })
})

// // Enables the use of CORS in a Fastify application.
// // https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
// await fastify.register(Cors, {
//   origin: false
// })
