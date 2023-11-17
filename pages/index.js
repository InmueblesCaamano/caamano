import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Image from 'next/image'
import NavBar from '@/components/navBar'
import Properties from '@/components/porperties'
import Carousel from '@/components/carousel'
import Footer from '@/components/footer'
import mongoose from 'mongoose'
export default function Home() {

  const dbConnect = async () => {
    try {
      await mongoose.connect('mongodb+srv://manuel:BNWJ4EqX7glnl1cq@cluster0.8qhzw.mongodb.net/caamano');
      console.log('DB connected');
    } catch (error) {
      console.log('DB error', error);
    }
  }

  dbConnect()

  return (
    <div>
      <div className='ws-button'>
        <Image className='ws-img-btn' src='/img/logo-ws.svg' width={40} height={40} alt='ws' />
      </div>
      <NavBar />
      <Carousel />
      <Properties />
      <Footer />
    </div>

  )
}
