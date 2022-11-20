/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { VitePluginNode } from 'vite-plugin-node'
import * as path from 'path'

export default defineConfig({
  server: {
    // vite server configs, for details see [vite doc](https://vitejs.dev/config/#server-host)
    port: 5000
  },
  plugins: [
    ...VitePluginNode({
      // Nodejs native Request adapter
      // currently this plugin support 'express', 'nest', 'koa' and 'fastify' out of box,
      // you can also pass a function if you are using other frameworks, see Custom Adapter section
      adapter: 'fastify',

      // tell the plugin where is your project entry
      appPath: './src/server.ts',

      // Optional, default: 'viteNodeApp'
      // the name of named export of you app from the appPath file
      exportName: 'app',

      // Optional, default: 'esbuild'
      // The TypeScript compiler you want to use
      // by default this plugin is using vite default ts compiler which is esbuild
      // 'swc' compiler is supported to use as well for frameworks
      // like Nestjs (esbuild dont support 'emitDecoratorMetadata' yet)
      tsCompiler: 'esbuild'
    })
  ],
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname)}/`,
      '@/': `${path.resolve(__dirname, 'src')}/`
    }
  }
})
