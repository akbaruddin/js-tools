"use strict";

/**
 * 
 * @param {URL} param
 * @param {File name} param
 * 
 * @description
 *   https://ourcodeworld.com/articles/read/189/how-to-create-a-file-and-generate-a-download-with-javascript-in-the-browser-without-a-server
 *   https://js-tricks.io/blog/how-to-force-browser-to-download-a-file-in-pure-javascript-using-the-download-attribute
 */
var image_download = function image_download(_ref) {
  var url = _ref.url,
      file = _ref.file;
  var link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', file);
  link.setAttribute('target', '_blank');
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};