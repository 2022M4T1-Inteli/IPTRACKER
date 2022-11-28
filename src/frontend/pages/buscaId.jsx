import Cards from '../components/buscaId/Card';
import styles from '../styles/Predios.module.css';
import { useState } from 'react';
import mock from '../components/buscaId/mock';
import { useEffect } from 'react';

function BuscaId() {
  const [text, setText] = useState('');
  const [mocks, setMocks] = useState(mock);
  const [filterMock, setFilterMock] = useState(mock);

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
    <div className="">
      <div className="flex justify-center text-center ml-28">
        <h1 className="text-xl bold font-black">Busca por id</h1>
      </div>

      <div className="flex justify-center">
        <input
          type="text"
          className={styles.input}
          placeholder="ensira id"
          value={text}
          onChange={handleOnChange}
        />
      </div>
      <Cards mock={mocks} />
    </div>
  );
}
export default BuscaId;
