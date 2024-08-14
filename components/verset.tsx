
import Image from 'next/image';

const Verset = () => {
  return (
   
    <div className="relative w-full h-96">
       {/** <div className="relative w-full h-96 border border-2 border-solid border-gray-950">*/}
      <Image 
        src="/PIWC/assets/verset.jpeg" 
        alt="Background Image" 
        layout="fill" 
        objectFit="cover" 
        className="z-12 absolute opacity-20"
      />
      <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center z-10 p-4">
        <div className="text-white space-y-4 text-center ">
          <p className='text-lg md:text-2xl'>
          For God so loved the world that he gave his only begotten Son, that whoever believes in him should not perish but have eternal life.
          </p>
          <span className="block text-center text-5xl font-bold ">Jean 3:16</span>
          
        </div>
      </div>
    </div>
  );
};

export default Verset;