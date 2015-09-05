module.exports = function(grunt) {

    // 配置Grunt各种模块的参数
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Metadata.
        meta: {
            basePath: '../',
            srcPath: '../assets/sass/',
            deployPath: '../assets/css/'
        },

        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> ',

        // Task configuration.
        sass: {
            dist: {
                files: {
                    '<%= meta.deployPath %>style.css': '<%= meta.srcPath %>style.scss'
                },
                options: {
                    sourcemap: 'true'
                }
            }
        },

        bower: {
            install: {
                options: {
                    targetDir: './public/js/lib',
                    layout: 'byComponent',
                    install: true,
                    verbose: false,
                    cleanTargetDir: false,
                    cleanBowerDir: false,
                    bowerOptions: {}
                }
            }
        },

        jshint: { /* jshint的参数 */
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                boss: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                }
            }
        },
        concat: { /* concat的参数 */ },
        uglify: { /* uglify的参数 */ },
        watch: { /* watch的参数 */
            scripts: {
                files: [
                    '<%= meta.srcPath %>/**/*.scss'
                ],
                tasks: ['sass']
            }
        }
    });

    // 从node_modules目录加载模块文件
    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-contrib-*'],
        config: '../package.json',
        scope: 'devDependencies'
    });

    // 每行registerTask定义一个任务
    grunt.registerTask('default', ['sass', 'jshint', 'concat', 'uglify']);
    grunt.registerTask('check', ['jshint']);

};
