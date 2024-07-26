import "../styles/sectionshop.css";
import { data } from "../data/product.js";
import { useEffect, useRef } from "react";

export const SectionShop = () => {
  const productosRef = useRef([]);
  const hoverProductoRef = useRef([])

  useEffect(() => {

    const mouseEnter = (index) => {
      const currentHover = hoverProductoRef.current[index];
      currentHover.style.color = 'green'
    };

    const mouseLeave = (index) => {
      const currentHover = hoverProductoRef.current[index];
      currentHover.style.color = 'blue'
    };

    productosRef.current.forEach((refs, index) => {
      refs.addEventListener("mouseenter", () => mouseEnter(index));
      refs.addEventListener("mouseleave", () => mouseLeave(index));
    });

    return () => {
      productosRef.current.forEach((refs, index) => {
        if (refs) {
          refs.removeEventListener("mouseenter", ()=> mouseEnter(index));
          refs.removeEventListener("mouseleave", ()=> mouseLeave(index));
        }
      });
    };
  }, []);

  return (
    <section className="section-shop">
      <div className="contenedor-de-productos__shop">
        <h4 className="cont-ropa-titulo">Section Ropa</h4>
        <div className="contenedor-de-productos">
          {data.map((item, index) => (
            <div
              key={index}
              ref={el => (productosRef.current[index] = el)}
              className="card-producto"
            >
              <img src={item.img} alt="Foto Producto" />
              <article className="info-producto-hover" ref={oh => hoverProductoRef.current[index] = oh}>
                <p>{item.modelo}</p>
                <strong>{item.precio}</strong>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
