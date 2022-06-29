import React, { useState } from "react";
import { swalSuccess, swalError } from "../SweetAlert2/swal";
const axios = require("axios");

const baseURL = "https://hero-desalert-api.herokuapp.com/api";

/* apiInstance = axios.create({ baseURL: baseURL });

apiInstance.interceptors.request.use(
    (request) => {
        request.token["1"]
    },
    (err) => err
); */

const postRegistro = (data, restURL) => {
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
      console.log(response);
    })
    .catch((error) => {
      swalError("Error al registrar");
      console.log(error);
    });
};

const postLogin = (data) => {

  axios({
    method: "post",
    url: baseURL + `/auth/iniciarSesion`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  })
    .then((response) => {
      swalSuccess("Inicio de sesión exitoso");
      console.log("RESPUESTA LOGIN", response);
      const token = response.data.token;
      console.log("RESPUESTA TOKEN: ", token);
      const { usuario, contrasena } = data;
      const user = {
          correo: usuario,
          contrasena: contrasena,
          token: token,
      }

      return user;
    })
    .catch((error) => {
      swalError("Error al iniciar sesión");
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
  postLogin,
  getInfante,
  getInfantes,
  getMedico,
  getAuxiliar,
  getAcudiente,
};
