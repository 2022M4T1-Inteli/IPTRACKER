import Link from 'next/link';
import { useState } from 'react';

function Card({ mock }) {
  const [view, setView] = useState(false);
  const [numberD, setNumberD] = useState(0);
  const [quandi, setQuanti] = useState(0);

  return (
    <div className="flex justify-center">
      <div className="grid  lg:grid-cols-3 lg:gap-20 md:grid-cols-1 justify-items-center lg:w-100 md:w-90 lg:pl-28">
        {mock.map(element => (
          <div className="flex flex-col rounded-lg border-2 border-black w-80 shadow-md lg:mb-0 mb-4 items-center">
            <div className="flex  m-4 rounded-md bg-ipt w-24 p-2 text-white items-center justify-center">
              <p className="ml-2 text-2xl ">Id: {element.number}</p>
            </div>

            <div className="flex gap-2 text-2xl items-center justify-center m-4">
              <h1>Predio 1,sala kgb</h1>
            </div>

            <div className="text-2xl text-center">
              <p>
                Última atualização - <span>10:00</span>
              </p>
            </div>

            <div className="flex justify-center">
              <Link href="/salas">
                <button className="bg-green-500 hover:scale-125 duration-200 rounded-lg mt-4  mb-4 p-2 hover:bg-green-400">
                  Ver detalhes
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
