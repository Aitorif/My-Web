let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/guitarra.jpg') {
      miImage.setAttribute('src','images/1.jpg');
    } else if (miSrc === 'images/1.jpg') {
      miImage.setAttribute('src','images/2.jpg');
    } else {
      miImage.setAttribute('src', 'images/guitarra.jpg');
    }
}

let miBoton = document.querySelector('button');
let misubtitulo = document.querySelector( 'h2');

function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    misubtitulo.textContent = 'Espero que disfrutes de mi música,' + miNombre;
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    misubtitulo.textContent = 'Espero que disfrutes de mi música,' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}

function estableceNombreUsuario() {
    let miNombre = prompt('Introduzca su nombre.');
    if(!miNombre) {
      estableceNombreUsuario();
    } else {
      localStorage.setItem('nombre', miNombre);
      misubtitulo.innerHTML = 'Espero que disfrutes de mi música, ' + miNombre;
    }
  }
