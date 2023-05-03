var password = document.getElementById("floatingPassword")
  , gentag_kodeord = document.getElementById("gentag_kodeord");

function validatePassword(){
  if(floatingPassword.value != gentag_kodeord.value) {
    gentag_kodeord.setCustomValidity("Passwords Don't Match");
  } else {
    gentag_kodeord.setCustomValidity('');
  }
}

floatingPassword.onchange = validatePassword;
gentag_kodeord.onkeyup = validatePassword;  