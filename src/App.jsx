import './App.css'
import { Navbar } from "./ui/Navbar";
import { Portada } from "./pages/Portada";
import { Home } from './pages/Home';
import { SectionShop } from './ui/SectionShop';
export const App = () => {
  return (
    <>
      <Portada />
    <Navbar/>
    <Home/>
    <SectionShop/>
    </>
  );
};
