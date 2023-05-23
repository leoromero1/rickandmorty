import React from "react";
import viteLogo from "../../components/assets/vite.svg";
import reactLogo from "../../components/assets/react.svg";
import tailwindLogo from "../../components/assets/tailwind.svg";
import rickMortyLogo from "../../components/assets/rym.svg";
import reduxLogo from "../../components/assets/redux.svg";
// import css from "../../components/assets/css.svg";

export const About = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl flex justify-center font-bold mb-4">About</h2>
          <p className="text-lg text-gray-800">
            ¡Bienvenido a nuestra aplicación de información de personajes de
            "Rick and Morty"! Aquí podrás explorar una amplia gama de
            personajes, descubrir sus detalles y marcar tus favoritos.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl flex justify-center font-bold mb-4">
            Características principales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">
                Visualización de lista de personajes
              </h3>
              <p className="text-gray-800">
                Explora una lista completa de personajes con sus nombres,
                imágenes, estados y especies correspondientes.
              </p>
            </div>
            <div className="bg-green-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Detalles de personaje</h3>
              <p className="text-gray-800">
                Haz clic en cualquier personaje para ver información detallada,
                como su estado, especie, última ubicación conocida y origen.
              </p>
            </div>
            <div className="bg-yellow-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Favoritos</h3>
              <p className="text-gray-800">
                Marca tus personajes favoritos y guárdalos en tu lista personal.
                Tus favoritos se mantendrán incluso después de recargar la
                página.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl flex justify-center font-bold mb-4">Tecnologías utilizadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center justify-center p-4">
              <img src={viteLogo} alt="Vite" className="h-16 mb-4" />
              <p className="text-gray-800 text-center">
                Vite es un entorno de desarrollo web extremadamente rápido y
                liviano que facilita la creación de aplicaciones React con una
                configuración mínima y un tiempo de inicio instantáneo.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <img src={reactLogo} alt="React" className="h-16 mb-4" />
              <p className="text-gray-800 text-center">
                React es una biblioteca JavaScript para construir interfaces de
                usuario eficientes y reactivas. Es ampliamente utilizado en el
                desarrollo web moderno.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <img
                src={tailwindLogo}
                alt="Tailwind CSS"
                className="h-16 mb-4"
              />
              <p className="text-gray-800 text-center">
                Tailwind CSS es un framework de diseño utilitario de bajo nivel
                que permite construir rápidamente interfaces web personalizadas
                utilizando clases predefinidas.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <img src={reduxLogo} alt="Redux" className="h-16 mb-4" />
              <p className="text-gray-800 text-center">
                Redux es una biblioteca de gestión del estado que permite
                mantener un estado global en aplicaciones JavaScript. Es
                ampliamente utilizado en aplicaciones de React para gestionar
                datos compartidos.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <img
                src={rickMortyLogo}
                alt="Rick and Morty API"
                className="h-16 mb-4"
              />
              <p className="text-gray-800 text-center">
                Rick and Morty API es una API pública que proporciona datos
                sobre personajes, episodios y ubicaciones relacionados con la
                famosa serie de televisión "Rick and Morty".
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
