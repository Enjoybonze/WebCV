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

function subscribe() {
  document.getElementById('subscribe').style.display='none';
}


function openNav() {
  document.getElementById("mySidenav").style.left = "0px";
}
function closeNav() {
  document.getElementById("mySidenav").style.left = "-250px";
}



document.getElementById("myBtn").click();
function myFunction() {
  var x = document.getElementById('myBtn');
  if (x.className.indexOf("demo3") == -1) {
    x.className += " demo3";
  } else { 
    x.className = x.className.replace(" demo3", "");
  }
}

function likeFunction(x) {
  x.style.fontWeight = "bold";
  x.innerHTML = "Liked";
}