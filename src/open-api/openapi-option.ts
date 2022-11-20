import { SwaggerOptions } from '@fastify/swagger'

/**
 * https://github.com/fastify/fastify-swagger/blob/master/MIGRATION.md
 */
const openapiOption = {
  mode: 'dynamic',
  openapi: {
    info: {
      title: 'vite-fastify-boilerplate',
      description: 'The API service for Fastify',
      version: '0.2.0'
    },
    servers: [{ url: 'http://localhost:5000' }], // relative to host
    // externalDocs: Object,
    components: {
      securitySchemes: {
        jwt: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    // hideUntagged: true,
    exposeRoute: true
    // security: [Object],
    // tags: [{ name: 'user', description: 'User related end-points' }]
  }
}

export default openapiOption
