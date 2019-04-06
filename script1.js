function myFunction() {
  var table, tr, td, filter, button, i;
  input = document.getElementById("myInput");
  table = document.getElementById("myTable");
  filter = input.value.toUpperCase();
  tr = document.getElementById("myTR");
  button = tr.document.getElementByTagName("button");

  for (i = 0; i < button.length; i++) {
    button = td[i].getElementByTagName(button)[0];
    if (button.innerHTML.toUpperCase().indexOf(filter) > -1) {
      button[i].style.display = "green";
    } else {
      button[(i.style.display = "red")];
    }
  }
}
