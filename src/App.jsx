import './App.css'
import { Navbar } from "./ui/Navbar";
import { Portada } from "./pages/Portada";
import { Home } from './pages/Home';
import { SectionShop } from './ui/SectionShop';
import { Modal } from './ui/Modal';
import { useEffect, useState } from 'react';
import { SectionDos } from './ui/SectionDos';
import { imagesHeroRemeras } from "./data/heroRemeras.js";
import { heroBuzos } from "./data/heroBuzos.js";

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
    <SectionDos images={imagesHeroRemeras}/>
    <Modal infoRecibida={infos}/>
    <SectionShop infoModal={addElement}/>
    <SectionDos images={heroBuzos}/>
    </>
  );
};
