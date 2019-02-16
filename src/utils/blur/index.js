function blurAdd() {
  const root = document.getElementById('___gatsby');
  root && root.classList && root.classList.add && root.classList.add('blur');
  return true;
}

function blurRemove() {
  const root = document.getElementById('___gatsby');
  root && root.classList && root.classList.remove && root.classList.remove('blur');
  return true;
}

module.exports = {
  blurAdd,
  blurRemove,
};
