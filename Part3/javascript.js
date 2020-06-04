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
function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function likeFunction(x) {
  x.style.fontWeight = "bold";
  x.innerHTML = "Liked";
}

function initMap() {
  var uluru = {lat: -25.344, lng: 131.036};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  var marker = new google.maps.Marker({position: uluru, map: map});
}