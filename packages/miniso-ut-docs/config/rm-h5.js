const ora = require('ora')
const fs = require('fs-extra')
const { resolveFile } = require('./util')

const spinner = ora('Copy h5 website to docs...')

spinner.start()

// packages/taro-ui-docs/dist/h5
fs.emptyDirSync(resolveFile('dist/h5'))

fs.copy(
  // packages/taro-ui-demo/dist
  resolveFile('../miniso-ut-demo/dist'),
  resolveFile('dist/h5')
)
  .then(() => {
    spinner.stop()
  })
  .catch(err => console.error(err))
