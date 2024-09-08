// Botones de gatos
const boton_gato = document.getElementById('boton_gato');
const boton_negro = document.getElementById('boton_gatoN');
const boton_amarillo = document.getElementById('boton_gatoA');
const boton_azul = document.getElementById('boton_azul');

boton_gato.onclick = () => {
    const imagen = document.getElementById("imagen_gato");
    imagen.alt = "imagen_gato";
    imagen.src = "https://i.pinimg.com/originals/a2/9e/99/a29e9961ef1b2de9e99778f6ef1a54a1.jpg";
    boton_gato.style = "display:none";
    boton_negro.style = "display:inline";
    boton_amarillo.style = "display:inline";
};

boton_negro.onclick = () => {
    const imagen = document.getElementById('imagen_gato');
    imagen.alt = "gato negro";
    imagen.src = "https://th.bing.com/th/id/OIP.rSTabHJg0gsp5OvMB1lxJwAAAA?rs=1&pid=ImgDetMain";
    boton_negro.style = "display:none";
    boton_amarillo.style = "display:none";
};

boton_amarillo.onclick = () => {
    const imagen = document.getElementById('imagen_gato');
    imagen.alt = "gato amarillo";
    imagen.src = "https://i.pinimg.com/originals/d8/a9/e9/d8a9e96e0f0acffbdc6ec7b3cd1090a8.jpg";
    boton_negro.style = "display:none";
    boton_amarillo.style = "display:none";
};

class Gato {
    constructor(nombre, imagen) {
        this.nombre = nombre;
        this.imagen = imagen;
    }

    // Guardar el gato en las cookies
    save() {
        let gatosGuardados = Gato.fetchAll();
        gatosGuardados.push(this);
        Gato.setCookie('gatos', gatosGuardados, 7);
    }

    // Obtener todos los gatos guardados en cookies
    static fetchAll() {
        return Gato.getCookie('gatos') || [];
    }

    // Mostrar el gato en la tarjeta
    static renderAll() {
        const gatos = Gato.fetchAll();
        gatos.forEach((gato) => {
            const tarjeta = document.createElement('div');
            tarjeta.classList.add('box', 'mb-3');
            tarjeta.innerHTML = `
                <h3 class="title is-5">${gato.nombre}</h3>
                <img src="${gato.imagen}" alt="${gato.nombre}" width="100">
            `;
            document.getElementById('tarjetas_gatos').appendChild(tarjeta);
        });
    }

    // Funciones de cookies
    static setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + JSON.stringify(cvalue) + ";" + expires + ";path=/";
    }

    static getCookie(cname) {
        const name = cname + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i].trim();
            if (c.indexOf(name) === 0) {
                return JSON.parse(c.substring(name.length, c.length));
            }
        }
        return [];
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Mostrar los gatos guardados en cookies al cargar la página
    Gato.renderAll();

    // Manejar el botón de guardar
    document.getElementById('guardar_gato').addEventListener('click', function() {
        const nombreGato = document.getElementById('nombre_gato').value;
        const imagenSeleccionada = document.querySelector('input[name="gato"]:checked').value;

        const nuevoGato = new Gato(nombreGato, imagenSeleccionada);
        nuevoGato.save();

        // Limpiar el formulario
        document.getElementById('nombre_gato').value = '';
        document.getElementById('formulario_gato').style.display = 'none';
        
        // Renderizar nuevamente los gatos
        document.getElementById('tarjetas_gatos').innerHTML = ''; // Limpiar las tarjetas existentes
        Gato.renderAll(); // Mostrar todas las tarjetas nuevamente
    });
});



//function deleteCookie(cname) {
//    document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
//}

// Usar esta linea para borrar las cookies
// Borrar la cookie de 'gatos'
//deleteCookie('gatos');

// Verificar que la cookie ha sido borrada
//console.log("Cookies actuales:", document.cookie);
