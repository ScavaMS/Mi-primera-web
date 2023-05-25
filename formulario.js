    
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});



function validateRespuesta(respuesta) {
    const regex = /^si$/i;
    return regex.test(respuesta);
  }
  function validateForm() {
    const respuestaInput = document.getElementById('respuesta');
    const respuesta = respuestaInput.value;
    if (!validateRespuesta(respuesta)) {
      alert("Falso. Totalmente falso.");
    } else {
      alert("Que intelectual por dios.");
    }
  }