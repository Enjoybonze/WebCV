function myFunction() {
    var x = document.getElementById("id");
    if (x.className === "topnav") {
      x.className += "responsive";
    } 
    else {
      x.className = "topnav";
    }
}
function myFunction() {
  document.getElementById("colorchange").style.color = "red";
}



function select (button) {
  console.log(button.id)
  document.getElementById("Frame").src ="./" + button.id + ".html";
  let buttons = document.getElementsByClassName("buttonnav");
  for (let index = 0; index < buttons.length; index++) {
    const element = buttons[index];
    element.classList.remove("selectedbutton");
  }
  button.classList.add("selectedbutton");
}