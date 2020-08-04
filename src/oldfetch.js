const oldFetch = (url, callback, type = 'GET') => {
  const XMLHTTP = 'XMLHTTP';
  let xhr = null;
  if (!(window.XMLHttpRequest || window.ActiveXObject)) {
    console.log("URL fetch Error");
  } else if (window.ActiveXObject) {
    try {
      xhr = new ActiveXObject(`Msxml2.${XMLHTTP}`)
    } catch (c) {
      xhr = new ActiveXObject(`Microsoft.${XMLHTTP}`)
    }
  } else {
    xhr = new XMLHttpRequest();
  }

  xhr.open(type, url);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr.responseText, xhr);
    }
  }
  xhr.onerror = () => {
    callback(xhr.statusText, xhr);
  }
  xhr.send(null);
}