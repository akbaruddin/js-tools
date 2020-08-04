"use strict";

/**
 * 
 * @param {Object} selector
 * 
 * @example
 *    var el = zappo("#main")
 *      .addClass("red")
 *      .addClass("green")
 *      .removeClass("red")
 *      .getEl();
 */
var zappo = function zappo(selector) {
  var el;
  var obj = {
    getEl: function getEl(selector) {
      if (el) return el;
      return document.querySelector(selector);
    },
    addClass: function addClass(className) {
      el.classList.add(className);
      return this;
    },
    removeClass: function removeClass(className) {
      el.classList.remove(className);
      return this;
    }
  };
  el = obj.getEl(selector);
  return obj;
};