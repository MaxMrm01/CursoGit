// Función: crea un nuevo párrafo y lo añade en la parte inferior del cuerpo HTML.

function createParagraph() {
	var para = document.createElement("p");
	para.textContent = "¡Clickeaste el botón!";
	document.body.appendChild(para);
}

/*
	1. Obtiene referencias de todos los botones de la página y los ordena en una matriz.
	2. Recorre todos los botones y añade un clic event listener a cada uno de ellos.

	Cuando se pulsa cualquier botón, se ejecuta la función createParagraph().
*/

var buttons = document.querySelectorAll("button");

for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", createParagraph);
}
