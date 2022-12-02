import Link from 'next/link';
import ContainerEquipamentos from '../../components/ContainerEquipamentos/ContainerEquipamentos';

import { faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import stylePredio from '../../styles/Predios.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function equipamentos({ data }) {
  const [text, setText] = useState('');
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
    <div className="text-center mt-5">
      <h1 className="Montserrat font-bold text-2xl">Equipamentos</h1>
      <div className="justify-center flex">
        <div className="relative">
          <FontAwesomeIcon
            className="absolute lg:pl-3 pt-7 h-7 pl-5"
            icon={faMagnifyingGlass}
          ></FontAwesomeIcon>
          <input
            type="text"
            onChange={handleOnChange}
            className={stylePredio.inputSala}
            placeholder="Digite a sala que deseja"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-3/4">
          <ContainerEquipamentos props={datas}></ContainerEquipamentos>
        </div>
      </div>
      {/* <button id={styles.margin} className="bg-transparent border-2 rounded-full border-cyan-600 w-10 hover:bg-cyan-400 hover:border-transparent">
            <Link href="/salas"><FontAwesomeIcon icon={faHouse}></FontAwesomeIcon></Link>
        </button> */}
    </div>
  );
}
export const getStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking' //indicates the type of fallback
  };
};

export const getStaticProps = async ctx => {
  let data;
  let equipamentos = ctx.params.equipamentos;
  const predioSala = String(equipamentos).split('_');
  await axios
    .post(`${process.env.NEXT_PUBLIC_URL_SANDBOX}/Device/getEquipamentoSala`, {
      predio: predioSala[1],
      sala: predioSala[0]
    })
    .then(response => {
      data = response.data;
    });
  return { props: { data } };
};

export default equipamentos;
