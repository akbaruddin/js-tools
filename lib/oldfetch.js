"use strict";

var oldFetch = function oldFetch(url, callback) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
  var XMLHTTP = 'XMLHTTP';
  var xhr = null;

  if (!(window.XMLHttpRequest || window.ActiveXObject)) {
    console.log("URL fetch Error");
  } else if (window.ActiveXObject) {
    try {
      xhr = new ActiveXObject("Msxml2.".concat(XMLHTTP));
    } catch (c) {
      xhr = new ActiveXObject("Microsoft.".concat(XMLHTTP));
    }
  } else {
    xhr = new XMLHttpRequest();
  }

  xhr.open(type, url);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr.responseText, xhr);
    }
  };

  xhr.onerror = function () {
    callback(xhr.statusText, xhr);
  };

  xhr.send(null);
};