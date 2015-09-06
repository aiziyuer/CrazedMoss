module.exports = function(grunt) {

    // 从node_modules目录加载模块文件
    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-contrib-*'],
        config: 'package.json',
        scope: 'devDependencies'
    });

    // 配置Grunt各种模块的参数
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> ',

        compass: {
            prod: {
                style: 'compressed',
                options: {
                    config: 'config.rb',
                    environment: 'production',
                }
            },
            dev: {
                sourceMap: true,
                forcecompile: true,
                style: 'nested',
                options: {
                    config: 'config.rb',
                }
            }
        },

        /* watch的参数 */
        watch: {
            compass: {
                files: ['src/sass/*.scss'],
                tasks: ['compass:dev']
            },
            options: {
                spawn: false,
            }
        }
    });

    grunt.registerTask('dev', function(target) {
        //TODO 清理
        //TODO 全量编译
        //TODO 启动watch
        ''
    });
};
