# videojs-spellbook
[![Build Status](https://travis-ci.org/videojs/spellbook.svg?branch=master)](https://travis-ci.org/videojs/spellbook)
[![NPM](https://nodei.co/npm/videojs-spellbook.png)](https://nodei.co/npm/videojs-spellbook/)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Features](#features)
- [Installation](#installation)
- [Things to know](#things-to-know)
- [Known issues & Workarounds](#known-issues--workarounds)
- [More Information](#more-information)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Features
* General
  * Small browser dists by using all of the latest technologies
  * External source maps for all js and css files
  * Automatic licence/banner insertion at the top of minified files
  * support for linting js, css, documentation, and documenation examples (js only)
  * super fast incremental rebuilds `--watch`
* JavaScript
  * es6 -> es5 for publishing on npm
  * Ability to support IE8 (or not) effortlessly (NOTE: this will add a lot of bytes to your dist)
  * Support for es6 -> es6 imports using `jsnext:main` pointing to es6 entry files in package.json
  * Support for shimming `video.js` so that it will be included in the page for testing but not included in the dist file
  * Automatic unit test generation for `webpack` and `browserify`
* CSS
  * support for vanilla css with concatination via `postcss-import` (like require for css)
  * support for sass
* Docs
  * API documenation generated into html files from jsdoc comments
  * Manual documenation generated into html files
  * Automatic table of contents for manual documenation
* Test
  * QUnitjs supported out of the box
  * sinon supported out of the box (local installation not necessary or recommended)
  * Manual debuging via karma debug page and --watch
* Server
  * `--tunnel` option to share your local dev server over the internet
  * `sb-start` to:
    * start a dev server
    * build everything and re-build on change
    * lint everything and re-lint on change
    * test everything and re-build tests on change
    * auto-reload when files change in
      * `<project-root>/dist/**/*.js`
      * `<project-root>/dist/**/*.css`
      * `<project-root>/dist/**/*.html`
      * `<project-root>/examples/**/*.html`
      * `<project-root>/index.html`
    * Proxy karma to `http://localhost:9999/test` so:
      * manual debugging is easier
      * it can be included in a tunnel over the internet
      * auto-reloads will happen when code changes
* Release mangagement
  * Support for use as an npm script or standalone
  * Does the following:
    1. Release un-released changelog entries with `chg`
    2. update the version in package.json
    3. support/build dists for bower in the tag so they don't clutter the main repo
    4. make a git commit with the version name as the message
    5. tag a git branch
    6. Advise the user on how to push to git, and publish to npm

# Installation
1. Run `npm install --save-dev videojs-spellbook`
2. Read the [sb man page](/docs/sb.md) to lean about how your project should be structured.

# Things to know
* If video.js is not installed in your project the version in spellbook will be used
* CSS changes are injected without a page reload
* `jsnext:main` must point to your es6 main file in each project that you want to bundle together (this will make
  the dist files much smaller).
* `global`/`video.js` are included in spellbook and will be used for your project if your project does not have/need
  local versions.

# Known issues & Workarounds
* sometimes binaries fail to exit during watch which can cause weird behaviour
  * make sure to check for running `sb-*` binaries if things are weird
* rollup is not used during watch (rollupify and watchify don't play nice)
  * this is not really something that can be worked around yet but it should
    not be an issue as rollup will be used during `build` and `watch` should only
    be used in development
* es6 code changes in sub projects don't trigger a rebuild on watch
  * This is due to rollupify not working with watchify, see the above issue. Have spellbook or your
    current build system watch your sub-project and rebuild its es5 dist on change.

# More Information
* [Man Pages](/docs/)
* [TODO](TODO.md)
