import React from "react";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-right",
  iconColor: "white",
  customClass: {
    popup: "colored-toast",
  },
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
});

function swalIMC(imc, color) {
  let text;
  let background;

  if (color == "rojo") {
    text = "¡Atención! El infante tiene desnutrición severa";
    background = "#E42323";
  } else if (color == "naranja") {
    text = "¡Atención! El infante tiene desnutrición moderada";
    background = "#E46823";
  } else if (color == "amarillo") {
    text = "¡Cuidado! El infante tiene desnutrición moderada";
    background = "#E4DE23";
  } else if (color == "blanco") {
    text = "¡Excelente! El infante tiene un peso dentro de lo normal";
    background = "#A0EAEB";
  } else if (color == "lila") {
    text = "¡Cuidado! El infante tiene sobrepeso";
    background = "#8F87D7";
  } else if (color == "morado") {
    text = "¡Atención! El infante tiene obesidad";
    background = "#5C26D1";
  } else {
    background = "#ffffff";
  }

  return Swal.fire({
    customClass: {
      text: "texto-swal",
      title: "texto-swal",
      icon: "icon-swal",
    },
    icon: "warning",
    text: text,
    title: imc,
    background: background,
  });
}

function swalSuccess(mensaje) {
  return Toast.fire({
    icon: "success",
    title: mensaje,
  });
}

function swalError(mensaje) {
  Toast.fire({
    icon: "error",
    title: mensaje,
  });
}

function swalRegistroExitoso() {
  return Swal.fire({
    icon: "success",
    html:
      `<p class="text-light text fs-1 fw-bolder" >El IMC es de ${imc}</p>` +
      `<p class="text-light text fs-3 fw-semibold" >${text}</p>`,
    background: "#46e34e",
    confirmButtonText: "Ir a login",
  });
}

export { swalSuccess, swalError, swalIMC };
