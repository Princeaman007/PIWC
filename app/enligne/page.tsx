
import Head from 'next/head';
import Navbar from "@/components/Navbar";
import Footer from '@/components/footer';
import FollowUs from '@/components/suivre';


const Enligne = () =>{
    return (
        <div>
        <Head>
          <title>En ligne</title>
        </Head>
        <Navbar />
        <main className="pt-14 min-h-screen flex flex-col items-center justify-center bg-gray-100">
         <FollowUs/>
        </main>
        <Footer/>
      </div>
      
    )
}

export default Enligne ;