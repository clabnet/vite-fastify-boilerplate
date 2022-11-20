import { FastifyPluginAsync } from 'fastify'

const example: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return 'this is an example'
  })

  // fastify.route({
  //   method: 'GET',
  //   path: '/aaa',
  //   schema: {
  //     description: 'Route used by the frontend app to validate the session' +
  //                  ' and retrieve the CSRF token.',
  //     response: {
  //       200: S.object().prop('csrfToken', S.string())
  //     }
  //   },
  //   handler: onRefresh
  // })

  async function onRefresh (req, reply) {
  }

  // fastify.put(
  //   '/:id',
  //   {
  //     schema: {
  //       description: 'post some data',
  //       tags: ['user', 'code'],
  //       summary: 'qwerty',
  //       security: [{ apiKey: [] }],
  //       params: {
  //         type: 'object',
  //         properties: {
  //           id: {
  //             type: 'string',
  //             description: 'user id'
  //           }
  //         }
  //       },
  //       body: {
  //         type: 'object',
  //         properties: {
  //           hello: { type: 'string' },
  //           obj: {
  //             type: 'object',
  //             properties: {
  //               some: { type: 'string' }
  //             }
  //           }
  //         }
  //       },
  //       response: {
  //         201: {
  //           description: 'Succesful response',
  //           type: 'object',
  //           properties: {
  //             hello: { type: 'string' }
  //           }
  //         },
  //         default: {
  //           description: 'Default response',
  //           type: 'object',
  //           properties: {
  //             foo: { type: 'string' }
  //           }
  //         }
  //       }
  //     }
  //   },
  //   (req, reply) => {
  //     reply.send({ hello: `Hello ${req.body.hello}` })
  //   }
  // )

  // fastify.post(
  //   '/:id',
  //   {
  //     schema: {
  //       description: 'post some data',
  //       summary: 'qwerty',
  //       security: [{ apiKey: [] }],
  //       params: {
  //         type: 'object',
  //         properties: {
  //           id: {
  //             type: 'string',
  //             description: 'user id'
  //           }
  //         }
  //       },
  //       body: {
  //         type: 'object',
  //         properties: {
  //           hello: { type: 'string' },
  //           obj: {
  //             type: 'object',
  //             properties: {
  //               some: { type: 'string' }
  //             }
  //           }
  //         }
  //       },
  //       response: {
  //         201: {
  //           description: 'Succesful response',
  //           type: 'object',
  //           properties: {
  //             hello: { type: 'string' }
  //           }
  //         }
  //       }
  //     }
  //   },
  //   (req, reply) => {
  //     reply.send({ hello: `Hello ${req.body.hello}` })
  //   }
  // )
}

export default example
