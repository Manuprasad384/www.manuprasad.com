{AOS.init()}

var b=0;






function openForm() {

if(b==1){
document.getElementById("btm1").style.animation="menu4 0.2s 1 ";
document.getElementById("btm2").style.animation="menu5 0.2s 1";
document.getElementById("btm3").style.animation="menu6 0.2s 1";


document.getElementById("form-popup").style.display = "block";
document.getElementById("form-popup").style.animation="popup 1s 1";
  a=0;
  
  
  setTimeout(function(){
      document.getElementById("btn2").style.display="block";
      document.getElementById("imgs").src="Sbtn.png";
  },1000)
  
  
setTimeout(function(){
document.getElementById("btm1").style.display="none";
document.getElementById("btm2").style.display="none";
document.getElementById("btm3").style.display="none";

document.getElementById("mnb").src="Menu.png";

},200);}else{

  document.getElementById("form-popup").style.display = "block";
  document.getElementById("form-popup").style.animation="popup 1s 1"
  
  setTimeout(function(){
      document.getElementById("btn2").style.display="block";
      document.getElementById("imgs").src="Sbtn.png";
  },1000)
  
  ;}
}







function cancel() {


  
  
  document.getElementById("imgs").src="Sbtn2.png";
  document.getElementById("form-popup").style.animation="popdown 1s 1";
  document.getElementById("btn2").style.display="none";
  setTimeout(function(){
 document.getElementById("form-container").reset();
document.getElementById("form-popup").style.display = "none";


},1000);


}








function send() {

    /*  
      $.ajax({
      url:'https://script.google.com/macros/s/AKfycbz9NDWcBZGV-hpN4EWVgLe3HC8XW0InNV4MdruRdVDTfc8282hv5kIudW2p_7pu9FAk7A/exec',
      method:'post',

      data:$('#form-container').serialize(),
      success:(res)=>{
      setTimeout(function(){
      document.location.reload();
       },1000);
        document.getElementById("form-container").reset();
      },
      error:(err)=>{alert('somthing error');}
    });*/
    
    
    
   setTimeout(function(){
    document.location.reload();
    },4000);
    
    
    
    
    setTimeout(function(){
    
    document.getElementById("form-popup").style.animation="popdown 1s 1";
    
    
    
  setTimeout(function(){
  document.getElementById("imgs").src="Sbtn.png";
document.getElementById("form-popup").style.display = "none";},1000);

 
    
    },2000);
    
    
    
   document.getElementById("imgs").src="Sbtn2.png";
  
     document.getElementById("flight").style.display="block";
     document.getElementById("btn2").style.display="none";
     
document.getElementById("flight").style.animation="flight 2s 1 0.500s ";
   
   
   
   
   setTimeout(function(){
  document.getElementById("flight").style.animation="flight2 2s 1 ";
  
   },2500);
   
   
setTimeout(function(){
      document.getElementById("flight").style.display="none";
      
      document.getElementById("btn2").style.display="block";
      document.getElementById("img4").style.animation=
      "shake 0.500s 1";
      
    },3000);
  
    
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
menu();
    document.getElementById("df").style.display="block";
}


function bio(){

    
}



function home(){

  alert("NOT SET") ; 
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



function showCoordinates(event) {
  var x = event.touches[0].clientX;
  var y = event.touches[0].clientY;
  
  
  if(y < 725 && y > 240){
  document.getElementById("df").style.marginTop = y-250 +"px"
}
if(x < 380 && x > 210){
document.getElementById("df").style.marginLeft=x-250+"px"
}


}




function closeframe(){
    document.getElementById("df").style.display="none";
}