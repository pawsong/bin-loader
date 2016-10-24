# bin-loader

[![NPM Version][npm-image]][npm-url]

Byte Array (Uint8Array) loader for webpack

## Installation

```bash
# npm install bytearray-loader
```

## Usage

``` javascript
var fileContent = require("bin!./file.bin");
// => returns file.bin content as Uint8Array
```

## Credits

Francisco Baio Dias (@xicombd) for code from his [buffer-loader](https://github.com/xicombd/buffer-loader)

## License

MIT

[npm-image]: https://img.shields.io/npm/v/bin-loader.svg
[npm-url]: https://npmjs.org/package/bin-loader
