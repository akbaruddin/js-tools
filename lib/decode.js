"use strict";

/**
 * Converts an html characterSet into its original character.
 *
 * @param {String} str htmlSet entities
 **/
var decode = function decode(str) {
  return str.replace(/&#(\d+);/g, function (match, dec) {
    return String.fromCharCode(dec);
  });
};