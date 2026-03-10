const form = document.querySelector('form');
const result = document.querySelector('#results');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const height = document.getElementById('height').value / 100;
  const weight = document.getElementById('weight').value;
  
  if (!height || height <= 0) {
    result.textContent = "Please enter a valid height";
    return;
  }

  if (!weight || weight <= 0) {
    result.textContent = "Please enter a valid weight";
    return;
  }

  //console.log(result);
  const BMI = (weight / (height ** 2)).toFixed(2);
  let category = "";

  if (BMI <= 18.6) {
    category = "Under Weight"
    
  } else if (BMI >= 24.9) {
    category = "Overweight";
  } else {
    category = "Normal Weight";
  }

  result.textContent = `BMI: ${BMI} - (${category})`;
});
