import Link from "next/link";
import React, { useState, useEffect } from "react";
import { swalSuccess, swalError } from "components/utilidades/SweetAlert2/swal";
import { useLocalStorage } from "../utilidades/hooks/useLocalStorage";
import { login } from "services/loginService";
import { postLogin } from "../utilidades/axios/AxiosFunctions";

const FormLogin = () => {
  const [usuarioInput, setUsusarioInput] = useState("");
  const [contrasenaInput, setContrasenaInput] = useState("");

  // const [user, setUser] = useLocalStorage("usuario", "");

  const [user, setUser] = useState({
    email: "",
    contrasena: "",
    token: "",
  });

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const dataLogin = {
      usernameOrEmail: usuarioInput,
      password: contrasenaInput,
    };

    try {
      const token = await login(dataLogin);
      swalSuccess("Sesión iniciada");
      const userData = {
        email: dataLogin.usernameOrEmail,
        contrasena: dataLogin.password,
        token: token,
      };
      console.log("USER DATA: ", userData);
      /* setUser({
        ...user,
        email: dataLogin.usernameOrEmail,
        contrasena: dataLogin.password,
        token: token,
      });
      console.log("USER: ", user); */
      setUsusarioInput("");
      setContrasenaInput("");
    } catch (error) {
      console.log(error);
      swalError(error);
    }
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
