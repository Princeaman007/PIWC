import Link from "next/link";
import Head from 'next/head';
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";


const Leglise = () =>{
    return (
        <div>
        <Head>
          <title>About the Church</title>
        </Head>
        <Navbar />
        <main className="pt-14 min-h-screen flex flex-col items-center justify-center bg-gray-100">
          <h1 className="text-4xl font-bold text-center mb-8">
            About the Church
          </h1>
          <p className="text-center text-gray-700">
            Information about the church.
          </p>
        </main>
        <Footer/>
      </div>
    )
}

export default Leglise;