function myFunction() {
  var errorStatus = true;
  var x = document.forms['form']['name'].value;
  if (x == '') {
    alert('Name must be filled out');
    errorStatus = false;
    return errorStatus;
  }

  var y = document.forms['form']['password'].value;
  if (y.length <= 6) {
    alert('Password cannot be less than 6 characters');
    errorStatus = false;
    // document.getElementById('password').focus();
    return errorStatus;
  }

  var z = document.forms['form']['email'].value;
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value)) {
    return true;
  }
  alert('You have entered Invalid E-mail address');
  errorStatus = false;

  return errorStatus;
}
$('#txtfuturedateyear').datepicker({
  maxDate: '+5y'
});
