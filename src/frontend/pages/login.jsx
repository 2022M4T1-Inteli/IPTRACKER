import Button from '../components/Button'
import styles from '../styles/Login.module.css'

function Login() {
    return(
        <div className='w-full flex flex-col lg:flex-row justify-center h-screen items-center'>
            <div className='hidden lg:flex w-2/4 flex-col items-center gap-32'>
                <div>
                    <img src='/logoIPT.svg' className='w-96 ml-36'></img>
                </div>
            </div>
            <div className='flex justify-center lg:w-2/4'>
                <div className='flex flex-col items-center lg:bg-fundo-ipt gap-12 lg:w-4/6 rounded-xl lg:shadow-3xl'>
                    <div className='flex justify-center mt-4'>
                        <h1 className='Montserrat font-bold text-3xl text-black lg:text-white'>Bem Vindo(a)</h1>
                    </div>
                    <div className='flex justify-center items-center'>
                        <label className='text-black font-semibold text-sm lg:text-white Montserrat text-center'>Para que possamos continuar, necessitamos que informe suas credenciais no campo abaixo</label>
                    </div>
                    <div className='flex justify-center'>
                        <img src='./avatar.svg' className='w-32'/>
                    </div>
                    <div className='flex justify-center'>
                        <div className='flex flex-row items-center'>
                            <img src='/user-solid.svg' className='w-6 absolute ml-2'></img>
                            <input type="text" placeholder='Usuario' className={styles.input}></input>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='flex flex-row items-center'>
                            <img src='/key-solid.svg' className='w-6 ml-2 absolute'></img>
                            <input type="password" placeholder='Senha' className={styles.input}></input>
                        </div>
                    </div>
                    <Button ctn={"Continuar"}/>  
                </div>
            </div>
        </div>
    )
}

export default Login