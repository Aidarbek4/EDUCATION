const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');


toggle.addEventListener('click', () =>
  document.body.classList.toggle('show-nav')
);

open.addEventListener('click', () =>
  modal.clasList.add('show-modal')
);

close.addEventListener('click', function (){
  modal.classList.remove('show-modal')
});