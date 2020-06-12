const fs = require('fs')
const path = require('path')
const archiver = require('archiver')

const packageFile = require('./../package.json')
const version = packageFile.version

require('./createPackage.js')('darwin').then(function (appPaths) {

  /* create zip files */
  var packagePath = appPaths[0]

  var output = fs.createWriteStream(packagePath.replace('Little-', 'Little-v' + version + '-') + '.zip')
  var archive = archiver('zip', {
    zlib: { level: 9 }
  })

  archive.directory(path.resolve(packagePath, 'Little.app'), 'Little.app')

  archive.pipe(output)
  archive.finalize()
})
