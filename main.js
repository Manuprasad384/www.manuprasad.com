{AOS.init()}


function openForm() {
  document.getElementById("form-popup").style.display = "block";
  document.getElementById("btn1").style.display = "none";
  document.getElementById("img3").style.display = "none";
  document.getElementById("img5").style.display = "none";
}

function cancel() {
document.getElementById("form-popup").style.display = "none";
document.getElementById("btn1").style.display = "block";
document.getElementById("img3").style.display = "block";
document.getElementById("img5").style.display = "block";
}



function send() {
document.getElementById("form-popup").style.display = "none";
document.getElementById("btn1").style.display = "block";
document.getElementById("img3").style.display = "block";
document.getElementById("img5").style.display = "block";
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
