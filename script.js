const form = document.getElementById("form");
const band = document.getElementById("band");
const nombre = document.getElementById("nombre");
const dni = document.getElementById("dni");
const mail = document.getElementById("mail");
const telefono = document.getElementById("telefono");
const entradas = document.getElementById("entradas");


function listo() {

  bandVer = band.options[band.selectedIndex].text;
  let elementoP = document.createElement("p");
        elementoP.classList.add("alerta");
        form.appendChild(elementoP);

  if (bandVer === "") {
    elementoP.textContent += "Debe insertar una banda, ";
    
  }
  if (nombre.value === "") {
    elementoP.textContent += "Debe insertar un nombre, ";
  }
  if (dni.value === "") {
    elementoP.textContent += "Debe insertar un DNI, ";
  }
  if (mail.value === "") {
    elementoP.textContent += "Debe insertar un Mail, ";
  }
  if (telefono.value === "") {
    elementoP.textContent += "Debe insertar un Telefono, ";
  }
  if (entradas.value === "") {
    elementoP.textContent += "Debe insertar una cantidad de entradas";
  }

  setTimeout(() => {
    elementoP.classList.add("hidden");
    form.removeChild(elementoP);
  }, 3000);
}
