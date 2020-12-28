
function msg(){
    alert("Not an Existing User");
}

//REAL TIME DATE
var date=new Date();  
var day=date.getDate();  
var month=date.getMonth()+1;  
var year=date.getFullYear();  
document.write("<br>Date is: "+day+"/"+month+"/"+year); 

//REAL TIME CLOCK
window.onload=function(){getTime();}  
function getTime(){  
var today=new Date();  
var h=today.getHours();  
var m=today.getMinutes();  
var s=today.getSeconds();  
// add a zero in front of numbers<10  
m=checkTime(m);  
s=checkTime(s);  
document.getElementById('txt').innerHTML=h+":"+m+":"+s;  
setTimeout(function(){getTime()},1000);  
}  
//setInterval("getTime()",1000);//another way  
function checkTime(i){  
if (i<10){  
  i="0" + i;  
 }  
return i;  
}  

$(".txtb input").on("focus",function () {
    $(this).addClass("focus");
});
$(".txtb input").on("blur",function () {
if($(this).val() == "")
$(this).removeClass("focus");
}); 