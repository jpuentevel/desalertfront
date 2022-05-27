import React, { useState } from "react";
import { swalSuccess, swalError } from "../SweetAlert2/swal";
const axios = require("axios");

const baseURL = "http://localhost/api";

const postRegistro = (data, restURL) => {
  let respuesta = false;

  axios({
    method: "post",
    url: baseURL + restURL,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  })
    .then((response) => {
      swalSuccess("Registro exitoso");
      respuesta = true;
      console.log(response);
    })
    .catch((error) => {
      swalError("Error al registrar");
      respuesta = false;
      console.log(error);
    });

  return respuesta;
};

const postLogin = async () => {
  await axios({
    method: "post",
    url: baseURL + `/auth/iniciarSesion`,
    data: data,
  })
    .then((response) => {
      swalSuccess("Registro exitoso");
      console.log(response);
    })
    .catch((error) => {
      swalError("Error al registrar");
      console.log(error);
    });
};

const getInfante = async (id) => {
  const [infante, setInfante] = useState();
  await axios
    .get(baseURL + "/infantes/" + id)
    .then((response) => {
      console.log(response.data);
      setInfante(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

  return infante;
};

const getInfantes = async () => {
  const [infantes, setInfantes] = useState([]);
  await axios
    .get(baseURL + "/infantes/")
    .then((response) => {
      console.log(response.data);
      setInfantes(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

  return infantes;
};

const getMedico = async () => {
  const [medico, setMedico] = useState();
  await axios
    .get(baseURL + "/medicos/" + id)
    .then((response) => {
      console.log(response.data);
      setMedico(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

  return medico;
};

const getAuxiliar = async () => {
  const [auxiliar, setAuxiliar] = useState();
  await axios
    .get(baseURL + "/auxiliar/" + id)
    .then((response) => {
      console.log(response.data);
      setAuxiliar(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

  return auxiliar;
};

const getAcudiente = async () => {
  const [acudiente, setAcudiente] = useState();
  await axios
    .get(baseURL + "/acudiente/" + id)
    .then((response) => {
      console.log(response.data);
      setAcudiente(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

  return acudiente;
};

export {
  postRegistro,
  getInfante,
  getInfantes,
  getMedico,
  getAuxiliar,
  getAcudiente,
};
