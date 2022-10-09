import NodePath from 'path'
import RollupJson from '@rollup/plugin-json'
// import RollupNodeResolve from '@rollup/plugin-node-resolve'
import RollupCommonjs from '@rollup/plugin-commonjs'
import RollupTypescript from 'rollup-plugin-typescript2'
import RollupCopy from 'rollup-plugin-copy'
import progress from 'rollup-plugin-progress'
import filesize from 'rollup-plugin-filesize'
import Package from './package.json'

const resolveFile = path => NodePath.resolve(__dirname, path)

const externalPackages = ['react', 'react-dom', '@tarojs/components', '@tarojs/runtime', '@tarojs/taro', '@tarojs/react']

export default {
  input: resolveFile(Package.source),
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/index.esm.js',
      format: 'es',
      sourcemap: true
    }
  ],
  external: externalPackages,
  plugins: [
    // RollupNodeResolve({
    //   customResolveOptions: {
    //     moduleDirectory: 'node_modules'
    //   }
    // }),
    RollupCommonjs({
      include: /\/node_modules\//
    }),
    RollupJson(),
    RollupTypescript({
      tsconfig: resolveFile('tsconfig.json')
    }),
    RollupCopy({
      targets: [
        {
          src: resolveFile('src/style'),
          dest: resolveFile('dist')
        }
      ]
    }),
    progress(),
    filesize()
  ]
}
