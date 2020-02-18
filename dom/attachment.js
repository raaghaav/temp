const liArr = document.getElementsByTagName("li");
const option1 = liArr[0];
const option2 = liArr[1];
const option3 =liArr[2];

option1.addEventListener("click",function(){
    option1.style.backgroundColor= "red";
});
option2.addEventListener("click",function(){
    option2.innerHTML = "<h1>options 2 was clicked </h1>"
    
});
option3.addEventListener("click",function(){
    alert("removed");
    option3.remove();
});
const head=document.querySelector("head");


