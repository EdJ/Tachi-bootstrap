var settings = require('./settings');
var routes = require('./routes');

var TachiHandler = require('Tachi');

var handler = new TachiHandler(settings, routes);

String.prototype.withSpaces = function () {
	return this.replace(/([A-Z])/g, ' $1')
    		   .replace(/^./, function(str){ return str.toUpperCase(); }).trim();
};

handler.start();