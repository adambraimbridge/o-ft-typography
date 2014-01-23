/*
 * grunt-contrib-uglify
 * http://gruntjs.com/
 *
 * Copyright (c) 2013 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    'origami-demo': {
      options: {
        modernizr: true,
        main: ['demo.mustache']
      }
    },
    watch: {
      'origami-demo': {
          files: ['*.scss', 'demo.mustache'],
          tasks: ['origami-demo']
      }
    }
  });

  grunt.loadNpmTasks('grunt-origami-demoer');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // By default, lint and run all tests.
  grunt.registerTask('default', ['origami-demo']);

};