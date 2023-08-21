var timeoutId;

function moveb1() {
  
  // Move Game Window
  var container = document.getElementById("b1");
  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;

  var randomX = Math.floor(Math.random() * (screenWidth - container.offsetWidth));
  var randomY = Math.floor(Math.random() * (screenHeight - container.offsetHeight));

  container.style.left = randomX + "px";
  container.style.top = randomY + "px";

}

function moveb2() {
  
  // Move Game Window
  var container = document.getElementById("b2");
  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;

  var randomX = Math.floor(Math.random() * (screenWidth - container.offsetWidth));
  var randomY = Math.floor(Math.random() * (screenHeight - container.offsetHeight));

  container.style.left = randomX + "px";
  container.style.top = randomY + "px";

}
