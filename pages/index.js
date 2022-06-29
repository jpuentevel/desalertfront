import HeaderPresentacion from "../components/presentation/HeaderPresentacion";
import OpcionesPresentacion from "../components/presentation/OpcionesPresentacion";

export default function Home() {

  if (typeof window !== 'undefined') {
    console.log(JSON.parse(localStorage.getItem("user")));
  }

  return (
    <>
      <div>
        <HeaderPresentacion />
        <div className="degradado-azul-blanco"></div>
        <OpcionesPresentacion />
      </div>
    </>
  );
}
