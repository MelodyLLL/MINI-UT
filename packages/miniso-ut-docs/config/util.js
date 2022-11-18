const nodePath = require('path')

exports.getProjectRoot = function () {
  return nodePath.resolve(__dirname, '..')
}

exports.resolveFile = path => nodePath.resolve(__dirname, '..', path)
