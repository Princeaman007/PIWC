'use client'
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
const HeroAbout = () => {
  const width = useWidth();
  return (
    <div className="relative md:w-full md:h-screen md:mt-42 border border-2 border-solid border-gray-950">
      {width > 799 ?
        <Image
        src="/PIWC/assets/heroeglise.jpg"
        alt="Hero Image"
        fill
        object-fill
        className="inset-0 w-full h-full"
      />
      :
      <Image
       src="/PIWC/assets/heroeglise.jpg"
        alt="Hero Image"
        width={800}
        height={800}
        objectFit="cover"
      />
      }
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
        <h1 className="text-4xl text-center md:text-6xl font-bold mb-4 animate__animated animate__fadeInDown">
        CHURCH OF PENTECOST 
        </h1>
        <p className="text-center text-lg md:text-2xl mb-8 animate__animated animate__fadeInUp">
        Piwc Brussels.
        </p>
      </div>
    </div>
  );
};

export default HeroAbout;