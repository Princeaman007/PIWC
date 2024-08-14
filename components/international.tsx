// components/OverlayText.js

import Image from 'next/image';

const OverlayText = () => {
  return (
    //<div className="relative w-full h-96 border border-8 border-solid border-orange-500">
    <div className="relative">
      <Image 
        src="/PIWC/assets/multi.jpeg" 
        alt="Background Image" 
        //layout="fill" 
        objectFit="contain" 
        fill
        className="z-12 absolute opacity-20"
      />
      {/**<div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center z-10 p-4"> */}
      <div className="inset-0 bg-black bg-opacity-80 flex items-center justify-center z-15 p-4">
        <div className="text-white space-y-4 text-center ">
            <span className="block text-center md:text-5xl text-xl font-bold">PENTECOST INTERNATIONAL CHURCH</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default OverlayText;
