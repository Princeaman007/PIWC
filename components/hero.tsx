'use client';
import Image from 'next/image';
import Link from 'next/link';
import 'animate.css';
import { useEffect, useState } from 'react';

const useWidth = () => {
  const [width, setWidth] = useState(0)
  const handleResize = () => setWidth(window.innerWidth)
  useEffect(() => {
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return width
}

const Hero = () => {
  const width = useWidth();
  console.log(width);
  return (
    <div className="relative md:w-full md:h-screen md:mt-42 border border-2 border-solid border-gray-950">
      {width > 400 ?
        <Image
        src="/assets/hero.jpeg"
        alt="Hero Image"
        fill
        object-fill
        //width={500}
        //height={800}
        //style={{width: "100%", height: "50%"}}
        //objectFit="cover"
        className="inset-0 w-full h-full"
        //className="absolute h-fit"
      />
      :
      <Image
        src="/assets/hero.jpeg"
        alt="Hero Image"
        width={500}
        height={800}
        //style={{width: "100%", height: "50%"}}
        objectFit="cover"
        //className="inset-0 w-full h-full"
        //className="absolute h-fit"
      />
      }
      {/*<div className="absolute inset-0 bg-black opacity-50"></div>*/}

       {/*div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">*/}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate__animated animate__fadeInDown">
          Welcome To PIWC BRUSSELS
        </h1>
        <p className="text-center text-lg md:text-2xl mb-8 animate__animated animate__fadeInUp">
          We are a community committed to serving and sharing love.
        </p>
        <button className="bg-amber-400 hover:bg-amber-200 text-white font-bold py-2 px-4 rounded">
          <Link href="/leglise">About</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
