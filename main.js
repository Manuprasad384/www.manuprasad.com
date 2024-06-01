{AOS.init()}


function openForm() {


document.getElementById("btm1").style.animation="menu4 0.2s 1 ";
document.getElementById("btm2").style.animation="menu5 0.2s 1";
document.getElementById("btm3").style.animation="menu6 0.2s 1";

setTimeout(function(){
document.getElementById("btm1").style.display="none";
document.getElementById("btm2").style.display="none";
document.getElementById("btm3").style.display="none";
document.getElementById("btnmenu").style.background="green";
document.getElementById("hb").innerHTML="+";
},200);a=0;

  document.getElementById("form-popup").style.display = "block";
  document.getElementById("form-popup").style.animation="popup 1s 0.5";
}

function cancel() {
document.getElementById("form-popup").style.animation="popdown 1s 1";
setTimeout(function(){
document.getElementById("form-popup").style.display = "none";},1000);


}



function send() {



  document.getElementById("form-popup").style.display = "none";
  
    $.ajax({
      url:'https://script.google.com/macros/s/AKfycbz9NDWcBZGV-hpN4EWVgLe3HC8XW0InNV4MdruRdVDTfc8282hv5kIudW2p_7pu9FAk7A/exec',
      method:'post',

      data:$('#form-container').serialize(),
      success:(res)=>{
      
      document.location.reload();
       
        document.getElementById("form-container").reset();
      },
      error:(err)=>{alert('somthing error')}
    })


}


function myfunction(){

setTimeout(function(){
    

    document.getElementById("btnmenu").style.display="block";
    
    },3000);
}

var a=0;
function menu(){

if(a == 0){
cancel();
document.getElementById("btm1").style.animation="menu1 0.2s 1";
document.getElementById("btm2").style.animation="menu2 0.2s 1";
document.getElementById("btm3").style.animation="menu3 0.2s 1";
document.getElementById("btm1").style.display="block";
document.getElementById("btm2").style.display="block";
document.getElementById("btm3").style.display="block";
a=1;
document.getElementById("btnmenu").style.background="red";
document.getElementById("hb").innerHTML="×";
}
else{
    
document.getElementById("btm1").style.animation="menu4 0.2s 1 ";
document.getElementById("btm2").style.animation="menu5 0.2s 1";
document.getElementById("btm3").style.animation="menu6 0.2s 1";

setTimeout(function(){
document.getElementById("btm1").style.display="none";
document.getElementById("btm2").style.display="none";
document.getElementById("btm3").style.display="none";
document.getElementById("btnmenu").style.background="green";
document.getElementById("hb").innerHTML="+";
},200);
a=0;
}

    
}

function project(){
    document.location=
    " https://manuprasad384.github.io/Calculator/";
}


function bio(){
    alert("NOT SET YET");
    
}
function home(){
alert("NOT SET YET");
    
}
