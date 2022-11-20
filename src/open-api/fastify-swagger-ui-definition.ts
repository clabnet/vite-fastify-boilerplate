/**
 * https://github.com/fastify/fastify-swagger/blob/master/MIGRATION.md
 */
const fastifySwaggerUIDefinition = {
  routePrefix: '/swagger',
  initOAuth: {},
  uiConfig: {
    docExpansion: 'full',
    deepLinking: false
  },
  uiHooks: {
    onRequest: function (request, reply, next) {
      next()
    },
    preHandler: function (request, reply, next) {
      next()
    }
  },
  staticCSP: true,
  transformStaticCSP: (header) => header
}

export default fastifySwaggerUIDefinition
