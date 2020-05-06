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



document.getElementById("myBtn").click();
function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("show1") == -1) {
    x.className += " show1";
  } else { 
    x.className = x.className.replace(" show1", "");
  }
}

function likeFunction(x) {
  x.style.fontWeight = "bold";
  x.innerHTML = "Liked";
}