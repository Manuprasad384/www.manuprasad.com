{AOS.init()}


function openForm() {
  document.getElementById("form-popup").style.display = "block";
  
}

function cancel() {
document.getElementById("form-popup").style.display = "none";

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
