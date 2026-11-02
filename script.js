
const botonCarta = document.getElementById("abrirCarta");
const carta = document.getElementById("cartaCompleta");
const mensaje = document.getElementById("mensaje");

botonCarta.addEventListener("click", () => {
    carta.classList.toggle("oculto");

    if (carta.classList.contains("oculto")) {
        botonCarta.textContent = "Abrir mi mensaje 💕";
        mensaje.style.display = "block";
    } else {
        botonCarta.textContent = "Cerrar mi mensaje 💗";
        mensaje.style.display = "none";
        crearCorazones(18);
    }
});

function crearCorazon() {
    const corazon = document.createElement("span");

    corazon.className = "corazon";
    corazon.textContent = ["💗", "💕", "💖", "🎀", "✨"][
        Math.floor(Math.random() * 5)
    ];

    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = (18 + Math.random() * 25) + "px";
    corazon.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.getElementById("corazones").appendChild(corazon);

    setTimeout(() => corazon.remove(), 8000);
}

function crearCorazones(cantidad) {
    for (let i = 0; i < cantidad; i++) {
        setTimeout(crearCorazon, i * 120);
    }
}

document.getElementById("botonCorazones").addEventListener("click", () => {
    crearCorazones(35);
});

// Corazones flotando continuamente
setInterval(crearCorazon, 700);
