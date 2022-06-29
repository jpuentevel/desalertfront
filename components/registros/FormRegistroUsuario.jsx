import Link from "next/link";
import React, { useState } from "react";
import { registro } from "services/registroService";
import { useRouter } from "next/router";
import { swalError, swalSuccess } from "components/utilidades/SweetAlert2/swal";

const FormRegistroUsuario = (props) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const NORMAL = "row";
  const HIDDEN = NORMAL + " d-none";

  const [disable, setDisable] = useState(true);

  const router = useRouter();
  const rol = router.query.rol;

  let rolTabla = "error";
  if (rol == "medico" || rol == "auxiliar") {
    rolTabla = "ROLE_ADMIN";
  } else if (rol == "acudiente") {
    rolTabla = "ROLE_USER";
  }

  const handleSubmitUsuario = async (e) => {
    e.preventDefault();
    const dataUsuario = JSON.stringify({
      email: Email,
      contrasena: Password,
    });

    const restURL = `${props.id}/usuario/${rolTabla}`;

    try {
      const response = await registro(restURL, dataUsuario);
      swalSuccess("Registro exitoso");
      console.log("RESPUESTA usuario: ", response);
      setDisable(false);
    } catch (error) {
      console.log(error);
      swalError("Error");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmitUsuario}
        className={props.visible ? NORMAL : HIDDEN}
      >
        <div className="mb-3">
          <label htmlFor="inputRegistroEmail" className="form-label text fs-4">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputRegistroEmail"
            name="inputRegistroEmail"
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="inputRegistroPassword"
            className="form-label text fs-4"
          >
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="inputRegistroPassword"
            name="inputRegistroPassword"
            value={Password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button
          type="submit"
          className="btn boton-login mt-3 text fs-5"
          disabled={!disable}
        >
          Registrarse
        </button>

        <Link href="/login">
          <button
            type="button"
            className="btn boton-login mt-3 text fs-5"
            disabled={disable}
          >
            Ir al login
          </button>
        </Link>
      </form>
    </>
  );
};

export default FormRegistroUsuario;
