import Link from "next/link";
import React, { useState, useEffect } from "react";
import FormRegistroUsuario from "../FormRegistroUsuario";
import { postRegistro } from "components/utilidades/axios/AxiosFunctions";

const FormRegistroAuxiliar = () => {
  const [AuxiliarNombre, setAuxiliarNombre] = useState("");
  const [AuxiliarID, setAuxiliarID] = useState("");
  const [AuxiliarTelefono, setAuxiliarTelefono] = useState("");
  const [AuxiliarDireccion, setAuxiliarDireccion] = useState("");
  const [AuxiliarGenero, setAuxiliarGenero] = useState("");
  const [AuxiliarFechaNacimiento, setAuxiliarFechaNacimiento] = useState("");

  const [visibleAuxiliar, setVisibleAuxiliar] = useState(true);
  const [visibleUsuario, setVisibleUsuario] = useState(false);
  const NORMAL = "row";
  const HIDDEN = NORMAL + " d-none";

  const handleSubmitAuxiliar = (e) => {
    e.preventDefault();
    const dataAuxiliar = {
      id: AuxiliarID,
      nombre: AuxiliarNombre,
      direccion: AuxiliarDireccion,
      fechaNacimiento: AuxiliarFechaNacimiento,
      sexo: AuxiliarGenero,
      telefono: AuxiliarTelefono,
    };
    const restURL = `/personas/auxiliar`;

    postRegistro(dataAuxiliar, restURL);
  };

  return (
    <>
      <form
        onSubmit={handleSubmitAuxiliar}
        className={visibleAuxiliar ? NORMAL : HIDDEN}
      >
        <div className="col col-lg-6 col-sm-12">
          <div className="mb-3">
            <label
              htmlFor="inputRegistroAuxiliarNombre"
              className="form-label text fs-4"
            >
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="inputRegistroAuxiliarNombre"
              name="inputRegistroAuxiliarNombre"
              value={AuxiliarNombre}
              onChange={(e) => {
                setAuxiliarNombre(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputAuxiliarRegistroID"
              className="form-label text fs-4"
            >
              Cédula de Ciudadanía
            </label>
            <input
              type="number"
              className="form-control"
              id="inputAuxiliarRegistroID"
              name="inputAuxiliarRegistroID"
              value={AuxiliarID}
              onChange={(e) => {
                setAuxiliarID(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputRegistroAuxiliarTelefono"
              className="form-label text fs-4"
            >
              Número de teléfono
            </label>
            <input
              type="number"
              className="form-control"
              id="inputRegistroAuxiliarTelefono"
              name="inputRegistroAuxiliarTelefono"
              value={AuxiliarTelefono}
              onChange={(e) => {
                setAuxiliarTelefono(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="col col-lg-6 col-sm-12">
          <div className="mb-3">
            <label
              htmlFor="inputRegistroAuxiliarDireccion"
              className="form-label text fs-4"
            >
              Dirección
            </label>
            <input
              type="text"
              className="form-control"
              id="inputRegistroAuxiliarDireccion"
              name="inputRegistroAuxiliarDireccion"
              value={AuxiliarDireccion}
              onChange={(e) => {
                setAuxiliarDireccion(e.target.value);
              }}
            />
          </div>
          <div className="input-group mb-3 padding-genero">
            <label
              className="input-group-text text fs-4"
              htmlFor="inputRegistroAuxiliarGenero"
            >
              Género
            </label>
            <select
              className="form-select"
              id="inputRegistroAuxiliarGenero"
              value={AuxiliarGenero}
              onChange={(e) => {
                setAuxiliarGenero(e.target.value);
              }}
            >
              <option className="text fs-4" value="otro">
                Otro
              </option>
              <option className="text fs-4" value="masculino">
                Masculino
              </option>
              <option className="text fs-4" value="femenino">
                Femenino
              </option>
            </select>
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputRegistroAuxiliarFechaNacimiento"
              className="form-label text fs-4"
            >
              Fecha de nacimiento
            </label>
            <input
              type="date"
              className="form-control fs-4"
              id="inputRegistroAuxiliarFechaNacimiento"
              name="inputRegistroAuxiliarFechaNacimiento"
              value={AuxiliarFechaNacimiento}
              onChange={(e) => {
                setAuxiliarFechaNacimiento(e.target.value);
              }}
            />
          </div>
        </div>

        <button
          onClick={(e) => {
            // e.preventDefault();
            setVisibleAuxiliar(false);
            setVisibleUsuario(true);
          }}
          type="submit"
          className="btn boton-login mt-3 text fs-5"
        >
          Siguiente
        </button>
      </form>

      <FormRegistroUsuario
        rol="auxiliar"
        id={AuxiliarID}
        visible={visibleUsuario}
      />
    </>
  );
};

export default FormRegistroAuxiliar;
