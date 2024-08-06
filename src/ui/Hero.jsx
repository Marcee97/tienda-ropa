import "../styles/hero.css";
import { useEffect, useRef} from "react";




export const Hero = ({images}) => {
  const sectionRef = useRef(null);
  const contHeroRef = useRef(null);
  const sectionScrollRef = useRef(null);

  useEffect(() => {
    const scrollEvent = () => {

      const sectionRefs = sectionRef.current;
      const contHero = contHeroRef.current;
      const sectionScroll = sectionScrollRef.current;
      const position = sectionRefs.getBoundingClientRect().top;

      if (position < 0) {
        const scrollCalc = Math.floor(Math.abs(position) / 3.90);
        const scrollCalcOne = Math.floor(Math.abs(position) / 5.175);

        const scrollFinal = Math.max(0, 116 - scrollCalc);
        const scrollContXl = Math.max(0,100 - scrollCalcOne);
        contHero.style.height = `${scrollFinal}%`;
        sectionScroll.style.height = `${scrollContXl}%`

      } else if (position >= 0) {
        contHero.style.height = "100%";
        sectionScroll.style.height = '100%'
      }
    };
    window.addEventListener("scroll", scrollEvent);

    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  return (
    <section className="section-hero" ref={sectionRef}>
        {images && images.map((img, index) => (
        <div key={index}>

      <div className="cont-general">

          <div className="cont-hero-prueba-dos">
          <img src={img.imgS} alt="foto demo hero" />
          <article className="contenedor-absoluto" ref={contHeroRef}>
            <p className="titulo-hero">We.</p>
          </article>
        </div>
        <div className="cont-img-transicion-dos" >
            <img src={img.imgXxl} alt="Foto demo tamaño XXl hero" />
          <article className="element-transicion" ref={sectionScrollRef}>
          <h3 className="titulo-element-trancision">{images.map((text) => (text.section))}</h3>
          </article>
        </div>
      </div>
      <div className="div-secundario-scroll">

        <p className="titulo-element">{images.map((text)=>(text.section))}</p>
      </div>
          
          
        </div>
      ))}
    </section>
  );
};
