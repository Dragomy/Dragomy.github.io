/*CURRICULUM VITAE*/
var curvButton = document.getElementById('curvButton');
var curvDiv = document.getElementById('curvitae');

curvButton.addEventListener('click', function() {
  if (curvDiv.style.display === 'none') {
    curvDiv.style.display = 'block';
  } else {
    curvDiv.style.display = 'none';
  }
});

/*TERMINAL UP DOWN*/
var termButton = document.getElementById('termButton');
var termDiv = document.getElementById('term');

termButton.addEventListener('click', function() {
  if (termDiv.style.display === 'block') {
    termDiv.style.display = 'none';
  } else {
    termDiv.style.display = 'block';
  }
});  

/*findem UP DOWN*/
var findmeButton = document.getElementById('findmeButton');
var findmeDiv = document.getElementById('findme');

findmeButton.addEventListener('click', function() {
  if (findmeDiv.style.display === 'block') {
    findmeDiv.style.display = 'none';
  } else {
    findmeDiv.style.display = 'block';
  }
});  

/*MA Avata UP DOWN*/
var avarButton = document.getElementById('avarButton');
var mavataDIV = document.getElementById('mavata');

avarButton.addEventListener('click', function() {
  if (mavataDIV.style.display === 'block') {
    mavataDIV.style.display = 'none';
  } else {
    mavataDIV.style.display = 'block';
  }
});  

/*baut me*/
var aboutButton = document.getElementById('aboutButton');
var aboutmeDIV = document.getElementById('aboutme');

aboutButton.addEventListener('click', function() {
  if (aboutmeDIV.style.display === 'block') {
    aboutmeDIV.style.display = 'none';
  } else {
    aboutmeDIV.style.display = 'block';
  }
});  

/*TERMINAL*/
const inputField = document.getElementById('terminal-input-field');
const output = document.querySelector('.terminal-output');

inputField.addEventListener('keydown', function(event) {
  if (event.key === "Enter") {
    let input = inputField.value;
    inputField.value = '';
    output.innerHTML += '<div>$ <span class="input-text">' + input + '</span></div>';

    if (input === "reset") {
      output.innerHTML = '';
    } 
    else if (input === "start") {
      const text = "Hello and Welcome to this website this is a Website showcasing something that should look a little bit like a Terminal ";
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
      <div>  reset -- Clears the terminal output</div>
      <div>  start -- Displays welcome message</div>
      <div>  load -- Displays a loading animation</div>
      <div>  help -- Displays this help message</div>
      <div>Please leave command ideas here on CodePen or write me on Twitter :D </div>
      `;
    }
    else if (input === "load") {
      let i = 0;
      const interval = setInterval(function() {
        let loadingText = "Loading" + ".".repeat((i % 3) + 1);
        output.innerHTML = '<div>' + loadingText + '</div>';
        i++;
        if (i >= 12) { 
          clearInterval(interval);
          // Here could be the "loaded" text
          output.innerHTML = 'This loadtime is totaly faked sorry im just testing :/ '; 
        }
      }, 700); 
    }
    else {
      output.scrollTop = output.scrollHeight; 
    }
  }
});
