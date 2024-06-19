// components/OverlayText.js

import Image from 'next/image';

const OverlayText = () => {
  return (
    <div className="relative w-full h-96">
      <Image 
        src="/assets/multi.jpeg" 
        alt="Background Image" 
        layout="fill" 
        objectFit="cover" 
        className="z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center z-10 p-4">
        <div className="text-white space-y-4 text-center ">
            <span className="block text-center text-5xl font-bold ">EGLISE PENTECOST INTERNATIONAL</span>
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
