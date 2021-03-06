/* eslint-disable no-console*/
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production';

console.log("Generating minified bundle for Production via WebPack. This will take few minutes...".blue);

webpack(webpackConfig).run((err,stats)=>{

	if(err){
		console.log(err.bold.red);
		return -1;
	}

	const jsonStats = stats.toJson();

	if(jsonStats.hasError){
		return jsonStats.error.map(error => console.log(error.red));
	}

	if(jsonStats.hasWarnings){
		console.log("WebPack generated the following warnings: ".bold.yellow);
		jsonStats.warnings.map(warning => console.log(warning.yellow));
	}

	console.log(`Webpack stats: ${stats}`);

	//If we got this far, the build succeeded
	console.log(`Your App has been compiled in production mode and written to /dist. It\'s ready to roll!`.green);
	return 0;


});