import Cards from '../components/buscaId/Card';
import { useEffect, useState } from 'react';
import mock from '../components/buscaId/mock';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import stylePredio from '../styles/Predios.module.css'
import axios from 'axios';


function BuscaId() {



  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  async function chamadaDB (){
    axios.get("http://localhost:3001/Device/equipamentosRegistrados").then((element)=> {
      setData(element.data)
    })

  }

  useEffect(()=>{
    chamadaDB()
  },[])


  const handleOnChange = event => {
    let inputValue = event.target.value;

    if (inputValue) {
      setText(inputValue);

      setData(data.filter(e => e.patrimonioId.includes(inputValue)));
    } else {
      setText('');
      chamadaDB()
    }
  };

  return (
    <div className="text-center">


      <div className="flex justify-center text-center ml-28">
        <h1 className="Montserrat font-bold text-2xl">Buscar por equipamento</h1>
      </div>


      <div className="relative">
        <FontAwesomeIcon className="absolute lg:pl-32 pt-7 h-7 pl-5" icon={faMagnifyingGlass}></FontAwesomeIcon>
        <input

          type="text"
          value={text}
          onChange={handleOnChange}
          className={stylePredio.input}
          placeholder="Digite o ID!" />
      </div>

      <Cards mock={data} />
    </div>
  );
}
export default BuscaId;
