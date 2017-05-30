module.exports = function(grunt) {

	/** VARS **/
	
	var globalConfig = {
		src : 'src/main/webapp-src',
		dest : 'src/main/webapp'
	};

	/** PROJECT CONFIGURATION **/
	grunt.initConfig({
		
		globalConfig: globalConfig,
		
		pkg: grunt.file.readJSON('package.json'),
		
		concat : {
			js : {
				src : [ 
					'<%= globalConfig.src %>/scripts/*.js'
				],
				dest : '<%= globalConfig.dest %>/scripts/scripts.js',
			},
			css : {
				src : [ '<%= globalConfig.src %>/styles/*.css', ],
				dest : '<%= globalConfig.dest %>/styles/styles.css',
			},
			fonts : {
				src : [ '<%= globalConfig.src %>/fonts/**/stylesheet.css', ],
				dest : '<%= globalConfig.dest %>/styles/fonts.css',
			}
		},
		
		cssmin : {
			options : {
				shorthandCompacting : false,
				roundingPrecision : -1
			},
			target : {
				files : [{
					expand : true,
					cwd : '<%= globalConfig.dest %>/styles',
					src : [ '*.css', '!*.min.css' ],
					dest : '<%= globalConfig.dest %>/styles',
					ext : '.min.css'
				}]
			}
		},
		
		uglify : {
			options : {
				banner : '/*! <%= pkg.name %> - v<%= pkg.version %> - */'
			},
			target : {
				files : {
					'<%= globalConfig.dest %>/scripts/scripts.min.js' : [ '<%= globalConfig.dest %>/scripts/scripts.js' ]
				}
			}
		},
		
		// SASS task config
		sass : {
			dev : {
				files : {
					// destination // source file
					"<%= globalConfig.src %>/styles/styles.css" : "<%= globalConfig.src %>/styles/*.scss"
				}
			}
		},
		/*
		clean: {
			options: { force: true },
	    	all: ["<%= globalConfig.dest %>/**"]
	    },
	    */
		copy : {
			plugins : {
				files : [
					{expand: true, flatten: true, filter: 'isFile', src: [ 'bower_components/**/dist/*min.js' ], dest: '<%= globalConfig.dest %>/scripts/' },
					{expand: true, flatten: true, filter: 'isFile', src: [ 'bower_components/**/dist/*min.css' ], dest : '<%= globalConfig.dest %>/styles/', filter : 'isFile' },
					{expand: true, flatten: true, filter: 'isFile', src: [ 'bower_components/**/compiled/*min.js' ], dest : '<%= globalConfig.dest %>/scripts/', filter : 'isFile' },
					{expand: true, flatten: true, filter: 'isFile', src: [ 'bower_components/**/compiled/*min.css' ], dest: '<%= globalConfig.dest %>/styles/'},
					{expand: true, flatten: true, filter: 'isFile', src: [ 'bower_components/**/dist/js/*min.js' ], dest: '<%= globalConfig.dest %>/scripts/'},
					{expand: true, flatten: true, filter: 'isFile', src: [ 'bower_components/**/dist/css/*min.css' ], dest: '<%= globalConfig.dest %>/styles/'},
					{expand: true, flatten: true, filter: 'isFile', src: [ 'bower_components/datatables/media/js/*min.js' ], dest: '<%= globalConfig.dest %>/scripts/'},
					{expand: true, flatten: true, filter: 'isFile', src: [ 'bower_components/datatables/media/*min.css' ], dest: '<%= globalConfig.dest %>/styles/'},
					{expand: true, flatten: true, filter: 'isFile', src: [ 'bower_components/**/modernizr/*.js' ], dest: '<%= globalConfig.dest %>/scripts/'},
					{expand: true, flatten: true, filter: 'isFile', src: [ 'bower_components/**/source/*min.js' ], dest: '<%= globalConfig.dest %>/scripts/'},
					{expand: true, flatten: true, filter: 'isFile', src: [ 'bower_components/**/source/*all.js' ], dest: '<%= globalConfig.dest %>/scripts/'},
					{expand: true, flatten: true, filter: 'isFile', src: [ 'bower_components/**/source/*.css' ], dest: '<%= globalConfig.dest %>/styles/'},
					{expand: true, flatten: true, filter: 'isFile', src: [ 'bower_components/**/css/*min.css' ], dest: '<%= globalConfig.dest %>/styles/'},
					{expand: true, flatten: true, filter: 'isFile', src: [ 'bower_components/**/build/js/*min.js' ], dest: '<%= globalConfig.dest %>/scripts/'},
					{expand: true, flatten: true, filter: 'isFile', src: [ 'bower_components/**/build/css/*min.css' ], dest: '<%= globalConfig.dest %>/styles/'},
					{expand: true, flatten: true, filter: 'isFile', src: [ 'bower_components/**/min/*min.js' ], dest: '<%= globalConfig.dest %>/scripts/'},
					{expand: true, flatten: true, filter: 'isFile', src: [ 'bower_components/**/minified/*min.js' ], dest: '<%= globalConfig.dest %>/scripts/'},
					{expand: true, flatten: true, filter: 'isFile', src: [ 'bower_components/**/themes/base/jquery-ui.css' ], dest: '<%= globalConfig.dest %>/styles/'},
					{expand: true, flatten: true, filter: 'isFile', src: [ 'bower_components/jquery-touchswipe/*min.js' ], dest: '<%= globalConfig.dest %>/scripts/'}, 
					{expand: true, flatten: true, filter: 'isFile', src: [ 'bower_components/blueimp-file-upload/js/*.js' ], dest: '<%= globalConfig.dest %>/scripts/'}, 
					{expand: true, flatten: true, filter: 'isFile', src: [ 'bower_components/blueimp-file-upload/css/*.css' ], dest: '<%= globalConfig.dest %>/styles/'},
                    {expand: true, flatten: true, filter: 'isFile', src: [ 'bower_components/select2/select2.min.js' ], dest: '<%= globalConfig.dest %>/scripts/'},
                    {expand: true, flatten: true, filter: 'isFile', src: [ 'bower_components/select2/*.css' ], dest: '<%= globalConfig.dest %>/styles/'},
                    {expand: true, flatten: true, filter: 'isFile', src: [ 'bower_components/datatables.net-buttons/js/*.min.js'], dest: '<%= globalConfig.dest %>/scripts/'},
                    {expand: true, flatten: true, filter: 'isFile', src: [ 'bower_components/datatables.net-responsive/js/*.min.js' ], dest: '<%= globalConfig.dest %>/scripts/'},
                    {expand: true, flatten: true, filter: 'isFile', src: [ 'bower_components/x-editable/dist/bootstrap3-editable/js/*.min.js' ], dest: '<%= globalConfig.dest %>/scripts/'},
                    {expand: true, flatten: true, filter: 'isFile', src: [ 'bower_components/x-editable/dist/bootstrap3-editable/css/*.css' ], dest: '<%= globalConfig.dest %>/styles/'},
					{expand: true, flatten: true, filter: 'isFile', src: [ 'bower_components/moment/min/*.min.js' ], dest: '<%= globalConfig.dest %>/scripts/'},

				]
			},
			
			main : {
				files : [
					{expand: true, flatten: true, filter: 'isFile', src: [ 'bower_components/**/fonts/**/*.eot' ], dest: '<%= globalConfig.dest %>/fonts/'},
					{expand: true, flatten: true, filter: 'isFile', src: [ 'bower_components/**/fonts/**/*.svg' ], dest: '<%= globalConfig.dest %>/fonts/'},
					{expand: true, flatten: true, filter: 'isFile', src: [ 'bower_components/**/fonts/**/*.ttf' ], dest: '<%= globalConfig.dest %>/fonts/'},
					{expand: true, flatten: true, filter: 'isFile', src: [ 'bower_components/**/fonts/**/*.woff' ], dest: '<%= globalConfig.dest %>/fonts/'},
					{expand: true, flatten: true, filter: 'isFile', src: [ 'bower_components/**/fonts/**/*.woff2' ], dest: '<%= globalConfig.dest %>/fonts/'},
					{expand: true, flatten: true, filter: 'isFile', src: [ 'bower_components/**/fonts/**/*.otf' ], dest: '<%= globalConfig.dest %>/fonts/'},
					{expand: true, flatten: true, filter: 'isFile', src: [ '<%= globalConfig.src %>/fonts/**/*.eot' ], dest: '<%= globalConfig.dest %>/fonts/'},
					{expand: true, flatten: true, filter: 'isFile', src: [ '<%= globalConfig.src %>/fonts/**/*.svg' ], dest: '<%= globalConfig.dest %>/fonts/'},
					{expand: true, flatten: true, filter: 'isFile', src: [ '<%= globalConfig.src %>/fonts/**/*.ttf' ], dest: '<%= globalConfig.dest %>/fonts/'},
					{expand: true, flatten: true, filter: 'isFile', src: [ '<%= globalConfig.src %>/fonts/**/*.woff' ], dest: '<%= globalConfig.dest %>/fonts/'},
					{expand: true, flatten: true, filter: 'isFile', src: [ '<%= globalConfig.src %>/fonts/**/*.woff2' ], dest: '<%= globalConfig.dest %>/fonts/'},
					{expand: true, flatten: true, filter: 'isFile', src: [ '<%= globalConfig.src %>/fonts/**/*.otf' ], dest: '<%= globalConfig.dest %>/fonts/'},
					{expand: true, flatten: true, filter: 'isFile', src: [ '<%= globalConfig.src %>/plugins/*.js' ], dest: '<%= globalConfig.dest %>/scripts/',},
			        {expand: true, flatten: true, filter: 'isFile', src: [ '<%= globalConfig.src %>/plugins/*.css' ], dest: '<%= globalConfig.dest %>/scripts/',},
					{expand: true, cwd: '<%= globalConfig.src %>/images',src: '**', dest: '<%= globalConfig.dest %>/images/'}, 
				],
			},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Default task(s).
	// 	grunt.registerTask('default', [ 'copy', 'sass', 'concat', 'cssmin', 'uglify']);
	grunt.registerTask('default', [ 'copy', 'sass', 'concat', 'cssmin', 'uglify']);

};
