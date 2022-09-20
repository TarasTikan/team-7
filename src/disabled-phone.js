function validatePhone(phone){
 var regex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
 return regex.test(phone);
}
 
let inp = document.querySelector('.phone-input-val');
let btn = document.querySelector('.submit-button-val');
btn.setAttribute('disabled', true);
 
inp.oninput = function(){
  let phone = document.querySelector('.phone-input-val').value;
  if (!validatePhone(phone)){
    btn.setAttribute('disabled', true);
  }else{
    btn.removeAttribute('disabled');
  }
}


