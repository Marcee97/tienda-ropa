import "../styles/home.css";
import { useRef, useEffect, useState, useMemo } from "react";
import { SectionDos } from "../ui/SectionDos";

export const Home = () => {
  const elemento = useRef(null);
  const [contador, setContador] = useState(3);

  useEffect(() => {
    const interv = setInterval(() => {
      setContador((prevContador) => {
        const newContador = prevContador + 1;

        if (newContador >= elemento.current.children.length) {
          return 3;
        }

        if (elemento.current) {
          elemento.current.children[prevContador].style.fontSize = "1em";
          elemento.current.children[prevContador].style.transition =
            ".8s all ease-in";
          elemento.current.children[prevContador].style.color = "#757575";
          elemento.current.children[prevContador].style.marginLeft = "0";
        }
        if (elemento.current) {
          elemento.current.children[newContador].style.fontSize = "1.5em";
          elemento.current.children[newContador].style.color = "#000";
          elemento.current.children[newContador].style.transition =
            ".8s all ease-in-out";
          elemento.current.children[newContador].style.marginLeft = "25px";
        }

        return newContador;
      });
    }, 1990);

    return () => clearInterval(interv);
  }, []);

  const palabras = [
    "Moda",
    "Estilo",
    "O ka nani",
    "Moda",
    "Elegans",
    "Elegance",
    "Ubwiza",
    "Eleganceni",
  ];

  const repeatTimes = 25;

  const palabrasRepetidas = useMemo(() => {
    return Array(repeatTimes).fill(palabras).flat();
  }, []);

  return (
    <>
      <section className="section-home">
        <div className="seccion-palabras-mov">
          <div className="contenedor-palabras-mov" ref={elemento}>
            {palabrasRepetidas.map((palabra, index) => (
              <p key={index}>{palabra}</p>
            ))}
          </div>
        </div>
        <div className="section-text">
          <p className="parrafo-presentacion">
            Bienvenidos a WE., donde la moda se encuentra con la elegancia y el
            estilo moderno. Nuestra tienda ofrece una selección exquisita de
            prendas que combinan lo clásico con las últimas tendencias desde
            atuendos casuales hasta piezas sofisticadas, cada artículo en
            nuestra colección está cuidadosamente elegido para realzar su
            personalidad y resaltar su elegancia. Descubra una experiencia de
            compra única donde la moda cobra vida y cada prenda cuenta una
            historia de estilo y sofisticación.
          </p>
        </div>
      </section>
    </>
  );
};
