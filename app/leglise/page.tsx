import Link from "next/link";
import Head from 'next/head';
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import HeroAbout from "@/components/heroAbout";
import WhoAreWe from "@/components/whoweare";


const Leglise = () =>{
    return (
        <div>
        <Head>
          <title>About the Church</title>
        </Head>
        <Navbar />
        <HeroAbout/>
        <WhoAreWe/>
        <Footer/>
      </div>
    )
}

export default Leglise;