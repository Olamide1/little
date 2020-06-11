# Little

Little is a fast, minimal browser that protects your privacy. It includes an interface designed to minimize distractions, and features such as:

* Information from [DuckDuckGo](https://duckduckgo.com) in the search bar.
* Full-text search for visited pages
* Ad and tracker blocking
* Automatic reader view
* Tasks (tab groups)
* Password manager integration
* Dark theme

## Screenshots

<img alt="The search bar, showing information from DuckDuckGo" src="http://minbrowser.org/tour/img/searchbar_duckduckgo_answers.png" width="700"/>

<img alt="The Tasks Overlay" src="http://minbrowser.org/tour/img/tasks.png" width="700"/>

<img alt="Reader View" src="https://user-images.githubusercontent.com/10314059/53312382-67ca7d80-387a-11e9-9ccc-88ac592c9b1c.png" width="700"/>

## Developing

If you want to develop Little:

* Install [Node](https://nodejs.org).
* Run `npm install` to install dependencies.
* Build the translation files and a copy of the JS by running `npm run build`.
  * You can also watch for changes and automatically rebuild by running `npm run watch`.
* Start Min by running `node_modules/.bin/electron .`.<sup>1</sup>
* After you make changes, you can press `ctrl+r` (or `cmd+r` on Mac) twice to restart the browser.

<sup>1</sup>: _Make sure no `Little` instance is already running before starting the development version of `Little`._<br>

### Building binaries

In order to build Little from source, follow the installation instructions above, then use one of the following commands to create binaries:
* ```npm run buildWindows```
* ```npm run buildMac```
* ```npm run buildDebian```
* ```npm run buildRaspi``` (for Raspberry Pi, Raspberry Pi OS)
* ```npm run buildRedhat```

Depending on the platform you are building for, you may need to install additional dependencies:
* If you are using macOS and building a package for Linux, install [Homebrew](http://brew.sh), then run `brew install fakeroot dpkg` first.
* If you are using macOS or Linux and building a package for Windows, you will need to install [Mono](https://www.mono-project.com/) and [Wine](https://www.winehq.org/).

### Contributing Code

* Start by following the development instructions listed above.
* The wiki has an [overview of Min's architecture](https://github.com/minbrowser/min/wiki/Architecture).
* Min uses the [Standard](https://github.com/feross/standard) code style; [most editors](https://standardjs.com/#are-there-text-editor-plugins) have plugins available to auto-format your code.
* If you see something that's missing, or run into any problems, please open an issue!

