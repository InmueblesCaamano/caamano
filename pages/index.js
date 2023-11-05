import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Image from 'next/image'
import NavBar from '@/components/navBar'
import Properties from '@/components/porperties'
import Carousel from '@/components/carousel'
export default function Home() {
  return (
    <div>
      <div className='ws-button'>
        <Image className='ws-img-btn' src='/img/logo-ws.svg' width={40} height={40} alt='ws'/>
      </div>
      <NavBar />
      <Carousel />
      <Properties/>
    </div>

  )
}
