function showAlert() {alert("Descargate el Dragon Age 2 ya o te filtro la IP");}

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

  const aa = ["audio/Sera.mp3", "audio/Lost-Elf.mp3", "audio/Main-Theme.mp3", "audio/Calling-You-A-Liar.mp3", "audio/Rick.mp3", "audio/Hawke-theme.mp3", "audio/Rogue-Heart.mp3", "audio/Grey-Warden.mp3", "audio/Orlais-Theme.mp3", "audio/The-One.mp3", "audio/Tavern.mp3", "audio/Dawn.mp3", "audio/Leliana.mp3"];  
  let cr = 1;

  function myFunction() {
    document.getElementById("Sera").src= aa[cr];
    document.getElementById("cancione").load();
    cr = Math.floor(Math.random() * aa.length);

    }




    document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
    document.querySelector(".nav-links").
    classList.toggle("nav-links-responsive")})
    


    function Liar() {
      document.getElementById("Sera").src= aa[3];
      document.getElementById("cancione").load();
    }

    function Dawn() {
      document.getElementById("Sera").src= aa[11];
      document.getElementById("cancione").load();
    }

    function Warden() {
      document.getElementById("Sera").src= aa[7];
      document.getElementById("cancione").load();
    }

    function Hawke() {
      document.getElementById("Sera").src= aa[5];
      document.getElementById("cancione").load();
    }

    function Leliana() {
      document.getElementById("Sera").src= aa[12];
      document.getElementById("cancione").load();
    }

    function Elf() {
      document.getElementById("Sera").src= aa[1];
      document.getElementById("cancione").load();
    }

    function Main() {
      document.getElementById("Sera").src= aa[2];
      document.getElementById("cancione").load();
    }


    function Orlais() {
      document.getElementById("Sera").src= aa[8];
      document.getElementById("cancione").load();
    }
   
    function Rogue() {
      document.getElementById("Sera").src= aa[6];
      document.getElementById("cancione").load();
    }

    function Cancion() {
      document.getElementById("Sera").src= aa[4];
      document.getElementById("cancione").load();
    }

    function Sera() {
      document.getElementById("Sera").src= aa[0];
      document.getElementById("cancione").load();
    }

    function Tavern() {
      document.getElementById("Sera").src= aa[10];
      document.getElementById("cancione").load();
    }

    function One() {
      document.getElementById("Sera").src= aa[9];
      document.getElementById("cancione").load();
    }