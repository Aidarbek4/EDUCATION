const counters = document.querySelectorAll(".features-counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const runCounter = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;

    const increment = target / 500;

    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}`;
      setTimeout(runCounter, 5);
    } else {
      counter.innerText = target;
    }
  };

  runCounter();
});
