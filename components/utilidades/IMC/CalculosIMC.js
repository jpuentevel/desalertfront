import Swal from "sweetalert2";

const calcularIMC = (altura, peso) => {
  let imcPrevio = peso / (altura * altura);
  const IMC = imcPrevio.toFixed(2);
  return IMC;
};

const calculoFinal = (altura, peso, edad) => {
  let imcPrevio = peso / (altura * altura);
  const imc = imcPrevio.toFixed(2);

  let rango;
  if (edad >= 0 && edad <= 5) {
    if (imc < 12.1) {
      rango = "d-s";
    } else if (imc >= 12.1 && imc <= 12.9) {
      rango = "d-m";
    } else if (imc >= 13.0 && imc <= 14.0) {
      rango = "d-l";
    } else if (imc >= 14.1 && imc <= 16.5) {
      rango = "n";
    } else if (imc >= 16.6 && imc <= 18.2) {
      rango = "s";
    } else if (imc >= 18.3) {
      rango = "o";
    }
  } else if (edad == 6) {
    if (imc < 12.1) {
      rango = "d-s";
    } else if (imc >= 12.1 && imc <= 12.9) {
      rango = "d-m";
    } else if (imc >= 13.0 && imc <= 14.0) {
      rango = "d-l";
    } else if (imc >= 14.1 && imc <= 16.7) {
      rango = "n";
    } else if (imc >= 16.8 && imc <= 18.4) {
      rango = "s";
    } else if (imc >= 18.5) {
      rango = "o";
    }
  } else if (edad == 7) {
    if (imc < 12.3) {
      rango = "d-s";
    } else if (imc >= 12.3 && imc <= 13.0) {
      rango = "d-m";
    } else if (imc >= 13.1 && imc <= 14.1) {
      rango = "d-l";
    } else if (imc >= 14.2 && imc <= 16.9) {
      rango = "n";
    } else if (imc >= 17.0 && imc <= 18.9) {
      rango = "s";
    } else if (imc >= 19.0) {
      rango = "o";
    }
  } else if (edad == 8) {
    if (imc < 12.4) {
      rango = "d-s";
    } else if (imc >= 12.4 && imc <= 13.2) {
      rango = "d-m";
    } else if (imc >= 13.3 && imc <= 14.3) {
      rango = "d-l";
    } else if (imc >= 14.4 && imc <= 17.3) {
      rango = "n";
    } else if (imc >= 17.3 && imc <= 19.6) {
      rango = "s";
    } else if (imc >= 19.7) {
      rango = "o";
    }
  } else if (edad == 9) {
    if (imc < 12.6) {
      rango = "d-s";
    } else if (imc >= 12.6 && imc <= 13.4) {
      rango = "d-m";
    } else if (imc >= 13.5 && imc <= 14.5) {
      rango = "d-l";
    } else if (imc >= 14.6 && imc <= 17.8) {
      rango = "n";
    } else if (imc >= 17.9 && imc <= 20.4) {
      rango = "s";
    } else if (imc >= 20.5) {
      rango = "o";
    }
  } else if (edad == 10) {
    if (imc < 12.8) {
      rango = "d-s";
    } else if (imc >= 12.8 && imc <= 13.6) {
      rango = "d-m";
    } else if (imc >= 13.7 && imc <= 14.8) {
      rango = "d-l";
    } else if (imc >= 14.9 && imc <= 18.4) {
      rango = "n";
    } else if (imc >= 18.5 && imc <= 21.3) {
      rango = "s";
    } else if (imc >= 21.4) {
      rango = "o";
    }
  } else if (edad == 11) {
    if (imc < 13.1) {
      rango = "d-s";
    } else if (imc >= 13.1 && imc <= 14.0) {
      rango = "d-m";
    } else if (imc >= 14.1 && imc <= 15.2) {
      rango = "d-l";
    } else if (imc >= 15.3 && imc <= 19.1) {
      rango = "n";
    } else if (imc >= 19.2 && imc <= 22.4) {
      rango = "s";
    } else if (imc >= 22.5) {
      rango = "o";
    }
  } else if (edad == 12) {
    if (imc < 13.4) {
      rango = "d-s";
    } else if (imc >= 13.4 && imc <= 14.4) {
      rango = "d-m";
    } else if (imc >= 14.5 && imc <= 15.7) {
      rango = "d-l";
    } else if (imc >= 15.8 && imc <= 19.8) {
      rango = "n";
    } else if (imc >= 19.9 && imc <= 23.5) {
      rango = "s";
    } else if (imc >= 23.6) {
      rango = "o";
    }
  } else if (edad == 13) {
    if (imc < 13.8) {
      rango = "d-s";
    } else if (imc >= 13.8 && imc <= 14.8) {
      rango = "d-m";
    } else if (imc >= 14.9 && imc <= 16.3) {
      rango = "d-l";
    } else if (imc >= 16.4 && imc <= 20.7) {
      rango = "n";
    } else if (imc >= 20.8 && imc <= 24.7) {
      rango = "s";
    } else if (imc >= 24.8) {
      rango = "o";
    }
  } else if (edad == 14) {
    if (imc < 14.3) {
      rango = "d-s";
    } else if (imc >= 14.3 && imc <= 15.4) {
      rango = "d-m";
    } else if (imc >= 15.5 && imc <= 16.9) {
      rango = "d-l";
    } else if (imc >= 17.0 && imc <= 21.7) {
      rango = "n";
    } else if (imc >= 21.8 && imc <= 25.8) {
      rango = "s";
    } else if (imc >= 25.9) {
      rango = "o";
    }
  } else if (edad == 15) {
    if (imc < 14.7) {
      rango = "d-s";
    } else if (imc >= 14.7 && imc <= 15.9) {
      rango = "d-m";
    } else if (imc >= 16.0 && imc <= 17.5) {
      rango = "d-l";
    } else if (imc >= 17.6 && imc <= 22.6) {
      rango = "n";
    } else if (imc >= 22.7 && imc <= 26.9) {
      rango = "s";
    } else if (imc >= 27.0) {
      rango = "o";
    }
  } else if (edad == 16) {
    if (imc < 15.1) {
      rango = "d-s";
    } else if (imc >= 15.1 && imc <= 16.4) {
      rango = "d-m";
    } else if (imc >= 16.5 && imc <= 18.1) {
      rango = "d-l";
    } else if (imc >= 18.2 && imc <= 23.4) {
      rango = "n";
    } else if (imc >= 23.5 && imc <= 27.8) {
      rango = "s";
    } else if (imc >= 27.9) {
      rango = "o";
    }
  } else if (edad == 17) {
    if (imc < 15.4) {
      rango = "d-s";
    } else if (imc >= 15.4 && imc <= 16.8) {
      rango = "d-m";
    } else if (imc >= 16.9 && imc <= 18.7) {
      rango = "d-l";
    } else if (imc >= 18.8 && imc <= 24.2) {
      rango = "n";
    } else if (imc >= 24.3 && imc <= 28.5) {
      rango = "s";
    } else if (imc >= 28.6) {
      rango = "o";
    }
  } else if (edad == 18) {
    if (imc < 15.7) {
      rango = "d-s";
    } else if (imc >= 15.7 && imc <= 17.2) {
      rango = "d-m";
    } else if (imc >= 17.3 && imc <= 191) {
      rango = "d-l";
    } else if (imc >= 19.2 && imc <= 24.8) {
      rango = "n";
    } else if (imc >= 24.9 && imc <= 29.1) {
      rango = "s";
    } else if (imc >= 29.2) {
      rango = "o";
    }
  } else {
    rango = "error";
  }

  let color;

  if (rango == "d-s") {
    color = "rojo";
  } else if (rango == "d-m") {
    color = "naranja";
  } else if (rango == "d-l") {
    color = "amarillo";
  } else if (rango == "n") {
    color = "blanco";
  } else if (rango == "s") {
    color = "lila";
  } else if (rango == "o") {
    color = "morado";
  } else {
    color = "error";
  }

  let text;
  let background;

  if (color == "rojo") {
    text = "¡Atención! El infante tiene desnutrición severa";
    background = "#bd4846";
  } else if (color == "naranja") {
    text = "¡Atención! El infante tiene desnutrición moderada";
    background = "#ff7e00";
  } else if (color == "amarillo") {
    text = "¡Cuidado! El infante tiene desnutrición moderada";
    background = "#fdde57";
  } else if (color == "blanco") {
    text = "¡Excelente! El infante tiene un peso dentro de lo normal";
    background = "#46e34e";
  } else if (color == "lila") {
    text = "¡Cuidado! El infante tiene sobrepeso";
    background = "#b1a0c6";
  } else if (color == "morado") {
    text = "¡Atención! El infante tiene obesidad";
    background = "#5f4879";
  } else {
    background = "#ffffff";
  }

  return Swal.fire({
    icon: "warning",
    html:
      `<p class="text-decoration-underline text-light text fs-1 fw-bolder" >El IMC es de ${imc}</p>` +
      `<p class="text-decoration-underline text-light text fs-3 fw-semibold" >${text}</p>`,
    background: background,
    confirmButtonText: 'Entendido',
  });
};

export { calcularIMC, calculoFinal };
