var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('private route hit!');
		next();
	}, 
	logger: function (req, res, next) {
		var date = new Date();
		console.log(req.method, date.toString(), req.originalUrl);
		next();
	}
};

module.exports = middleware;