[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)

# grunt-apify

> Grunt plugin for apify

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-apify --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-apify');
```

## The "apify" task

### Overview
In your project's Gruntfile, add a section named `apify` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  apify: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.title
Type: `String`
Default value: `""`

The title of the documented project.

#### options.src
Type: `String`
Default value: `"src"`

The root folder with the sources to be documented.

#### options.output
Type: `String`
Default value: `"output"`

The folder where the generated documentation should be saved.


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
