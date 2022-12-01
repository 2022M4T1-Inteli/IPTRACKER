import Predio from '../components/Predio/Predios';
import styles from '../styles/Predios.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHouse } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useState } from 'react';

function Predios() {
  const [state, setState] = useState([]);

  async function teste() {
    await axios
      .get('http://10.128.65.146:3001/Device/getPredios')
      .then(response => {
        setState(response.data);
      });
  }

  teste();

  return (
    <div className="text-center justify-center ">
      <h1 className="Montserrat font-bold text-2xl text-black lg:pl-28">
        Prédios
      </h1>
      <div className="relative    ">
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
      <div>
        <Predio props={state} />
      </div>
    </div>
  );
}

export const getServerSideProps = async ctx => {
  let cookieToken = ctx.req.cookies['token'];
  //{predios:,qnt:}
  await axios
    .get(`http://localhost:3001/User/Infos`, {
      headers: { Authorization: `Bearer ${cookieToken}` }
    })
    .then(response => {})
    .catch(error => {
      ctx.res.writeHead(302, {
        Location: '/'
      });
      ctx.res.end();
    });

  return { props: {} };
};

export default Predios;
