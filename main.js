let count = 0;
let counter = document.getElementById('counter');
let incrementBtn = document.getElementById('incrementBtn');

incrementBtn.addEventListener('click', function(){
  count++;
  counter.textContent = count;
});