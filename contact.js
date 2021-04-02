function myFunction() {
    var elName = document.getElementById('name').value;
    alert (elName + ', thank you for your submision!');
  }

  var elSubmit = document.getElementById('submit');
  elSubmit.onclick = myFunction;