import Fastify, { FastifyInstance } from 'fastify'

import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import openapiOption from './open-api/openapi-option'
import fastifySwaggerUIDefinition from './open-api/fastify-swagger-ui-definition'

import closeWithGrace from 'close-with-grace'
import * as dotenv from 'dotenv'

// Read the .env file.
dotenv.config()

// Instantiate Fastify with some config
const app: FastifyInstance = Fastify({
  logger: process.env.NODE_ENV === 'development'
})

// Register your application as a normal plugin.
void app.register(import('./app'))

// Delay is the number of milliseconds for the graceful close to finish
const closeListeners = closeWithGrace({ delay: 500 }, async (opts: any) => {
  if (opts.err) {
    app.log.error(opts.err)
  }

  await app.close()
})

app.addHook('onClose', async (_instance, done) => {
  closeListeners.uninstall()
  done()
})

const start = async () => {
  try {
    await app.listen({ port: 5000 })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
