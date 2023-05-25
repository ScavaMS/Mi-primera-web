document.querySelector(".button-menu-toggle").addEventListener("click", function() {
      document.querySelector(".nav-links").classList.toggle("nav-links-responsive");
  });
  

function showAlert() {alert("Descargate el Dragon Age 2 ya o te filtro la IP");}


  const aa = ["audio/Sera.mp3", "audio/Lost-Elf.mp3", "audio/Main-Theme.mp3", "audio/Calling-You-A-Liar.mp3", "audio/Rick.mp3", "audio/Hawke-Theme.mp3", "audio/Rogue-Heart.mp3", "audio/Grey-Warden.mp3", "audio/Orlais-Theme.mp3", "audio/The-One.mp3", "audio/Tavern.mp3", "audio/Dawn.mp3", "audio/Leliana.mp3"];  
  let cr = 1;

  function myFunction() {
    document.getElementById("cancion").src= aa[cr];
    document.getElementById("canciones").load();
    cr = Math.floor(Math.random() * aa.length);
    }

    function Liar() {
      document.getElementById("cancion").src= aa[3];
      document.getElementById("canciones").load();
    }

    function Dawn() {
      document.getElementById("cancion").src= aa[11];
      document.getElementById("canciones").load();
    }

    function Warden() {
      document.getElementById("cancion").src= aa[7];
      document.getElementById("canciones").load();
    }

    function Hawke() {
      document.getElementById("cancion").src= aa[5];
      document.getElementById("canciones").load();
    }

    function Leliana() {
      document.getElementById("cancion").src= aa[12];
      document.getElementById("canciones").load();
    }

    function Elf() {
      document.getElementById("cancion").src= aa[1];
      document.getElementById("canciones").load();
    }

    function Main() {
      document.getElementById("cancion").src= aa[2];
      document.getElementById("canciones").load();
    }


    function Orlais() {
      document.getElementById("cancion").src= aa[8];
      document.getElementById("canciones").load();
    }
   
    function Rogue() {
      document.getElementById("cancion").src= aa[6];
      document.getElementById("canciones").load();
    }

    function Cancion() {
      document.getElementById("cancion").src= aa[4];
      document.getElementById("canciones").load();
    }

    function Sera() {
      document.getElementById("cancion").src= aa[0];
      document.getElementById("canciones").load();
    }

    function Tavern() {
      document.getElementById("cancion").src= aa[10];
      document.getElementById("canciones").load();
    }

    function One() {
      document.getElementById("cancion").src= aa[9];
      document.getElementById("canciones").load();
    }


    
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