const marble = document.querySelector(".marble");

app(marble);
function app (target) {
  let header = renderHeader();
  let logo = renderLogo("images/logo.svg");
  let container = renderContainer();

  target.innerHTML = header;
  header.innerHTML = container;
}


function renderHeader () {
  return `<header  class="header"></header>`;
};

function renderLogo (src) {
  return `<a hreh="index.html" class="logo-link"><img class="logo-img" src="${src}"></a>`;
};

function renderContainer () {
  return  `<div class="container"></div>`
}
