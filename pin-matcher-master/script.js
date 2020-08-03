// key board section
let numbers = document.getElementsByClassName('number');
for (let i = 0; i < numbers.length; i++) {
     numbers[i].addEventListener('click', function () {
       let output = document.getElementById('result').value;
       output = output + this.id;
       document.getElementById('result').value = output;
     });

}
// Pin Generate Section 
document.getElementById("generate-btn").addEventListener('click', function () {
   let resultGen = document.getElementById("result-gen").value;
   let number = Math.random() * 10000;
   let roundNum = Math.round(number);
   document.getElementById("result-gen").value = roundNum;
});