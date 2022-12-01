import Link from 'next/link';
import ContainerEquipamentos from '../../components/ContainerEquipamentos/ContainerEquipamentos';

import { faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import stylePredio from '../../styles/Predios.module.css';
import axios from 'axios';

function equipamentos({ data }) {
  async function chamada() {}

  chamada();
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
            className={stylePredio.inputSala}
            placeholder="Digite a sala que deseja"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-3/4">
          <ContainerEquipamentos props={data}></ContainerEquipamentos>
        </div>
      </div>
      {/* <button id={styles.margin} className="bg-transparent border-2 rounded-full border-cyan-600 w-10 hover:bg-cyan-400 hover:border-transparent">
            <Link href="/salas"><FontAwesomeIcon icon={faHouse}></FontAwesomeIcon></Link>
        </button> */}
    </div>
  );
}
export const getServerSideProps = async ctx => {
  let data;
  equipamentos = ctx.params.equipamentos;
  const predioSala = String(equipamentos).split('_');
  await axios
    .post('http://localhost:3001/Device/getEquipamentoSala', {
      predio: predioSala[1],
      sala: predioSala[0]
    })
    .then(response => {
      data = response.data;
    });
  return { props: { data } };
};

export default equipamentos;
