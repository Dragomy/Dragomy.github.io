//ClickMe Minigame
var counter = 0;
function minigame() {
//Move Game Window
var container = document.getElementById("ClickMeWindow");
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

var randomX = Math.floor(Math.random() * (screenWidth - container.offsetWidth));
var randomY = Math.floor(Math.random() * (screenHeight - container.offsetHeight));

container.style.left = randomX + "px";
container.style.top = randomY + "px";
  
//FUN Values 
counter = counter + 1;
document.getElementById("counter").innerHTML = counter;
  
  if (counter == 2) {
     document.getElementById("counter").innerHTML = "Double Click:" + counter;
} else if (counter == 3) {
     document.getElementById("counter").innerHTML = "Triple Click:"+ counter;
} else if (counter == 4) {
     document.getElementById("counter").innerHTML = "Overclick:"+ counter;
} else if (counter == 5) {
     document.getElementById("counter").innerHTML = "Clicktacular + Clicking Spree:"+ counter;
} else if (counter == 6) {
     document.getElementById("counter").innerHTML = "Clicktrocity:"+ counter;
} else if (counter == 7) {
     document.getElementById("counter").innerHTML = "Clickamanjaro:"+ counter;
} else if (counter == 8) {
     document.getElementById("counter").innerHTML = "Clicktastrophe:"+ counter;
} else if (counter == 9) {
     document.getElementById("counter").innerHTML = "Clickpocalypse:"+ counter;
 } else if (counter == 10) {
     document.getElementById("counter").innerHTML = "Clickionaire + Clicking Frenzy:"+ counter;
} else if (counter == 15) {
     document.getElementById("counter").innerHTML = "Clicking Riot:"+ counter;
} else if (counter == 20) {
     document.getElementById("counter").innerHTML = "Rampage:"+ counter;  
} else if (counter == 25) {
     document.getElementById("counter").innerHTML = "Nightmare:"+ counter;  
} else if (counter == 30) {
     document.getElementById("counter").innerHTML = "Boogeyman:"+ counter;  
} else if (counter == 35) {
     document.getElementById("counter").innerHTML = "Grim Reaper:"+ counter;  
} else if (counter == 40) {
     document.getElementById("counter").innerHTML = "Demon:"+ counter; 
} else if (counter == 100) {
     document.getElementById("counter").innerHTML = "Demon:"+ counter;  
     window.location.href = 'bluescreen.html';

}
 
}
//Other Scripts
function toggleDisplay(elementId) {
  const element = document.getElementById(elementId);
  element.style.display = (element.style.display === 'none') ? 'block' : 'none';
}

function addButtonClickListener(buttonId, divId) {
  const button = document.getElementById(buttonId);
  const div = document.getElementById(divId);
  button.addEventListener('click', function() {
    toggleDisplay(divId);
  });
}

addButtonClickListener('curvButton', 'curvitae');
addButtonClickListener('termButton', 'term');
addButtonClickListener('findmeButton', 'findme');
addButtonClickListener('avarButton', 'mavata');
addButtonClickListener('aboutButton', 'aboutme');

addButtonClickListener('minimizecurvitae', 'curvitae');
addButtonClickListener('minimizeterminal', 'term');
addButtonClickListener('minimizefindme', 'findme');
addButtonClickListener('minimizemyavatar', 'mavata');
addButtonClickListener('minimizeaboutme', 'aboutme');

addButtonClickListener('closecurvitae', 'curvitae');
addButtonClickListener('closeterminal', 'term');
addButtonClickListener('closefindme', 'findme');
addButtonClickListener('closemyavatar', 'mavata');
addButtonClickListener('closeaboutme', 'aboutme');

const inputField = document.getElementById('terminal-input-field');
const output = document.querySelector('.terminal-output');

inputField.addEventListener('keydown', function(event) {
  if (event.key === "Enter") {
    const input = inputField.value;
    inputField.value = '';
    output.innerHTML += `<div>$ <span class="input-text">${input}</span></div>`;

    if (input === "reset") {
      output.innerHTML = '';
    } 
    else if (input === "start") {
      const text = "Hello and Welcome to this website. This is a Website showcasing something that should look a little bit like a Terminal ";
      let i = 0;
      const interval = setInterval(function() {
        if (i >= text.length) {
          clearInterval(interval);
          output.innerHTML += "<br>";
          output.scrollTop = output.scrollHeight; 
        } else {
          output.innerHTML += text.charAt(i);
          i++;
        }
      }, Math.floor(Math.random() * 90) + 10);
    }
    else if (input === "help") {
      output.innerHTML += `
        <div>reset -- Clears the terminal output</div>
        <div>start -- Displays welcome message</div>
        <div>load -- Displays a loading animation</div>
        <div>help -- Displays this help message</div>
        <div>Please leave command ideas here on CodePen or write me on Twitter :D </div>
      `;
    }
    else if (input === "load") {
      let i = 0;
      const interval = setInterval(function() {
        const loadingText = "Loading" + ".".repeat((i % 3) + 1);
        output.innerHTML = `<div>${loadingText}</div>`;
        i++;
        if (i >= 12) { 
          clearInterval(interval);
          output.innerHTML = 'This loadtime is totally faked. Sorry'; 
        }
      }, 700); 
    }
    else {
      output.scrollTop = output.scrollHeight; 
    }
  }
});


