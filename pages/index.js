import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Image from 'next/image'
import Article from '../components/article'
import NavBar from '@/components/navBar'
export default function Home() {
  return (
    <div className=''>
      <div className='ws-button'>
        <Image className='ws-img-btn' src='/img/logo-ws.svg' width={40} height={40} alt='ws'/>
      </div>
      <NavBar />
      <div className='background-img'>
        <div className='land'>
          <div className='imgWrapper'>
            <Image src='/img/logo2.svg' width={200} height={200} alt='logo'/>
          </div>
          <h1 className='mb-3 text-white'> <i className='bi bi-pin'/>Ecuentra la propiedad de tus sueños</h1>
          <input className='buscador' type='text' placeholder='Buscar...' />
        </div>
      </div>
      <div className='container mt-4 mb-5'>
        <div className='row'>
          <div className='col-12 pb-4'>
            <h2 className='tittle pt-5 pb-3'>
              Propiedades a la venta en Nueva{ } esparta
            </h2>
            <hr />
          </div>
          <div className='row'>
            <Article />
            <Article />
            <Article />
            <Article />
          </div>
        </div>
      </div>
    </div>

  )
}
