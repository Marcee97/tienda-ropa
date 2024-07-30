import './App.css'
import { Navbar } from "./ui/Navbar";
import { Portada } from "./pages/Portada";
import { Home } from './pages/Home';
import { SectionShop } from './ui/SectionShop';
import { Modal } from './ui/Modal';
import { useEffect, useState } from 'react';

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
    <SectionShop infoModal={addElement}/>
    </>
  );
};
