module.exports = function (grunt) {

  // var browsers = grunt.option('browsers');

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['jshint', 'karma']);

  grunt.registerTask('testwatch', ['karma:watch', 'watch']);

  var testConfig = function(configFile, customOptions) {
    var options = {
      configFile: configFile
      // browsers: browsers
      // keepalive: true
    };
    var travisOptions = process.env.TRAVIS && { browsers: ['Firefox'], reporters: 'dots' };
    var opts = grunt.util._.extend(options, customOptions, travisOptions);
    return opts;
  };

  // Project configuration.
  grunt.initConfig({
    karma: {
      unit: {
        options: testConfig('test/test.conf.js')
      },
      watch: {
        options: testConfig('test/test.conf.js', { autoWatch: false, singleRun: false, reporters: ['progress'] }),
        background: true
      }
    },
    jshint:{
      files:['src/**/*.js', 'test/**/*.js', 'demo/**/*.js'],
      options:{
        curly:true,
        eqeqeq:true,
        immed:true,
        latedef:true,
        newcap:true,
        noarg:true,
        sub:true,
        boss:true,
        eqnull:true,
        globals:{}
      }
    },
    watch: {
      // Run jshint and karma unit tests when js files change
      karma: {
        files: ['src/**/*.js', 'test/**/*.spec.js'],
        tasks: ['jshint', 'karma:watch:run']
      }
    },
  });

};