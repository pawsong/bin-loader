function str2buf(content) {
  const array = new Array();
  for (let i = 0; i < content.length; i++) array[i] = content[i];
  return array;
}

/** @see {@link TextDecoder.decode}: inspiration for compression. */
function decodePointToHex(x) { return x.toString(16).padStart(2, '0'); }

/** @see {@link TextEncoder.encode}: inspiration for decompression. */
const encodeHexToPoint = 'function encodeHexToPoint(_, i) { return parseInt(this.charAt(2 * i) + this.charAt(2 * i + 1), 16); }'

  function modulize(array) {
  const hexCharStream = array.map(decodePointToHex).join('');
  return [
  'const hexCharStream = "'+ hexCharStream + '";',
  encodeHexToPoint,
  'const buffer = new Array(hexCharStream.length / 2).fill().map(encodeHexToPoint, hexCharStream);',
  'module.exports = new Uint8Array(buffer);'
  ].join('\n');
}

module.exports = function(content) {
  this.cacheable && this.cacheable();
  return modulize(str2buf(content));
};

module.exports.raw = true;
