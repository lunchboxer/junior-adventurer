import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default {
  input: './graphql/index.js',
  output: {
    sourcemap: false,
    format: 'cjs',
    file: './grapql/dist/index.js',
    exports: 'named',
  },
  plugins: [
    nodeResolve({
      dedupe: 'graphql',
      browser: false,
    }),
    commonjs(),
  ],
}
