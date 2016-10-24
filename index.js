module.exports = function(content) {
  this.cacheable && this.cacheable();
  this.value = content;

  var array = new Array();
  for (var i = 0; i != content.length; ++i) {
    array[i] = content[i];
  }

  return 'module.exports = new Uint8Array(' + JSON.stringify(array) + ')';
};

module.exports.raw = true;
