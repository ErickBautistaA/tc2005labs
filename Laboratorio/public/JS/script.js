const boton_gato = document.getElementById('boton_gato');
const boton_negro = document.getElementById('boton_gatoN');
const boton_amarillo = document.getElementById('boton_gatoA');

const botton_azul = document.getElementById('boton_azul');


boton_gato.onclick = () => {
    const imagen =document.getElementById("imagen_gato");
    imagen.alt= "imagen_gato";
    imagen.src = "https://i.pinimg.com/originals/a2/9e/99/a29e9961ef1b2de9e99778f6ef1a54a1.jpg";
    boton_gato.style = "display:none";
    boton_negro.style ="display:inline";
    boton_amarillo.style ="dispaly:inline";

}

boton_negro.onclick = () => {
    const imagen = document.getElementById('imagen_gato');
    imagen.alt ="gato negro";
    imagen.src = "https://th.bing.com/th/id/OIP.rSTabHJg0gsp5OvMB1lxJwAAAA?rs=1&pid=ImgDetMain";
    boton_negro.style ="display:none";
    boton_amarillo.style ="display:none";
}

boton_amarillo.onclick = () => {
    const imagen = document.getElementById('imagen_gato');
    imagen.alt ="gato amarillo";
    imagen.src = "https://i.pinimg.com/originals/d8/a9/e9/d8a9e96e0f0acffbdc6ec7b3cd1090a8.jpg";
    boton_negro.style ="display:none";
    boton_amarillo.style ="display:none";
}

class Persona {
    constructor(nombre, edad, oficio) {
        this.nombre = nombre;
        this.edad = edad;
        this.oficio = oficio;
    }

    mostrarInformacion() {
        document.write("<br> Información de usuario <br>");
        document.write(`Nombre: ${this.nombre}<br>`);
        document.write(`Edad: ${this.edad}<br>`);
        document.write(`Oficio: ${this.oficio}<br>`);
    }

    mostrarDato(dato) {
        switch(dato) {
            case 'nombre':
                document.write(`Nombre: ${this.nombre}<br>`);
                break;
            case 'edad':
                document.write(`Edad: ${this.edad}<br>`);
                break;
            case 'oficio':
                document.write(`Oficio: ${this.oficio}<br>`);
                break;
            default:
                document.write('Dato no válido');
        }
    }
}


function ejemploPersonalizado() {
    const cantidadPersonas = parseInt(prompt("¿Cuántas personas desea crear?"));
    if (isNaN(cantidadPersonas)) {
        alert("Por favor, ingresa un número válido.");
        return;
    }

    const personas = [];
    for (let i = 0; i < cantidadPersonas; i++) {
        const nombre = prompt("Ingrese el nombre:");
        const edad = parseInt(prompt("Ingrese la edad:"));
        const oficio = prompt("Ingrese el oficio:");
        if (isNaN(edad)) {
            alert("Por favor, ingresa una edad válida.");
            return;
        }

        const persona = new Persona(nombre, edad, oficio);
        personas.push(persona);
    }

    personas.forEach(persona => persona.mostrarInformacion());

    const datoMostrar = prompt("¿Qué dato desea mostrar? (nombre, edad, oficio)");
    personas.forEach(persona => persona.mostrarDato(datoMostrar));
}


botton_azul.onclick = () => {
    ejemploPersonalizado();

}