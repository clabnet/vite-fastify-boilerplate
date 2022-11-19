import { FastifyPluginAsync } from 'fastify'

import { usersData } from '../../../mockData'

const example: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return usersData
  })
  fastify.post('/', async function (request, reply) {
    return 'post route users'
  })
}

export default example
