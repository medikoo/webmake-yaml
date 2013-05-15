# webmake-yaml

## Require YAML files with [Webmake](https://github.com/medikoo/modules-webmake)

To use this extension, install it aside of Webmake:

    $ npm install webmake-yaml

If you use global installation of Webmake, then extension also needs to be installed globally:

    $ npm install -g webmake-yaml

When running Webmake, ask webmake to use it:

    $ webmake --ext=yaml program.js bundle.js

Same way when Webmake is used programmatically:

```javascript
webmake(inputPath, { ext: 'yaml' }, cb);
```

_webmake-yaml_ can be used with any other Webmake extension, e.g.:

    $ webmake --ext=yaml --ext=otherext program.js bundle.js

Programmatically:

```javascript
webmake(inputPath, { ext: ['yaml', 'otherext'] }, cb);
```

## Contributors

__Big thanks to [@puzrin](https://github.com/Phoscur) (Vitaly Puzrin) for making a donation to Webmake project and making this extension possible__.  
Vitaly is a member of [Nodeca](https://github.com/nodeca) team, that is behind [js-yaml](https://github.com/nodeca/js-yaml) JavaScript YAML parser and dumper, and powerful social platform [Nodeca](http://dev.nodeca.com/).

## Tests [![Build Status](https://api.travis-ci.org/medikoo/webmake-yaml.png?branch=master)](https://travis-ci.org/medikoo/webmake-yaml)

    $ npm test
