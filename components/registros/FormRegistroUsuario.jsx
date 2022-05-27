import Link from "next/link";
import React, { useState } from "react";
import { postRegistro } from "components/utilidades/axios/AxiosFunctions";
import { useRouter } from "next/router";

const FormRegistroUsuario = (props) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const NORMAL = "row";
  const HIDDEN = NORMAL + " d-none";

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
    const dataUsuario = {
      email: Email,
      password: Password,
    };
    const restURL = `/personas/${props.id}/usuario/${rolTabla}`;

    postRegistro(dataUsuario, restURL);
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

        <button type="submit" className="btn boton-login mt-3 text fs-5">
          Registrarse
        </button>
      </form>
    </>
  );
};

export default FormRegistroUsuario;
