module.exports = function(grunt) {

    // 配置Grunt各种模块的参数
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: { /* jshint的参数 */ },
        concat: { /* concat的参数 */ },
        uglify: { /* uglify的参数 */ },
        watch: { /* watch的参数 */ }
    });

    // 从node_modules目录加载模块文件
    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-contrib-*'],
        config: '../package.json',
        scope: 'devDependencies'
    });

    // 每行registerTask定义一个任务
    grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
    grunt.registerTask('check', ['jshint']);

};
