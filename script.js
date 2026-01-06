function run() {
  const steps = document.querySelectorAll(".step");
  steps.forEach((s, i) => {
    setTimeout(() => {
      s.style.background = "#22c55e";
    }, i * 1000);
  });
}
