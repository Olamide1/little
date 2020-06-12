const rpmInstaller = require('electron-installer-redhat')

const packageFile = require('./../package.json')
const version = packageFile.version

require('./createPackage.js')('linux').then(function (appPaths) {
  var installerOptions = {
    src: appPaths[0],
    dest: 'dist/app',
    arch: 'x86_64',
    productName: 'Little',
    genericName: 'Web Browser',
    version: version,
    section: 'web',
    homepage: 'https://olamide1.github.io/little/',
    icon: 'icons/icon256.png',
    categories: ['Network', 'WebBrowser'],
    mimeType: ['x-scheme-handler/http', 'x-scheme-handler/https', 'text/html'],
    maintainer: 'Little Developers <olamideakomolafe1234@gmail.com>',
    description: 'Little is a fast, minimal browser that protects your privacy.',
    productDescription: 'A web browser with smarter search, improved tab management, and built-in ad blocking. Includes full-text history search, instant answers from DuckDuckGo, the ability to split tabs into groups, and more.',
    requires: []
  }

  console.log('Creating package (this may take a while)')

  rpmInstaller(installerOptions)
    .then(() => console.log('Successfully created package.'))
    .catch(err => {
      console.error(err, err.stack)
      process.exit(1)
    })
})
