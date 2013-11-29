module.exports = function(s) {
  return ~-encodeURI(s).split(/%..|./).length
}
