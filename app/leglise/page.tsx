import Link from "next/link";
import Head from 'next/head';
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import HeroAbout from "@/components/heroAbout";
import CirclePhotoCollage from "@/components/nouveau";
import PastorProfile from "@/components/pasteur";
import ThemePastoral from "@/components/themepastoral";
import Programs from "@/components/programe";
import Nosvaleur from "@/components/valeur";
import Verset from "@/components/verset";


const Leglise = () =>{
    return (
        <div>
        <Head>
          <title>About the Church</title>
        </Head>
        <Navbar />
        <HeroAbout/>
        <CirclePhotoCollage/>
        <Nosvaleur/>
        <Verset/>
        <PastorProfile/>
        <Programs/>
        <Footer/>
        {/**
         * 
         */}
      </div>
    )
}

export default Leglise;