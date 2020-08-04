/**
 * Converts a string to its html characters completely.
 *
 * @param {String} str String with unescaped HTML characters
 **/
const encode = (str) => {
  var buf = [];

  for (var i=str.length-1;i>=0;i--) {
    buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
  }

  return buf.join('');
}