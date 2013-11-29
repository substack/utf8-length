# utf8-length

return the number of bytes in a unicode string

[![build status](https://secure.travis-ci.org/substack/utf8-length.png)](http://travis-ci.org/substack/utf8-length)

# example

``` js
var length = require('utf8-length');
console.log(length('¡dooq dǝǝq'));
```

result:

```
$ node example/beep.js
13
```

# methods

``` js
var length = require('utf8-length')
```

## length(string)

Return the number of bytes needed to store `string` in UTF-8 encoding.

# install

With [npm](https://npmjs.org) do:

```
npm install utf8-length
```

# license

MIT
