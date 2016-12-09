'use strict';

module.exports = function(grunt) {

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        notify_hooks: {
            options: {
                enabled: true,
                max_jshint_notifications: 5,
                title: "Build Template" // Change this to your project
            }
        },
        sass: {                              // Task
          dist: {                            // Target
            options: {                       // Target options
              style: 'expanded'
            },
            files: {                         // Dictionary of files
              'test/assets/styles/index.css': 'assets/styles/index.scss'       // 'destination': 'source'
            }
          }
        },
        // Prefix the CSS
        autoprefixer: {
            options: {
                browsers: ["Android 2.3",
                            "Android >= 4",
                            "Chrome >= 20",
                            "Firefox >= 24",
                            "Explorer >= 8",
                            "iOS >= 6",
                            "Opera >= 12",
                            "Safari >= 6"]
            },
            your_target: {
                options: {
                    flatten: true
                },
                src: 'test/assets/styles/index.css',
                dest: 'test/assets/styles/index.pref.css'
            },
        },
        // Minify CSS
        cssmin: {
            minify: {
                expand: true,
                cwd: 'test/assets/styles/',
                src: ['index.pref.css'],
                dest: 'assets/styles/',
                ext: '.min.css'
            },
        },

        // Minify HTML
        htmlmin: {                                     // Task
            dist: {                                      // Target
              options: {                                 // Target options
                removeComments: true,
                collapseWhitespace: true
              },
              files: {                                   // Dictionary of files
                'test/index.html': 'index.html',     // 'destination': 'source'
              }
            }
        },

        image: {
          dynamic: {
            files: [{
              expand: true,
              cwd: 'assets/images/',
              src: ['*.{png,jpg,gif,svg,ico}'],
              dest: 'dist/assets/images/'
            }]
          }
        },

        //- Concat JS into single files
        concat: {
          dist: {
            options: {
              // Replace all 'use strict' statements in the code with a single one at the top
              banner: "'use strict';\n",
              process: function(src, filepath) {
                return '// Source: ' + filepath + '\n' +
                  src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
              },
            },
            files: {
              'test/assets/scripts/index.min.js': ['assets/scripts/*.js']
            },
          },
        },
        // Uglify Jaascript files
        minified : {
          files: {
            src: [
              'test/assets/scripts/index.min.js'
            ],
            dest: [
              './'
            ]
          },
          options : {
            sourcemap: false,
            allinone: false
          }
        },

        sync: {
            main: {
                files: [
                  {
                    cwd: './node_modules/bootstrap/dist/',
                    src: [
                        'css/**',
                        'fonts/**',
                        'js/**',
                    ],
                    dest: 'assets/bootstrap/'
                  },
                  {
                    cwd: 'assets/bootstrap/',
                    src: [
                        'css/**',
                        'fonts/**',
                        'js/**',
                    ],
                    dest: 'dist/assets/bootstrap/'
                  },
                  {
                    cwd: './node_modules/jquery/dist/',
                    src: [
                        'jquery.min.js',
                    ],
                    dest: 'assets/jquery/'
                  },
                  {
                    cwd: 'assets/jquery/',
                    src: [
                        'jquery.min.js',
                    ],
                    dest: 'dist/assets/jquery/'
                  },
                  {
                    cwd: 'assets/owl-carousel/',
                    src: [
                        'owl-carousel/owl.carousel.min.js',
                        'owl-carousel/owl.carousel.css',
                        'owl-carousel/owl.theme.css',
                        'owl-carousel/owl.transitions.css',
                    ],
                    dest: 'dist/assets/owl-carousel/'
                  },
                  {
                    cwd: '',
                    src: [
                        'index.min.js',
                    ],
                    dest: 'dist/'
                  },
                  {
                    cwd: 'assets/styles/',
                    src: [
                        'index.min.css',
                    ],
                    dest: 'dist/assets/styles/'
                  },
                  {
                    cwd: 'test/',
                    src: [
                        'index.html',
                    ],
                    dest: 'dist/'
                  },
                  {
                    cwd: 'assets/styles/',
                    src: [
                        'normalize.css',
                    ],
                    dest: 'dist/assets/styles/'
                  },
                  {
                    cwd: './',
                    src: [
                        '*.csv',
                    ],
                    dest: 'dist/'
                  },
                ],
                verbose: true
            }
        },
        //- Notify when task is complete
        notify: {
            app_change: {
                options: {
                    title: 'Javascript',
                    message: 'Concatenatated and minifed successfully',
                }
            },
            css_complete: {
                options: {
                    title: 'SASS -> CSS',
                    message: 'Compiled, prefixed, and moved successfully',
                }
            }
        },
        //- Watchers
        watch: {
            options: {
              livereload: true,
            },
            // grunt: {
            //   files: ['gruntfile.js'],
            //   tasks: ['']
            // },
            css: {
              files: ['assets/styles/*.scss'],
              tasks: ['sass', 'autoprefixer', 'cssmin']
            },
            scripts: {
              files: ['assets/scripts/*.js'],
              tasks: ['concat', 'minified']
            },
        },
    });
    //- REGISTER ALL OUR GRUNT TASKS
    grunt.task.run('notify_hooks');
    grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin', 'concat', 'minified', 'htmlmin', 'sync', 'image:dynamic']);
    grunt.registerTask('app_change', ['concat:app', 'uglify:app', 'uglify:main']);
    grunt.registerTask('concat_change', ['uglify:app']);
    grunt.registerTask('css_prefixed', ['autoprefixer']);
    grunt.registerTask('css_min', ['cssmin']);
    grunt.registerTask('sync_files', ['sync']);
    grunt.registerTask('imageoptimize', ['imageoptim']);
};
