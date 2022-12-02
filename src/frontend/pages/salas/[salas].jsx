import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Sala from '../../components/Sala/Sala';
import stylePredio from '../../styles/Predios.module.css';
import { faMagnifyingGlass, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
function sala({ data }) {
  const router = useRouter();
  const { salas } = router.query;
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
        setData(data.filter(e => String(e).includes(inputValue)));
        setText(text - 1);
      } else {
        setText(text + 1);
        setData(datas.filter(e => String(e).includes(inputValue)));
      }
      setText(inputValue.length);
    } else {
      setText(0);
      chamadaDB();
    }
  };
  return (
    <div className="flex justify-center text-center">
      <div>
        <h1 className="Montserrat font-bold text-2xl">Salas</h1>
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
        <div>
          <Sala numeroSala={datas} numeroPredio={salas} />
        </div>
      </div>
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
  await axios.post(`${process.env.NEXT_PUBLIC_URL_SANDBOX}/Device/getSalas`, {
    number: ctx.params.salas
  })
  .then(element => {
    data = element.data;
  });
  return {
    props: {
      data
    }
  };
};
export default sala;