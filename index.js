'use strict';

var parse = require('js-yaml/lib/js-yaml/loader').load

  , stringify = JSON.stringify;

exports.extension = 'yaml';
exports.noDependencies = true;
exports.compile = function (src) {
	return { code: 'module.exports = ' + stringify(parse(src)) + ';' };
};
