"use strict";

/**
 * 
 * @param {Object} elem 
 * 
 * @example:
 *    isInViewport(document.querySelect(".test")) => true||false
 */
var isInViewport = function isInViewport(elem) {
  var bounding = elem.getBoundingClientRect();
  var doc = document.documentElement;
  return bounding.top >= 0 && bounding.left >= 0 && bounding.bottom <= (window.innerHeight || doc.clientHeight) && bounding.right <= (window.innerWidth || doc.clientWidth);
};