/*
 * grunt-apify
 * https://github.com/jbalsas/grunt-apify
 *
 * Copyright (c) 2013 Chema Balsas
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    grunt.registerMultiTask("apify", "Grunt plugin for apify", function() {
        var defaults    = require("apify/lib/defaults.json"),
            documenter  = require("apify/lib/Documenter"),
            done        = this.async();
        
        // Resolve absolute path for default templates and assets
        var templates = Object.keys(defaults.templates);
        templates.forEach(function (templateName) {
            defaults.templates[templateName] = "node_modules/apify/bin/" + defaults.templates[templateName];
        });
        
        defaults.assets = "node_modules/apify/bin/" + defaults.assets;
        
        defaults.source = this.src || "src";
        defaults.output = this.output || "docs";
        defaults.title = this.title || "";
        
        documenter.init(defaults);
    });

};
