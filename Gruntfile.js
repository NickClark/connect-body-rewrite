module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mocha-cli');
    grunt.loadNpmTasks('grunt-release');

    grunt.initConfig({
        jshint: {
            all: ['index.js', 'Gruntfile.js', 'test/**.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        watch: {
            options: {
                atBegin: true
            },
            all: {
                files: ['index.js', 'test/**.js'],
                tasks: ['test']
            }
        },

        mochacli: {
            spec: {
                options: {
                    files: 'test/**.js',
                    reporter: 'spec',
                    slow: 2000,
                    timeout: 10000,
                }
            }
        }
    });

    grunt.registerTask('default', ['test']);
    grunt.registerTask('build', ['jshint']);
    grunt.registerTask('package', ['build', 'release']);
    grunt.registerTask('test', ['build', 'mochacli']);
};
