import Image from 'next/image';
import Link from 'next/link';
import 'animate.css';

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/assets/hero.jpeg"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 w-full h-full"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate__animated animate__fadeInDown">
          Welcome To PIWC BRUSSELS
        </h1>
        <p className="text-center text-lg md:text-2xl mb-8 animate__animated animate__fadeInUp">
          We are a community committed to serving and sharing love.
        </p>
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          <Link href="/leglise">A Propos</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
