module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    })

    grunt.registerTask('olaTiago', function() {
        const done = this.async();
        setTimeout(function() {
            console.log('Olá Tiago');
        }, 3000);
    })

    grunt.loadNpmTasks('grunt-ontrib-less');

    grunt.registerTask('default', ['olaTiago']);
}