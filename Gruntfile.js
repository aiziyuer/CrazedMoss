'use strict';

module.exports = function(grunt) {

    // 从node_modules目录加载模块文件
    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-contrib-*'],
        config: 'package.json',
        scope: 'devDependencies'
    });

    // 配置Grunt各种模块的参数
    grunt.initConfig({

        // 读取包信息
        pkg: grunt.file.readJSON('package.json'),

        //清理任务，负责构建前的清零准备工作
        clean: {
            css: {
                src: ["dist/css"]
            }
        },

        //编译Sass文件为标准的css文件, 分为生产和开发环境
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

        //Watch任务，可以跟踪文件目录中文件的变化并启动对应的刷新任务来生成必要的文件
        watch: {
            compass: {
                files: ['src/sass/*.scss'],
                tasks: ['compass:dev']
            }
        }
    });

    //注册对外的任务，项目刚起步，所以只有开发环境
    grunt.registerTask('dev', ['clean', 'compass:dev', 'watch']);
};
