import StatusdaBateria from '../components/Bateria/Bateria';
import styles from '../styles/Predios.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBatteryQuarter,
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons';
//import Image from "./Icone-bateria-Png.png"
import Link from 'next/link';
import axios from 'axios';

function Bateria() {
  axios
    .get('http://10.128.65.146:3000Device/equipamentosRegistrados')
    .then(result => {
      console.log(result);
    });
  
  
  return (
    <div className="text-center">
      {' '}
      {/*abertura da div principal que está centralizando o conteúdo*/}
      <div className="relative">
        <h1 className="Montserrat font-bold text-2xl text-black lg:pl-28">
          Status da Bateria
        </h1>
        <FontAwesomeIcon
          className="absolute lg:pl-32 pt-7 h-7 sm:pl-5"
          icon={faMagnifyingGlass}
        ></FontAwesomeIcon>
        <input
          type="text"
          className={styles.input}
          placeholder="Digite o número do prédio"
        />
      </div>
      <div className="flex justify-center">
        <div className="w-3/4">
          <StatusdaBateria props="a" />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Bateria;
