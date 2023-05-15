

const inputField = document.getElementById('terminal-input-field');
const output = document.querySelector('.terminal-output');

/*Terminal Java Script */
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

/*Task/Menu-Bar Script */