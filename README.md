# Drash Website

<a href="https://github.com/drashland/deno-drash/">
  <img src="https://img.shields.io/github/release/drashland/deno-drash.svg?color=bright_green&label=drash%20latest">
</a> 
<a href="https://github.com/drashland/deno-drash-docs/actions?query=workflow%3Aci">
  <img src="https://img.shields.io/github/workflow/status/drashland/deno-drash-docs/master?label=docs%20master">
</a>

## Environments

* Production: [https://drash.land](https://drash.land)
    * This environment includes code that is released and stable.
* Staging: [https://drash.land](https://drash.land/staging)
    * This environment includes code that is still under development, but ready to be realeased soon.

## Technology Stack

* [deno](https://deno.land) for its web server;
* [Drash](https://drash.land) for its web server framework;
* [dejs](https://github.com/syumai/dejs) for its template engine;
* [npm](https://www.npmjs.com) to map console scripts to the `npm run` command;
* [Vue](https://vuejs.org) for its front-end framework;
* [webpack](https://webpack.js.org/) to enable bundling of Vue templates and enabling Vue single file components; and
* [pug](https://pugjs.org/api/getting-started.html) for HTML markup in Vue single file components

## Setup

Install Sass.

```
brew install sass/sass/sass
```

Install dependencies.

```shell
npm install
```

Install watchdog for file watching.

```shell
console/pip.install.watchdog
```

Add the following to your `$PATH` variable.

```
~/Library/Python/2.7/bin 
```

_The installer warns you about setting Python binaries to your `$PATH` variable. Pay attention to that message._

## Running The Development Environment

Step 1: Run the dev server.

```shell
npm run dev
```

The dev server is watched by `watchdog`. `watchdog` is like `nodemon` for Node.js. Every time you save changes, the dev server will reload with your changes. The browser will not reload on its own. You have to do that yourself.

The dev server starts webpack in the background with the `--watch` flag. You do not need to worry about recompiling the Vue components. However, if you make a change to `webpack.config.js`, then you will need to reload the dev server. The dev server does not reload with changes made to `webpack.config.js`.

### Troubleshooting

Problem with node-sass?

```
npm rebuild node-sass
```

Problem with watchdog?

Make sure you have Python 2.7 installed.

## Compile SASS to CSS

```shell
npm run sass
```

`.scss` files are currently NOT being watched. So, if you make changes to a `.scss` file, then make sure you run the above command to compile your changes.

## Screenshots

Sometimes you will need to add screenshots to documentation pages. Screenshots should be 1400x1000.
