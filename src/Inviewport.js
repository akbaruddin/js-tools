/**
 * 
 * @param {Object} elem 
 * 
 * @example:
 *    isInViewport(document.querySelect(".test")) => true||false
 */

const isInViewport = elem => {
  const bounding = elem.getBoundingClientRect();
  const doc = document.documentElement;
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= (window.innerHeight || doc.clientHeight) &&
    bounding.right <= (window.innerWidth || doc.clientWidth)
  );
};
