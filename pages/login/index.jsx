/* import styles from '@/styles/login.module.css' */
import NavBar from '@/components/navBar'
import Image from 'next/image'
export default function Login() {
    return (<>
        <div className='constainer bg-dark py-5 vh-100'>
            <div className='bg-dark'>
                <NavBar />
            </div>
            <div className='row'>
                <div className='col-4 offset-4'>
                    <div className='p-5 radius-5 mt-5'>
                        <div className='text-end text-light'>
                            {'< Regresar'}
                        </div>
                        <div className='text-center'>
                            <Image src='/img/logo2.svg' width={100} height={100} alt='logo caamano inmuebles' />
                        </div>
                        <h1 className='text-light'>Iniciar sesión</h1>
                        <form >
                            <input className='form-control mt-4' type="text" placeholder="Correo electrónico" />
                            <input className='form-control mt-4' type="password" placeholder="Contraseña" />
                            <button className='btn btn-primary mt-4' >Iniciar sesión</button>
                        </form>
                        {/* <div className='text-warning text-center pt-4'>
                            Aun no tienes una cuenta?
                            <a href="/registro" className='text-warning'>
                                Registrate
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </>)
}