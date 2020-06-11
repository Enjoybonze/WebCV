function select (button) {
  document.getElementById("StP-IFrame").src ="./" + button.id + ".html";
  let buttons = document.getElementsByClassName("StP-ButtonNav");
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
  document.getElementById('StP-Subscribe').style.display='none';
}
  
  
function openNav() {
  document.getElementById("StP-MySidenav").style.left = "0px";
}
function closeNav() {
  document.getElementById("StP-MySidenav").style.left = "-250px";
}

 function openSoc() {
  document.getElementById("FiP-BotSocial").style.bottom = "0px";
}
function closeSoc() {
  document.getElementById("FiP-BotSocial").style.bottom = "-140px";
}
  
  
  
document.getElementById("SeP-Button").click();
function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("SeP-show") == -1) {
    x.className += " SeP-show";
  } else { 
    x.className = x.className.replace(" SeP-show", "");
  }
}
  
  function likeFunction(x) {
    x.style.fontWeight = "bold";
    x.innerHTML = "Liked";
  }