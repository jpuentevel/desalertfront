import Link from "next/link";
import React, { useState } from "react";
import FormRegistroUsuario from "../FormRegistroUsuario";
import { registro } from "services/registroService";
import { postRegistro } from "components/utilidades/axios/AxiosFunctions";
import { swalError, swalSuccess } from "components/utilidades/SweetAlert2/swal";

const FormRegistroMedico = () => {
  const [MedicoNombre, setMedicoNombre] = useState("");
  const [MedicoID, setMedicoID] = useState("");
  const [MedicoTelefono, setMedicoTelefono] = useState("");
  const [MedicoDireccion, setMedicoDireccion] = useState("");
  const [MedicoGenero, setMedicoGenero] = useState("");
  const [MedicoFechaNacimiento, setMedicoFechaNacimiento] = useState("");
  const [MedicoEspecialidad, setMedicoEspecialidad] = useState("");

  const [visibleMedico, setVisibleMedico] = useState(true);
  const [visibleUsuario, setVisibleUsuario] = useState(false);
  const NORMAL = "row";
  const HIDDEN = NORMAL + " d-none";

  const handleSubmitMedico = async (e) => {
    e.preventDefault();
    const dataMedico = JSON.stringify({
      id: MedicoID,
      nombre: MedicoNombre,
      direccion: MedicoDireccion,
      fechaNacimiento: MedicoFechaNacimiento,
      sexo: MedicoGenero,
      telefono: MedicoTelefono,
      cargo: "medico",
      especialidad: MedicoEspecialidad,
    });
    const restURL = `medicos`;

    // const response = await postRegistro(restURL, dataMedico);

    try {
      const response = await registro(restURL, dataMedico);
      console.log("Respuesta medico", response);
      swalSuccess("Primera parte correcta");
    } catch (error) {
      console.log(error);
      swalError("Error");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmitMedico}
        className={visibleMedico ? NORMAL : HIDDEN}
      >
        <div className="col col-lg-6 col-sm-12">
          <div className="mb-3">
            <label
              htmlFor="inputRegistroMedicoNombre"
              className="form-label text fs-4"
            >
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="inputRegistroMedicoNombre"
              name="inputRegistroMedicoNombre"
              value={MedicoNombre}
              onChange={(e) => {
                setMedicoNombre(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputMedicoRegistroID"
              className="form-label text fs-4"
            >
              Cédula de Ciudadanía
            </label>
            <input
              type="number"
              className="form-control"
              id="inputMedicoRegistroID"
              name="inputMedicoRegistroID"
              value={MedicoID}
              onChange={(e) => {
                setMedicoID(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputRegistroMedicoTelefono"
              className="form-label text fs-4"
            >
              Número de teléfono
            </label>
            <input
              type="number"
              className="form-control"
              id="inputRegistroMedicoTelefono"
              name="inputRegistroMedicoTelefono"
              value={MedicoTelefono}
              onChange={(e) => {
                setMedicoTelefono(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputRegistroMedicoDireccion"
              className="form-label text fs-4"
            >
              Dirección
            </label>
            <input
              type="text"
              className="form-control"
              id="inputRegistroMedicoDireccion"
              name="inputRegistroMedicoDireccion"
              value={MedicoDireccion}
              onChange={(e) => {
                setMedicoDireccion(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="col col-lg-6 col-sm-12">
          <div className="mb-3">
            <label
              htmlFor="inputRegistroMedicoEspecialidad"
              className="form-label text fs-4"
            >
              Especialidad
            </label>
            <input
              type="text"
              className="form-control"
              id="inputRegistroMedicoEspecialidad"
              name="inputRegistroMedicoEspecialidad"
              value={MedicoEspecialidad}
              onChange={(e) => {
                setMedicoEspecialidad(e.target.value);
              }}
            />
          </div>
          <div className="input-group mb-3 padding-genero">
            <label
              className="input-group-text text fs-4"
              htmlFor="inputRegistroMedicoGenero"
            >
              Género
            </label>
            <select
              className="form-select"
              id="inputRegistroMedicoGenero"
              value={MedicoGenero}
              onChange={(e) => {
                setMedicoGenero(e.target.value);
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
              htmlFor="inputRegistroMedicoFechaNacimiento"
              className="form-label text fs-4"
            >
              Fecha de nacimiento
            </label>
            <input
              type="date"
              className="form-control fs-4"
              id="inputRegistroMedicoFechaNacimiento"
              name="inputRegistroMedicoFechaNacimiento"
              min="1900-01-01"
              onChange={(e) => {
                setMedicoFechaNacimiento(e.target.value);
              }}
            />
          </div>
        </div>

        <button
          onClick={(e) => {
            // e.preventDefault();
            setVisibleMedico(false);
            setVisibleUsuario(true);
          }}
          type="submit"
          className="btn boton-login mt-3 text fs-5"
        >
          Siguiente
        </button>
      </form>

      <FormRegistroUsuario
        rol="medico"
        id={MedicoID}
        visible={visibleUsuario}
      />
    </>
  );
};

export default FormRegistroMedico;
