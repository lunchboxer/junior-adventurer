import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
// import { getBabelOutputPlugin } from '@rollup/plugin-babel'

export default {
  input: './index.js',
  output: {
    sourcemap: false,
    format: 'cjs',
    file: './dist/index.js',
    exports: 'named',
  },
  plugins: [
    nodeResolve({
      dedupe: 'graphql',
      browser: false,
    }),
    commonjs(),
    // getBabelOutputPlugin({
    //   presets: [['@babel/preset-env', { targets: 'node 10' }]],
    // }),
  ],
}
