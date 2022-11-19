import { FastifyPluginAsync } from 'fastify'

const example: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return 'route customers'
  })
  fastify.post('/', async function (request, reply) {
    return 'post route customers'
  })
}

export default example
