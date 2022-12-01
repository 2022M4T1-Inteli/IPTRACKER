import Cards from '../components/buscaId/Card';
import { useEffect, useState } from 'react';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import stylePredio from '../styles/Predios.module.css';
import axios from 'axios';

function BuscaId({ data }) {
  return (
    <div className="text-center">
      <div className="flex justify-center text-center ml-28">
        <h1 className="Montserrat font-bold text-2xl">
          Buscar por equipamento
        </h1>
      </div>

      <div className="relative">
        <FontAwesomeIcon
          className="absolute lg:pl-32 pt-7 h-7 pl-5"
          icon={faMagnifyingGlass}
        ></FontAwesomeIcon>
        <input
          type="text"
          className={stylePredio.input}
          placeholder="Digite o ID!"
        />
      </div>

      <Cards mock={data} />
    </div>
  );
}

export const getServerSideProps = async ctx => {
  let data;
  await axios
    .get('http://localhost:3001/Device/equipamentosRegistrados')
    .then(response => {
      data = response.data;
    });
  return { props: { data } };
};

export default BuscaId;
