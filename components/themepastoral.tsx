
import Image from 'next/image';

const ThemePastoral= () => {
  return (
    <div className="relative w-full h-96">
      <Image 
        src="/assets/verset.jpeg" 
        alt="Background Image" 
        layout="fill" 
        objectFit="cover" 
        className="z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center z-10 p-4">
        <div className="text-white space-y-4 text-center ">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4 text-center">WHO ARE WE</h2>
        <p className="text-center max-w-xl mb-16 text-gray-700">
        "Car Dieu a tant aimé le monde qu il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu il ait la vie éternelle."     
         </p>
          <span className="block text-center text-5xl font-bold ">Jean 3:16</span>
          
        </div>
      </div>
    </div>
  );
};

export default ThemePastoral;