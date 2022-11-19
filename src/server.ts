import Fastify, { FastifyInstance } from 'fastify'
import { initSwagger } from './swagger'
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

// Init Swagger
void initSwagger(app)

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
    await app.listen({ port: 3000 })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
