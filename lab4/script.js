// Función 1: Generar tabla de números
function numq() {
    let numero = parseInt(prompt("Por favor, ingresa un número:"));
    if (isNaN(numero)) {
        alert("Por favor, ingresa un número válido.");
        return;
    }

    let output = document.getElementById('output');
    output.innerHTML = "<table border='1'><tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>";

    for (let i = 1; i <= numero; i++) {
        output.innerHTML += `<tr><td>${i}</td><td>${i * i}</td><td>${i * i * i}</td></tr>`;
    }

    output.innerHTML += "</table>";
}

// Función 2: Suma aleatoria
function sumaAleatoria() {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    const sumaCorrecta = num1 + num2;

    const startTime = new Date();
    const respuestaUsuario = parseInt(prompt(`¿Cuál es la suma de ${num1} y ${num2}?`));
    const endTime = new Date();
    const tiempoTranscurrido = (endTime - startTime) / 1000; // Convertir milisegundos a segundos

    if (respuestaUsuario === sumaCorrecta) {
        alert(`¡Correcto! Tardaste ${tiempoTranscurrido} segundos en responder.`);
    } else {
        alert(`Incorrecto. La suma correcta es ${sumaCorrecta}. Tardaste ${tiempoTranscurrido} segundos en responder.`);
    }
}

// Función 3: Contador de números en un arreglo
function contador(arreglo) {
    let negativos = 0;
    let ceros = 0;
    let mayoresACero = 0;

    arreglo.forEach(num => {
        if (num < 0) negativos++;
        else if (num === 0) ceros++;
        else mayoresACero++;
    });

    return { negativos, ceros, mayoresACero };
}

function mostrarContador() {
    let n = parseInt(prompt("Dame el tamaño del arreglo:"));
    if (isNaN(n)) {
        alert("Por favor, ingresa un número válido.");
        return;
    }

    let numeros = [];
    while (n > 0) {
        let num = parseInt(prompt("Dame un número para el conjunto:"));
        if (!isNaN(num)) {
            numeros.push(num);
            n--;
        } else {
            alert("Por favor, ingresa un número válido.");
        }
    }

    let resultado = contador(numeros);
    let output = document.getElementById('output');
    output.innerHTML = `<br> Números negativos: ${resultado.negativos}`;
    output.innerHTML += `<br> Ceros: ${resultado.ceros}`;
    output.innerHTML += `<br> Números mayores a cero: ${resultado.mayoresACero}<br>`;
}

// Función 4: Promedios de arreglos
function promedios(matriz) {
    return matriz.map(fila => {
        const suma = fila.reduce((acc, num) => acc + num, 0);
        return suma / fila.length;
    });
}

function mostrarPromedios() {
    let cantidadMatrices = parseInt(prompt("Ingrese la cantidad de matrices que desea crear:"));
    let cantidadNumeros = parseInt(prompt("Ingrese la cantidad de números que tendrá cada matriz:"));
    if (isNaN(cantidadMatrices) || isNaN(cantidadNumeros)) {
        alert("Por favor, ingresa números válidos.");
        return;
    }

    let matrices = [];
    for (let i = 0; i < cantidadMatrices; i++) {
        let matriz = [];
        for (let j = 0; j < cantidadNumeros; j++) {
            let numero = parseInt(prompt(`Ingrese el número ${j + 1} para la matriz ${i + 1}:`));
            if (!isNaN(numero)) {
                matriz.push(numero);
            } else {
                alert("Por favor, ingresa un número válido.");
                return;
            }
        }
        matrices.push(matriz);
    }

    let promediosMatrices = promedios(matrices);
    let output = document.getElementById('output');
    output.innerHTML = `Promedios de cada fila en cada matriz: [${promediosMatrices.join(', ')}]`;
}

// Función 5: Inverso de un número
function inverso(numero) {
    return parseInt(numero.toString().split('').reverse().join(''), 10);
}

function mostrarInverso() {
    let numero = parseInt(prompt("Dame un número:"));
    if (isNaN(numero)) {
        alert("Por favor, ingresa un número válido.");
        return;
    }

    let numeroInverso = inverso(numero);
    let output = document.getElementById('output');
    output.innerHTML = `<br> Número original: ${numero}`;
    output.innerHTML += `<br> Número inverso: ${numeroInverso}`;
}

// Función 6: Ejemplo de solución personalizada
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
    document.write(`${persona.datoMostrar}`);
    personas.forEach(persona => persona.mostrarDato(datoMostrar));
}