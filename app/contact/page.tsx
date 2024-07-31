import Link from "next/link";
import Head from 'next/head';
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact";


const contact = () =>{
    return (
        <div>
        <Head>
          <title>About the Church</title>
        </Head>
        <Navbar />
        <main className="pt-14 min-h-screen flex flex-col items-center justify-center bg-gray-100">
           <ContactForm/>
        </main>
        <Footer/>
      </div>
    )
}

export default contact;