//Darken Purple when scroling down
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var body = document.querySelector('body');
    var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    var opacity = scrollPosition / maxScroll;
    var darkenedPurple = darkenColor('#4a148c', opacity);

    body.style.backgroundColor = darkenedPurple;
  });
  
  function darkenColor(color, opacity) {
    var hex = color.replace('#', '');
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);
    var rgba = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity + ')';
    return rgba;
  }
  