import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faArrowRight, faHouse, faMobileButton, faArrowLeft, faShield } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

import styles from './SideBar.module.css'

function SideBar() {

    const [ admin, setAdmin ] = useState(true)
    const [ active, setActive ] = useState(false)

    useEffect(() => {
        if (active) {
            document.getElementById("sideBar").style.width = "14rem"
        } else {
            document.getElementById("sideBar").style.width = "5rem"
            console.log(window.innerWidth)
        }  
    }, [active])
    

    return (
        <div>
            <div id = "sideBar" className={styles.bodySideBar}>
                <div className="flex flex-col items-center h-full w-full gap-4">
                    <div className="flex justify-center items-center w-3/5 h-12 mt-4">
                        <button className='flex justify-center w-full h-full bg-transparent'><img src='/logoSideBar.svg' height={48} width={48}></img></button>
                    </div>
                    <div className="group flex justify-center items-center w-3/5 h-12 mt-4">
                        <button className='w-full h-full bg-transparent' onClick={() => setActive(!active)}><FontAwesomeIcon icon={active ? faArrowLeft : faArrowRight} size="xl" color='white'/></button>
                        {active ? "" : <label className='absolute left-24 bg-ipt w-32 rounded-lg justify-center h-8 items-center hidden group-hover:flex'>Expandir</label>}
                    </div>
                    <div className="group flex justify-center items-center w-3/5 h-12 mt-4 bg-ipt hover:bg-white rounded-2xl mt-12 transition duration-500">
                        <button className='w-full h-full bg-transparent'><FontAwesomeIcon icon={faHouse} size="xl"/>{active ? <label className='ml-4 Montserrat'>Home</label> : ""}</button>
                        {active ? "" : <label className='absolute left-24 bg-ipt w-32 rounded-lg justify-center h-8 items-center hidden group-hover:flex'>Home</label>}
                    </div>
                    <div className="group flex justify-center items-center w-3/5 h-12 mt-4 bg-ipt hover:bg-white rounded-2xl">
                        <button className='w-full h-full bg-transparent'><FontAwesomeIcon icon={faMobileButton} size="xl"/> {active ? <label className='Montserrat'>Dispositivos</label> : ""}</button>
                        {active ? "" : <label className='absolute left-24 bg-ipt w-32 rounded-lg justify-center h-8 items-center hidden group-hover:flex transition duration-500'>Dispositivos</label>}
                    </div>
                    {admin ?
                        <div className="group flex justify-center items-center w-3/5 h-12 mt-4 bg-ipt hover:bg-white rounded-2xl transition duration-1000">
                            <button className='w-full h-full bg-transparent'><FontAwesomeIcon icon={faShield} size="xl"/> {active ? <label className='ml-2 Montserrat'>Admin</label> : ""}</button>
                            {active ? "" : <label className='absolute left-24 bg-ipt w-32 rounded-lg justify-center h-8 items-center hidden group-hover:flex transition duration-500'>Admin</label>}
                        </div>
                        : ""
                    }
                    
                </div>
            </div>
            <div className={styles.bodySideBarMobile}>
                <div className="flex flex-row items-center h-full w-full gap-4">
                    <div className="flex justify-center items-center h-3/4 w-12 ml-4">
                        <button className='flex justify-center w-full h-full bg-transparent'><img src='/logoSideBar.svg' height={48} width={48}></img></button>
                    </div>
                    <div className="flex justify-center items-center h-3/4 w-12 ml-8 bg-ipt hover:bg-white rounded-2xl">
                        <button className='w-full h-full bg-transparent'><FontAwesomeIcon icon={faHouse} size="xl"/></button>
                    </div>
                    <div className="flex justify-center items-center h-3/4 w-12 bg-ipt hover:bg-white rounded-2xl">
                        <button className='w-full h-full bg-transparent'><FontAwesomeIcon icon={faMobileButton} size="xl"/></button>
                    </div>
                    {admin ?
                        <div className="group flex justify-center items-center h-3/4 w-12 bg-ipt hover:bg-white rounded-2xl">
                            <button className='w-full h-full bg-transparent'><FontAwesomeIcon icon={faShield} size="xl"/></button>
                        </div>
                        : ""
                    }
                </div>
            </div>
        </div>
    )
}

export default SideBar