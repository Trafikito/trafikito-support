function get({url}) {
  return new Promise((resolve) => {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        resolve(xmlhttp.response);
      }
    };
    xmlhttp.open('GET', url, true);
    xmlhttp.send();
  });
}

module.exports = get;
