import "../styles/home.css";
import { useRef, useEffect, useState, useMemo } from "react";

export const Home = () => {
  const lista = useRef(null);
  /*
  const [indexLista, setIndexLista] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndexLista((prevLista) => {
        const newValor = prevLista + 1;
        if (lista.current && lista.current.children[prevLista]) {
          const colorPrevio = lista.current.children[prevLista];
          colorPrevio.style.color = "black";
          colorPrevio.style.transform = "scale(1)";
          colorPrevio.style.transition = "1s all ease";
        }

        if (lista.current && lista.current.children[newValor]) {
          const colorActual = lista.current.children[newValor];
          colorActual.style.transform = "scale(1.3)";
          colorActual.style.transition = "1s all ease";
        }
        if (newValor >= lista.current.children.length) {
          setIndexLista(0);
        }
        if(lista.current){
          const moving = lista.current;
          moving.style.transform = 'translateY(-100%)'
          moving.style.transition = '85s all ease'
        }

       
        return newValor;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);
*/

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
    console.log("prueba de render");
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
        <div className="seccion-text">
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
      <section className="section-segunda">
        <div className="cont-img">
          <div className="div-img-1">

          <img
            src="https://images.pexels.com/photos/22742253/pexels-photo-22742253/free-photo-of-aluxana.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="img-estilo" className="img-1"
            />
            </div>
            <div className="div-img-2">

          <img
            src="https://images.pexels.com/photos/3611652/pexels-photo-3611652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Foto-img" className="img-2"
            />
            </div>
        
        </div>
        

        <div className="section-tercer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque blanditiis natus, quod reprehenderit est vitae eius asperiores doloribus, ducimus fugiat enim earum ullam magni nemo! Assumenda earum iusto dolorem magnam.</p>
        </div>
      </section>
    </>
  );
};
