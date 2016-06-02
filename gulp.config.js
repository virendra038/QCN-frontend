module.exports ={
	appPath :'./src/app/',

		alljs:[
			'./src/app/components/**/*.js',
			'./src/app/shared/**/*.js',
			'./src/app/**/*.js',
			'./src/assets/js/*.js'
		],
		index: './index.html',
	
		getWiredepDefaultOptions: function(){
		var options = {
			bowerJson: require('./bower.json'),
			directory:'./bower_components',
			cwd:'./src',
			relative:true
		};	
		return options;
	}

	
};