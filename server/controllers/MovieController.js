// takes a mongoose model and converts it into REST api
var restful = require ('node-restful');

module.exports = function (app, route) {
	// setup controller for REST
	var rest = restful.model (
		'movie',
		app.models.movie
	).methods(['get', 'put', 'post', 'delete']);

	rest.register(app, route);

	// return middleware
	return function (req, rest, next) {
		next();
	};
}