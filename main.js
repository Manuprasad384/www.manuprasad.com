{$(window).on('load',function(){
      
    $("#loader").remove();
  
      })}


     { window.onscroll= function(){top()}
    function top(){
       if(document.documentElement.scrollTop > 450){$("#top").addClass("top").fadeIn()}
       else{$("#top").fadeOut()} 
    }
}

{AOS.init()}