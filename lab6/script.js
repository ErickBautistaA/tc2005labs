const boton_gato = document.getElementById('boton_gato');
const boton_negro = document.getElementById('boton_gatoN');
const boton_amarillo = document.getElementById('boton_gatoA');


boton_gato.onclick = () => {
    console.log("click");
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