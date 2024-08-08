import './App.css'
import { Navbar } from "./ui/Navbar";
import { Portada } from "./pages/Portada";
import { Home } from './pages/Home';
import { Modal } from './ui/Modal';
import {  useState } from 'react';
import { imagesHeroRemeras } from "./data/heroRemeras.js";
import { heroBuzos } from "./data/heroBuzos.js";
import { Hero } from './ui/Hero.jsx';
import { Shop } from "./ui/Shop.jsx";
import { shopBuzos } from "./data/shopBuzos.js";
import { shopRemeras } from "./data/shopRemeras.js";
import { Footer } from "./ui/Footer.jsx";
export const App = () => {
  
  const [infos, setInfos] = useState([])

const addElement = (items) => {
  setInfos([])
  setInfos(prevInfo => ([...prevInfo, items]))
}


  return (
    <>
      <Portada />
    <Navbar/>
    <Home/>
    <Modal infoRecibida={infos}/>
    <Hero images={heroBuzos}/>
    <Shop shop={shopBuzos} infoModal={addElement}/>
<Hero images={imagesHeroRemeras}/>
<Shop shop={shopRemeras} infoModal={addElement}/>
<Footer/>
    </>
  );
};
