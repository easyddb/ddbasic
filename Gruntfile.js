'use strict';
module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'scripts/*.js',
        '!Gruntfile.js',
        '!scripts/scripts.min.js',
        '!scripts/selectivizr-min.js',
        '!scripts/equalize.min.js',
        '!scripts/html5shiv.js',
        '!scripts/jquery.cookie.js',
        '!scripts/jquery.scrollto.js',
        '!scripts/respond.min.js',
        '!scripts/respond.src.js',
        '!scripts/scalefix.js'
      ]
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      dist: {
        files: {
          'scripts/scripts.min.js': [
            'scripts/ddbasic.common.js',
            'scripts/ddbasic.search.js',
            'scripts/ddbasic.topbar.menu.js',
            'scripts/ddbasic.facet.js'
          ]
        }
      }
    },
    compass: {                  // Task
      dist: {                   // Target
        options: {              // Target options
          sassDir: 'sass',
          cssDir: 'css'
        }
      }
    },
    watch: {
      compass: {
        files: [
          'sass/{,*/}*.{scss,sass}',
          'sass/*/{,*/}*.{scss,sass}'
        ],
        tasks: ['compass']
      },
      js: {
        files: [
          '<%= jshint.all %>'
        ],
        tasks: ['jshint', 'uglify']
      }
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register tasks
  grunt.registerTask('default', [
    'compass'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};
