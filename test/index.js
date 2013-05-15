'use strict';

var webmake = require('webmake')

  , runInNewContext = require('vm').runInNewContext
  , path = require('path').resolve(__dirname, '__playground/program.js');

module.exports = function (t, a, d) {
	webmake(path, { ext: 'yaml' }).end(function (result) {
		var program = runInNewContext(result, {});
		a.deep(program.yaml1.map['Block style'],
			{ Clark: 'Evans', Ingy: 'döt Net', Oren: 'Ben-Kiki' }, "First #1");
		a.deep(program.yaml1.map['Flow style'],
			{ Clark: 'Evans', Ingy: 'döt Net', Oren: 'Ben-Kiki' }, "First #2");
		a.deep(program.yaml2.set['baseball players'],
			{ 'Mark McGwire': null, 'Sammy Sosa': null, 'Ken Griffey': null },
			"Second");
		d();
	}, d);
};
