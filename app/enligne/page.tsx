
import Head from 'next/head';
import Navbar from "@/components/Navbar";


const Enligne = () =>{
    return (
        <div>
        <Head>
          <title>En ligne</title>
        </Head>
        <Navbar />
        <main className="pt-14 min-h-screen flex flex-col items-center justify-center bg-gray-100">
          <h1 className="text-4xl font-bold text-center mb-8">
            En ligne
          </h1>
          <p className="text-center text-gray-700">
            Information about the church.
          </p>
        </main>
      </div>
    )
}

export default Enligne ;