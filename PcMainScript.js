//Function used to toggle the Curriculum Vitae Window
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
  
  addButtonClickListener('CurViButton', 'CurriculumVitae');
  addButtonClickListener('CurViClose', 'CurriculumVitae');
 
  
