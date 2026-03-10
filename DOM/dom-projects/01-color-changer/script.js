const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((but) => {
  but.addEventListener('click', (event) => {
    //console.log(event);
    //console.log(event.target);
    colr = event.target.id;
    console.log(colr);
    body.style.background = colr;
  });
});
