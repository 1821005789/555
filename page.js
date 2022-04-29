function calc(func){
    var result = document.getElementById('result');
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    

    if(isNaN(num1) || isNaN(num2)){
        alert('Please enter the number');
        
        return false;
    }
    
    result.value = func(num1,num2);
}
function add(num1,num2){
    return num1+num2;
}

const button = document.querySelector('button');
        
button.onclick = function() {
  let name = prompt('What is your name?');
  alert('Welocme ' + name + '!');}


 