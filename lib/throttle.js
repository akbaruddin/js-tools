"use strict";

var throttle = function throttle(type, name, obj) {
  var obj = obj || window;
  var running = false;

  var func = function func() {
    if (running) {
      return;
    }

    running = true;
    requestAnimationFrame(function () {
      obj.dispatchEvent(new CustomEvent(name));
      running = false;
    });
  };

  obj.addEventListener(type, func);
};

throttle("scroll", "optimizedScroll");
/**
 * Example:
 *   window.addEventListener("optimizedScroll", () => {
 *     code
 *   })
 */