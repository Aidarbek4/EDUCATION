const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', checkSenctions);

checkSenctions();

function checkSenctions() {
  const bottomScrollTrigger = window.innerHeight / 2;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if(sectionTop < bottomScrollTrigger) {
      section.classList.add('show');
    } else {
      section.classList.remove('show')
    };
    
  });
}