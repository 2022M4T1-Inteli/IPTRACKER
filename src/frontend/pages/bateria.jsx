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
import { useState } from 'react';

function Bateria({ data }) {
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
        <div>
          <StatusdaBateria props={data} />
        </div>
      </div>
      <div></div>
    </div>
  );
}
export const getServerSideProps = async ctx => {
  //{predios:,qnt:}
  let data;
  await axios
    .get('http://localhost:3001/Device/equipamentosRegistrados')
    .then(result => {
      data = result.data;
    })
    .catch(error => {
      ctx.res.writeHead(302, {
        Location: '/'
      });
      ctx.res.end();
    });

  return { props: { data } };
};

export default Bateria;
