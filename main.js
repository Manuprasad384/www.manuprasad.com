{AOS.init()}

var b=0;






function openForm() {

if(b==1){
document.getElementById("btm1").style.animation="menu4 0.2s 1 ";
document.getElementById("btm2").style.animation="menu5 0.2s 1";
document.getElementById("btm3").style.animation="menu6 0.2s 1";
document.getElementById("form-popup").style.display = "block";

  document.getElementById("form-popup").style.animation="popup 1s 0.5";
  a=0;
setTimeout(function(){
document.getElementById("btm1").style.display="none";
document.getElementById("btm2").style.display="none";
document.getElementById("btm3").style.display="none";

document.getElementById("mnb").src="Menu.png";

},200);}else{

  document.getElementById("form-popup").style.display = "block";
  document.getElementById("form-popup").style.animation="popup 1s 0.5";}
}







function cancel() {


  
  
  
  document.getElementById("form-popup").style.animation="popdown 1s 1";
  setTimeout(function(){
document.getElementById("form-popup").style.display = "none";},1000);


}








function send() {


  


      
      $.ajax({
      url:'https://script.google.com/macros/s/AKfycbz9NDWcBZGV-hpN4EWVgLe3HC8XW0InNV4MdruRdVDTfc8282hv5kIudW2p_7pu9FAk7A/exec',
      method:'post',

      data:$('#form-container').serialize(),
      success:(res)=>{
      
      document.location.reload();
       
        document.getElementById("form-container").reset();
      },
      error:(err)=>{alert('somthing error');}
    });
    
    
    
    setTimeout(function(){
   document.getElementById("form-popup").style.display = "none";
    document.getElementById("imgs").src="Sbtn.png";
    },2000);
    
   document.getElementById("imgs").src="Sbtn2.png";
  
     document.getElementById("flight").style.display="block";
document.getElementById("flight").style.animation="flight 2s 1 0.500s ";
   
   
   setTimeout(function(){
  document.getElementById("flight").style.animation="flight2 1s 1 ";
  
   },2500);
   
   
setTimeout(function(){
      document.getElementById("flight").style.display="none";
      
      
    },2900);
  
    
}















var a=0;
function menu(){
t1=0;t2=0;t3=0;
if(a == 0){
cancel();
document.getElementById("btm1").style.animation="menu1 0.2s 1";
document.getElementById("btm2").style.animation="menu2 0.2s 1";
document.getElementById("btm3").style.animation="menu3 0.2s 1";
document.getElementById("btm1").style.display="block";
document.getElementById("btm2").style.display="block";
document.getElementById("btm3").style.display="block";
a=1;b=1;
document.getElementById("mnb").src="Tclose.png";

}
else{
    
document.getElementById("btm1").style.animation="menu4 0.2s 1 ";
document.getElementById("btm2").style.animation="menu5 0.2s 1";
document.getElementById("btm3").style.animation="menu6 0.2s 1";

setTimeout(function(){
document.getElementById("btm1").style.display="none";
document.getElementById("btm2").style.display="none";
document.getElementById("btm3").style.display="none";
document.getElementById("mnb").src="Menu.png";

},200);
a=0;
}

   
   
   
   
   
    
}

function project(){
    document.location=
    " https://manuprasad384.github.io/Calculator/";
}


function bio(){
   window.alert("NOT SET YET");
    
}
function home(){
alert("NOT SET YET");
    
}









var t1=0,t2=0,t3=0;
function touch1(event){
var y=event.touches[0].clientX;
   
    if(y > 0){
    document.getElementById("btm1").style.animation="touch1 0.2s 1";
    
    setTimeout(function(){
    document.getElementById("btm1").style.display="none";
    if(t1 > 0 && t2 > 0 && t3 > 0 ){
            document.getElementById("mnb").src="Menu.png";
            t1=0;t2=0;t3=0;a=0;
        }
    
        },150);t1=1;
        
        
   
        }
    
}



function touch2(event){
var y=event.touches[0].clientX;

     if(y > 0){
    document.getElementById("btm2").style.animation="touch2 0.2s 1";
    
    setTimeout(function(){
    document.getElementById("btm2").style.display="none";
    if(t1 > 0 && t2 > 0 && t3 > 0 ){
            document.getElementById("mnb").src="Menu.png";
            t1=0;t2=0;t3=0;a=0;
        }
    
         },150);t2=1;
    
        }
    
}



function touch3(event){
var y=event.touches[0].clientX;

     if(y > 0){
     document.getElementById("btm3").style.animation="touch3 0.2s 1";
    
    setTimeout(function(){
    document.getElementById("btm3").style.display="none";
    if(t1 > 0 && t2 > 0 && t3 > 0 ){
            document.getElementById("mnb").src="Menu.png";
            t1=0;t2=0;t3=0;a=0;
        }
    
         },150);t3=1;
    
        
        }
    
}






function myfunction(){

setTimeout(function(){
    
    document.getElementById("btnmenu").style.display="block";
    
    },2000);
}



