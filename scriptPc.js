//ClickMe Minigame
var counter = 0;
var timeoutId;

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
  

if (counter < 2) {
  document.getElementById("counter").innerHTML = "Double Click:" + counter;
  document.getElementById("ClickMeWindow").style.backgroundColor = '#000000';
  document.getElementById("ClickMeWindow").style.color = '#ffffff';
} else if (counter == 3) {
     document.getElementById("counter").innerHTML = "Triple Click:"+ counter;
     document.getElementById("ClickMeWindow").style.backgroundColor = '#111111';
     document.getElementById("ClickMeWindow").style.color = '#eeeeee';
} else if (counter == 4) {
     document.getElementById("counter").innerHTML = "Overclick:"+ counter;
     document.getElementById("ClickMeWindow").style.backgroundColor = '#222222';
     document.getElementById("ClickMeWindow").style.color = '#dddddd';
} else if (counter == 5) {
     document.getElementById("counter").innerHTML = "Clicktacular + Clicking Spree:"+ counter;
     document.getElementById("ClickMeWindow").style.backgroundColor = '#333333';
     document.getElementById("ClickMeWindow").style.color = '#cccccc';
} else if (counter == 6) {
     document.getElementById("counter").innerHTML = "Clicktrocity:"+ counter;
     document.getElementById("ClickMeWindow").style.backgroundColor = '#444444';
     document.getElementById("ClickMeWindow").style.color = '#bbbbbb';
} else if (counter == 7) {
     document.getElementById("counter").innerHTML = "Clickamanjaro:"+ counter;
     document.getElementById("ClickMeWindow").style.backgroundColor = '#555555';
     document.getElementById("ClickMeWindow").style.color = '#aaaaaa';
} else if (counter == 8) {
     document.getElementById("counter").innerHTML = "Clicktastrophe:"+ counter;
     document.getElementById("ClickMeWindow").style.backgroundColor = '#666666';
     document.getElementById("ClickMeWindow").style.color = '#999999';
} else if (counter == 9) {
     document.getElementById("counter").innerHTML = "Clickpocalypse:"+ counter;
     document.getElementById("ClickMeWindow").style.backgroundColor = '#777777';
     document.getElementById("ClickMeWindow").style.color = '#888888';
 } else if (counter == 10) {
     document.getElementById("counter").innerHTML = "Clickionaire + Clicking Frenzy:"+ counter;
     document.getElementById("ClickMeWindow").style.backgroundColor = '#888888';
     document.getElementById("ClickMeWindow").style.color = '#777777';
} else if (counter == 15) {
     document.getElementById("counter").innerHTML = "Clicking Riot:"+ counter;
     document.getElementById("ClickMeWindow").style.backgroundColor = '#999999';
     document.getElementById("ClickMeWindow").style.color = '#666666';
} else if (counter == 20) {
     document.getElementById("counter").innerHTML = "Rampage:"+ counter; 
     document.getElementById("ClickMeWindow").style.backgroundColor = '#aaaaaa'; 
     document.getElementById("ClickMeWindow").style.color = '#555555';
} else if (counter == 25) {
     document.getElementById("counter").innerHTML = "Nightmare:"+ counter;  
     document.getElementById("ClickMeWindow").style.backgroundColor = '#bbbbbb';
     document.getElementById("ClickMeWindow").style.color = '#444444';
} else if (counter == 30) {
     document.getElementById("counter").innerHTML = "Boogeyman:"+ counter;  
     document.getElementById("ClickMeWindow").style.backgroundColor = '#cccccc';
     document.getElementById("ClickMeWindow").style.color = '#333333';
} else if (counter == 30) {
     document.getElementById("counter").innerHTML = "Grim Reaper:"+ counter;  
     document.getElementById("ClickMeWindow").style.backgroundColor = '#dddddd';
     document.getElementById("ClickMeWindow").style.color = '#222222';
} else if (counter == 30) {
     document.getElementById("counter").innerHTML = "Demon:"+ counter;  
     document.getElementById("ClickMeWindow").style.backgroundColor = '#eeeeee';
     document.getElementById("ClickMeWindow").style.color = '#111111';
}

  // Reset counter if button is not pressed within 2 seconds
  clearTimeout(timeoutId);
  timeoutId = setTimeout(function () {
    counter = 0;
    document.getElementById("counter").innerHTML = counter;
  }, 1000);
  
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

//Terminal Output
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
      const text = "Hello and welcome to DragOS";
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
        <div>start -- Displays welcome message with a typing animation</div>
        <div>load -- Displays a loading animation</div>
        <div>help -- Displays this help message</div>
        <div></div>
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
          output.innerHTML = 'Loading loaded and executed succesfully!!'; 
        }
      }, 700); 
    }
    else {
      output.scrollTop = output.scrollHeight; 
    }
  }
});


