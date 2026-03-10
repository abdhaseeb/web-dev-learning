const clock = document.querySelector('#clock');
setInterval(() => {
  const date = new Date();
  const currentTime = date.toLocaleTimeString('en-IN');
  clock.textContent = currentTime;
}, 1000);