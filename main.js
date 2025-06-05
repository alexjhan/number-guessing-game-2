// main.js
let vidas = 3;
const inputJugador = document.getElementById("inputJugador");
const numeroComputadora = document.getElementById("numeroComputadora");
const numeroJugador = document.getElementById("numeroJugador");
const btnComparar = document.getElementById("btnComparar");
const contadorVidas = document.getElementById("contadorVidas");
const mensaje = document.getElementById("mensaje");

btnComparar.addEventListener("click", () => {
  const valorJugador = parseInt(inputJugador.value);
  if (isNaN(valorJugador) || valorJugador < 1 || valorJugador > 10) {
    mensaje.textContent = "Por favor ingresa un número válido entre 1 y 10.";
    return;
  }

  const valorComputadora = Math.floor(Math.random() * 10) + 1;

  numeroJugador.textContent = valorJugador;
  numeroComputadora.textContent = valorComputadora;

  if (valorJugador === valorComputadora) {
    mensaje.style.color = "lime";
    mensaje.textContent = "¡Felicidades! Has acertado.";
    btnComparar.disabled = true;
  } else {
    vidas--;
    contadorVidas.textContent = vidas;
    mensaje.style.color = "red";
    mensaje.textContent = `Fallaste. El número era ${valorComputadora}.`;
    if (vidas === 0) {
      mensaje.textContent += " ¡Juego terminado!";
      btnComparar.disabled = true;
    }
  }
});
