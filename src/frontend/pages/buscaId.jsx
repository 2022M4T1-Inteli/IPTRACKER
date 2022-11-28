import Cards from '../components/buscaId/Card';
import { useState } from 'react';
import mock from '../components/buscaId/mock';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import stylePredio from '../styles/Predios.module.css'



function BuscaId() {
  const [text, setText] = useState('');
  const [mocks, setMocks] = useState(mock);

  const handleOnChange = event => {
    let inputValue = event.target.value;

    if (inputValue) {
      setText(inputValue);

      setMocks(mocks.filter(e => e.id.includes(inputValue)));
    } else {
      setText('');
      setMocks(mock);
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

      <Cards mock={mocks} />
    </div>
  );
}
export default BuscaId;
