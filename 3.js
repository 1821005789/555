
function validateemail(){  
var x=document.myform.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
  return false;  
  } 
var name=document.myform.name.value;  
var course=document.myform.course.value;  
var passwordlength=document.myform.password.value.length;  
var status=false;  
if(name==""){  
document.getElementById("namelocation").innerHTML=  
"  Please enter your name";  
status=false;
}else{  
document.getElementById("namelocation").innerHTML=" ";  
status=true;
}  //Shelby shiyutao

if(course==""){  
document.getElementById("courselocation").innerHTML=  
"  Please enter the course you want to study";  
status=false;
}else{  
document.getElementById("courselocation").innerHTML="";  
status=true;
} 

if(passwordlength<6){  
document.getElementById("passwordlocation").innerHTML=  
"  Password must be greater than 6";  
status=false; 
}else{  
document.getElementById("passwordlocation").innerHTML=" ";  
}  


  
return status;  
}  


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  }