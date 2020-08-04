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

const zappo = function(selector) {
  var el;

  var obj = {
    getEl(selector) {
      if (el) return el;
      return document.querySelector(selector);
    },
    addClass(className) {
      el.classList.add(className);
      return this;
    },
    removeClass(className) {
      el.classList.remove(className);
      return this;
    }
  };

  el = obj.getEl(selector);
  return obj;
};

