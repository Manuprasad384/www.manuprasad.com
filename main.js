{AOS.init()}


function openForm() {
  document.getElementById("form-popup").style.display = "block";
  document.getElementById("form-popup").style.animation="popup 1s 1";
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
