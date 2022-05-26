import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useLocalStorage } from "../utilidades/hooks/useLocalStorage";
// import { postLogin } from "../utilidades/axios/AxiosFunctions";

const FormLogin = () => {
  const [usuarioInput, setUsusarioInput] = useState("");
  const [contrasenaInput, setContrasenaInput] = useState("");

  const [usuario, setUsuario] = useLocalStorage("usuario", "");
  const [contrasena, setContrasena] = useLocalStorage("contrasena", "");

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    setUsuario(usuarioInput);
    setContrasena(contrasenaInput);
    const dataLogin = {
      usernameOrEmail: usuario,
      password: contrasena,
    };
    useEffect(() => {
      postLogin(dataLogin);
    }, []);
  };

  return (
    <>
      <form className="" onSubmit={handleSubmitLogin}>
        <div className="mb-3">
          <label htmlFor="inputloginID" className="form-label text fs-4">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="inputloginID"
            value={usuarioInput}
            onChange={(e) => {
              setUsusarioInput(e.target.value);
              setUsuario(usuarioInput);
              console.log("usuario: " + usuario);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputLoginPassword" className="form-label text fs-4">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="inputLoginPassword"
            value={contrasenaInput}
            onChange={(e) => {
              setContrasenaInput(e.target.value);
              setContrasena(contrasenaInput);
              console.log("contraseña: " + contrasena);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="text fs-5">
            ¿Olvidó su contraseña? Clic{" "}
            <Link href="#">
              <a>aquí</a>
            </Link>
          </label>
        </div>
        <button type="submit" className="btn boton-login text fs-5">
          Iniciar Sesión
        </button>
      </form>
    </>
  );
};

export default FormLogin;
