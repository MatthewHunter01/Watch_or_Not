function myFunction() {
    var elName = document.getElementById('name').value;
    alert (elName + ' :Thank you for your submision!');
  }

  var elSubmit = document.getElementById('submit');
  elSubmit.onclick = myFunction;