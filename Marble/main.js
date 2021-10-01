const marble = document.querySelector(".marble");

app(marble);
function app (target) {
  let header = rendrHeader();
  let logo = renderLogo("img/logo.svg");
  let container = renderContainer();

  target.innerHTML = header;
  header.innerHTML = container;
}


function rendrHeader () {
  return `<header  class="header"></header>`;
};
function renderLogo (src) {
  return `<a hreh="index.html" class="logo-link"><img class="logo-img" src="${src}"></a>`;
};
function renderContainer () {
  return  `<div class="container"></div>`
}
