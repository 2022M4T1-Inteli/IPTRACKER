import Image from "next/image" //for image components
//import mock from "./mock" //jest - manual mocks are used to stub out functionality with mock data (This  ensures your tests will be fast and not flaky.)
import styles from '../../styles/Predios.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBatteryQuarter,
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons';
//import Image from "./Icone-bateria-Png.png"
import Link from 'next/link';

function StatusdaBateria ({props}) {  
    return(
    
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 justify-items-center">
            <div className="rounded border-2 border-black w-60 h-50 text-center hover:bg-sky-100">
              <FontAwesomeIcon icon={faBatteryQuarter} size="lg" />
              <h1 className="Montserrat font-bold">
                Aqui está o ID do equipamento
              </h1>

              <div className="mt-5">
                {' '}
                {/*margin-top*/}
                <h1>98%</h1>
              </div>

              <Link href="/admin">
                <button className="bg-blue-500 hover:scale-125 duration-200 rounded-lg mt-4  mb-4 p-2 hover:bg-blue-400">
                  Checar equipamento
                </button>
              </Link>
            </div>
          </div>
    )
          
}

export default StatusdaBateria



