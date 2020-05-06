function select (button) {
  document.getElementById("Frame").src ="./" + button.id + ".html";
  let buttons = document.getElementsByClassName("buttonnav");
  for (let index = 0; index < buttons.length; index++) {
    const element = buttons[index];
    element.classList.remove("selectedbutton");
  }
  button.classList.add("selectedbutton");
  closeNav();
}

function BurgerList() {
  var x = document.getElementById("burger");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function openNav() {
  document.getElementById("mySidenav").style.left = "0px";
}
function closeNav() {
  document.getElementById("mySidenav").style.left = "-250px";
}
