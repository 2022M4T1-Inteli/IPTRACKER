import styles from '../styles/Login.module.css'
import Button from '../components/Button.jsx'

function LoginTeste() {
  return (
    <div >
        <div className="flex flex-col min-h-screen w-full justify-between items-center sm:flex-row">
            <div className='h-96'>
                <img src='/finder.svg' className='w-1/4 top-32 left-32 absolute hidden sm:flex'/>
                <div className={styles.logoIPTback}></div>
            </div>
            <div></div>
            <div className='flex flex-col items-center w-1/3 mr-40 rounded-xl'>
                {/* <div className='flex justify-center ml-44 mt-8 h-1/4'>
                    <img src='/logoIPT.png' className='w-2/4'/>
                </div> */}
                <div className='flex justify-center mt-8'>
                    <h1 className='Montserrat font-semibold text-3xl'>Bem-Vindo(a)</h1>
                </div>
                <div className='flex flex-col justify-center items-center gap-8 mt-8'>
                    <img src='/avatar.svg' className='w-1/4'/>
                    <div className='flex flex-row'>
                        <img src='/user-solid.svg' className='w-6 absolute mt-3 ml-2'></img>
                        <input className={styles.input} placeholder="Usuário"></input>

                    </div>
                    <div className='flex flex-row mb-6'>
                        <img src='/key-solid.svg' className='w-6 absolute mt-3 ml-2'></img>
                        <input type="password" className={styles.input} placeholder="Senha"></input>
                    </div>
                    <Button ctn={"Continuar"}/>
                </div>
            </div>
        </div>
    </div>
    
  );
}

export default LoginTeste;
