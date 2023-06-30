{AOS.init()}


function openForm() {
  document.getElementById("form").style.display = "block";
  document.getElementById("btn").style.display = "none";
  document.getElementById("img").style.display = "none";
  document.getElementById("im").style.display = "none";
}

function cancel() {
document.getElementById("form").style.display = "none";
document.getElementById("btn").style.display = "block";
document.getElementById("img").style.display = "block";
  document.getElementById("im").style.display = "block";
}



function send() {
document.getElementById("form").style.display = "none";
document.getElementById("btn").style.display = "block";
document.getElementById("img").style.display = "block";
document.getElementById("im").style.display = "block";
  $.ajax({
      url:'https://script.google.com/macros/s/AKfycbz9NDWcBZGV-hpN4EWVgLe3HC8XW0InNV4MdruRdVDTfc8282hv5kIudW2p_7pu9FAk7A/exec',
      method:'post',

      data:$('#myForm').serialize(),
      success:(res)=>{
      document.location.reload();
       
        document.getElementById("myForm").reset();
      },
      error:(err)=>{alert('somthing error')}
    })

}
