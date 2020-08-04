// Help:
// https://addyosmani.com/blog/lazy-loading/
// https://css-tricks.com/native-lazy-loading/
// https://codepen.io/FilipVitas/pen/KrJYmY
// https://www.robinosborne.co.uk/2016/05/16/lazy-loading-images-dont-rely-on-javascript/



function observerLazy (img) {
  var interactSettings = {
    root: document.querySelector('body'),
    rootMargin: '0px 0px 200px 0px'
  }
  
  function onIntersection(imageEntites) {
    imageEntites.forEach(function(image) {
      if (image.isIntersecting) {
        observer.unobserve(image.target)
        image.target.src = image.target.dataset.src
        image.target.onload = function() { return image.target.classList.add('loaded') }
      }
    })
  }
  
  var observer = new IntersectionObserver(onIntersection, interactSettings);

  return observer.observe(img);
}

if ('loading' in HTMLImageElement.prototype) {
  // load with native lazy
  var img = document.getElementsByClassName("banner-whatsapp-image")
  img[0].src = img[0].dataset.src;
} else{ 
  if (!'IntersectionObserver' in window &&
    !'IntersectionObserverEntry' in window &&
    !'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
    // load simple
    var lazy = document.getElementsByClassName('lazy');

    for(var i=0; i<lazy.length; i++){
       lazy[i].src = lazy[i].getAttribute('data-src');
    }
  } else {
    // load with IntersectionObserver
    let images = Array.prototype.slice.call(document.querySelectorAll('.lazy-image'))
    images.forEach(function(image) {
      observerLazy(image)
    })
  }
}