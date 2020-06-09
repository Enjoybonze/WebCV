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
  
  
  
  document.getElementById("myBtn").click();
  function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("111show") == -1) {
      x.className += " 111show";
    } else { 
      x.className = x.className.replace(" 111show", "");
    }
  }
  
  function likeFunction(x) {
    x.style.fontWeight = "bold";
    x.innerHTML = "Liked";
  }