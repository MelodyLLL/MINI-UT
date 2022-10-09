import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import progress from 'rollup-plugin-progress'
import filesize from 'rollup-plugin-filesize'
import modulesMaps from './modules.json'
import path from 'path'
import { name as pkgName, module as esmBundle, main as umdBundle } from './package.json'

const name = pkgName.split('/').pop()
console.log(name)

const plugins = [
  commonjs({
    include: ['node_modules/**', 'node_modules/**/*', 'dist/**/*', '../../node_modules/**/*']
  }),
  nodeResolve({
    jsnext: true,
    main: true,
    extensions: ['.js', '.ts', '.json']
  }),
  typescript({
    tsconfig: 'tsconfig.json'
  }),
  progress(),
  filesize()
]
const bundleConfig = {
  input: 'src/index.ts',
  output: [
    {
      name,
      file: esmBundle,
      format: 'es',
      exports: 'auto'
    },
    {
      name,
      file: umdBundle,
      format: 'umd',
      exports: 'named'
    }
  ],
  plugins
}
const modulesConfig = (function () {
  return Object.entries(modulesMaps).map(([name, input]) => {
    return {
      input,
      output: {
        name,
        file: path.resolve(__dirname, `./dist/module/${name}.js`),
        format: 'es',
        exports: 'auto'
      },
      plugins
    }
  })
})()

export default [bundleConfig, ...modulesConfig]
