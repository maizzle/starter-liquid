/*
|-------------------------------------------------------------------------------
| Development config                      https://maizzle.com/docs/environments
|-------------------------------------------------------------------------------
|
| This is the base configuration that Maizzle will use when you run commands
| like `npm run build` or `npm run serve`. Additional config files will
| inherit these settings, and can override them when necessary.
*/

import { Liquid } from 'liquidjs'
const engine = new Liquid()

/** @type {import('@maizzle/framework').Config} */
export default {
  build: {
    content: ['src/templates/**/*.html'],
    static: {
      source: ['src/images/**/*.*'],
      destination: 'images',
    },
  },
  expressions: {
    delimiters: ['[[', ']]'],
    unescapeDelimiters: ['[[[', ']]]'],
  },
  afterRender: async ({html, config}) => {
    return engine.parseAndRender(html, config)
  },
}
