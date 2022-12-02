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
import { useState, useEffect } from 'react';

function Bateria({ data }) {
  const [text, setText] = useState(0);
  const [datas, setData] = useState([]);

  async function chamadaDB() {
    setData(data);
  }

  useEffect(() => {
    chamadaDB();
  }, []);

  const handleOnChange = event => {
    let inputValue = event.target.value;

    if (inputValue) {
      if (text > inputValue.length) {
        setData(data);
        setData(data.filter(e => String(e.patrimonioId).includes(inputValue)));
        setText(text - 1);
      } else {
        setText(text + 1);
        setData(datas.filter(e => String(e.patrimonioId).includes(inputValue)));
      }

      setText(inputValue.length);
    } else {
      setText(0);
      chamadaDB();
    }
  };

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
          onChange={handleOnChange}
          className={styles.input}
          placeholder="Digite o número do prédio"
        />
      </div>
      <div className="flex justify-center">
        <div>
          <StatusdaBateria props={datas} />
        </div>
      </div>
      <div></div>
    </div>
  );
}
export const getStaticProps = async ctx => {
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
